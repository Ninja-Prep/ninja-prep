import { createLogger, format, transports, config } from 'winston'
const { combine, json, prettyPrint, colorize, printf } = format
import expressWinston from 'express-winston'
import httpContext from 'express-http-context'
import express from 'express'

const { LoggingWinston } = require('@google-cloud/logging-winston')

const loggingWinston = new LoggingWinston({})

let loggingTransports = []

const isProduction = process.env.NODE_ENV == 'production'

if (isProduction) {
    loggingTransports = [new transports.Console(), loggingWinston]
} else {
    loggingTransports = [new transports.Console()]
}

export const logger = createLogger({
    format: combine(
        colorize(),
        json(),
        prettyPrint(),
        format.splat(),
        format.simple(),
        printf((info) => {
            const reqId = httpContext.get('reqId') || ''
            const level = info.level
            return ` [${level}]: ${reqId} ${info.message}`
        })
    ),
    levels: config.syslog.levels,
    transports: loggingTransports
})

function getLevel(req: any, res: any) {
    let level = ''
    if (res.statusCode >= 100) {
        level = 'info'
    }
    if (res.statusCode >= 400) {
        level = 'warn'
    }
    if (res.statusCode >= 500) {
        level = 'error'
    }
    if (res.statusCode == 401 || res.statusCode == 403) {
        level = 'critical'
    }
    return level
}

const expresslogger = expressWinston.logger({
    transports: loggingTransports,
    meta: isProduction,
    format: format.combine(json(), prettyPrint()),
    statusLevels: false,
    level: (req, res) => getLevel(req, res),
    msg: (req, res) => {
        const level = getLevel(req, res)
        return `[${level}] ${req.id} HTTP ${res.statusCode} ${req.method} ${req.url} {{res.responseTime}}ms`
    }
})

const expressErrorLogger = expressWinston.errorLogger({
    transports: loggingTransports,
    meta: isProduction,
    format: combine(json(), prettyPrint()),
    msg: (req, res) => {
        const level = getLevel(req, res)
        return `[${level}] ${req.id} HTTP ${res.statusCode} ${req.method} ${req.url} {{res.responseTime}}ms`
    }
})

export default function (app: express.Application) {
    app.use(expressErrorLogger)
    app.use(expresslogger)
}
