import { initializeGCPMetrics } from './src/GCPMetrics'

if (process.env.NODE_ENV === 'production') {
    require('@google-cloud/trace-agent').start()
    initializeGCPMetrics()
}

import express from 'express'
import initializeMiddleWare from './src/MiddleWare/InitializeMiddlewareWrapper'
import './src/MiddleWare/InitializePassport'
import { dbconnect } from './src/MiddleWare/InitializeMongoose'
import { logError, logger } from './src/logger'

const app = express()
initializeMiddleWare(app)
dbconnect()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`)
})

process.on('uncaughtException', (error) => {
    logError(error)
})
