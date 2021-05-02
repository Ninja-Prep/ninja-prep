import { createLogger, format, transports, config } from 'winston'
const { combine, timestamp, json } = format

const { LoggingWinston } = require('@google-cloud/logging-winston')

const loggingWinston = new LoggingWinston()
export const logger = createLogger({
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        json()
    ),
    levels: config.syslog.levels,
    transports: [new transports.Console(), loggingWinston]
})
