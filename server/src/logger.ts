import { createLogger, format, transports, config } from 'winston'
const { combine, json, prettyPrint, colorize, printf } = format
import expressWinston from 'express-winston'
import httpContext from 'express-http-context'
import express from 'express'

const { LoggingWinston } = require('@google-cloud/logging-winston')

const consolePrintFormat = printf((info) => {
    const reqId = httpContext.get('reqId') || ''
    const level = info.level
    if (typeof info.message === 'object') {
        const objString = JSON.stringify(info.message, null, 4)
        return ` [${level}] ${reqId} ${objString}`
    } else {
        return ` [${level}] ${reqId} ${info.message} `
    }
})

const loggingWinston = new LoggingWinston({
    format: printf((info) => {
        const reqId = httpContext.get('reqId') || ''
        const level = info.level
        if (typeof info.message === 'object') {
            const objString = JSON.stringify(info.message, null, 4)
            info.message = ` [${level}] ${reqId} ${objString}`
        } else {
            info.message = ` [${level}] ${reqId} ${info.message} `
        }
        return info.message
    })
})

let loggingTransports: any[] = []

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
    loggingTransports = [
        new transports.Console({
            format: combine(consolePrintFormat)
        }),
        loggingWinston
    ]
} else {
    loggingTransports = [
        new transports.Console({
            format: combine(colorize({ level: true }), consolePrintFormat)
        })
    ]
}

export const logger = createLogger({
    format: combine(json(), prettyPrint(), format.splat(), format.simple()),
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

const expressWinstonTransports = [new transports.Console({}), new LoggingWinston({})]

const expresslogger = expressWinston.logger({
    transports: expressWinstonTransports,
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
    transports: expressWinstonTransports,
    meta: isProduction,
    format: combine(json(), prettyPrint()),
    msg: (req, res) => {
        const level = getLevel(req, res)
        return `[${level}] ${req.id} HTTP ${res.statusCode} ${req.method} ${req.url} {{res.responseTime}}ms`
    }
})

export default function (app: express.Application) {
    if (process.env.MOCHA_TEST !== 'true') {
        app.use(expressErrorLogger)
        app.use(expresslogger)
    }
}
