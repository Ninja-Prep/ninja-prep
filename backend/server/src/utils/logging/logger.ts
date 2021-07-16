import {config, createLogger, format, transports} from 'winston';
const {combine, json, prettyPrint, colorize, printf} = format;
import {ErrorReporting} from '@google-cloud/error-reporting';
import {LoggingWinston} from '@google-cloud/logging-winston';
import express, {Request, Response} from 'express';
import expressWinston from 'express-winston';
import httpContext from 'express-http-context';

const errors = new ErrorReporting({});

const printFormat = printf((info) => {
  const reqId = httpContext.get('reqId') || '';
  const level = info.level;
  if (typeof info.message === 'object') {
    const objString = JSON.stringify(info.message, null, 4);
    info.message = ` [${level}] ${reqId} ${objString}`;
    return info.message;
  } else {
    info.message = ` [${level}] ${reqId} ${info.message} `;
    return info.message;
  }
});

const loggingWinston = new LoggingWinston({});
const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.MOCHA_TEST === 'true';

let loggingTransports = [];
if (isProduction) {
  loggingTransports = [new transports.Console({}), loggingWinston];
} else {
  loggingTransports = [
    new transports.Console({
      format: combine(colorize({level: true})),
    }),
  ];
}

export const logger = createLogger({
  format: combine(
    json(),
    prettyPrint(),
    format.splat(),
    format.simple(),
    printFormat,
  ),
  levels: config.syslog.levels,
  transports: loggingTransports,
  silent: isTest,
});

// Strictly to complement error reporting since error reporting does not log to console
const consoleErrorLogger = createLogger({
  format: combine(
    json(),
    prettyPrint(),
    format.splat(),
    format.simple(),
    printFormat,
  ),
  levels: config.syslog.levels,
  transports: new transports.Console({}),
});

export const logError = (content: string | Error): void => {
  const reqId = httpContext.get('reqId') || '';
  if (typeof content === 'object') {
    const objString = JSON.stringify(content, null, 4);
    consoleErrorLogger.error(content);
    errors.report(`[ERROR] ${reqId} ${objString}`);
  } else {
    consoleErrorLogger.error(content);
    errors.report(`[ERROR] ${reqId} ${content}`);
  }
};

function getLevel(req: Request, res: Response) {
  let level = '';
  if (res.statusCode >= 100) {
    level = 'info';
  }
  if (res.statusCode >= 400) {
    level = 'warn';
  }
  if (res.statusCode >= 500) {
    level = 'error';
  }
  if (res.statusCode == 401 || res.statusCode == 403) {
    level = 'critical';
  }
  return level;
}

const expressWinstonTransports = [new transports.Console({})];

const expresslogger = expressWinston.logger({
  transports: expressWinstonTransports,
  meta: process.env.SHOULD_LOG_META == 'true',
  format: format.combine(json(), prettyPrint()),
  statusLevels: false,
  level: (req: Request, res: Response) => getLevel(req, res),
  msg: (req: Request, res: Response) => {
    const level = getLevel(req, res);
    // eslint-disable-next-line max-len
    return `[${level}] ${req.id} HTTP ${res.statusCode} ${req.method} ${req.url} {{res.responseTime}}ms`;
  },
});

const expressErrorLogger = expressWinston.errorLogger({
  transports: expressWinstonTransports,
  meta: process.env.SHOULD_LOG_META == 'true',
  format: combine(json(), prettyPrint()),
  msg: (req, res) => {
    const level = getLevel(req, res);
    // eslint-disable-next-line max-len
    return `[${level}] ${req.id} HTTP ${res.statusCode} ${req.method} ${req.url} {{res.responseTime}}ms`;
  },
});

export default function (app: express.Application): void {
  if (process.env.MOCHA_TEST !== 'true') {
    app.use(expressErrorLogger);
    app.use(expresslogger);
    app.use(errors.express);
  }
}