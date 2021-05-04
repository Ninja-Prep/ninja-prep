import express from 'express'
import initializeMiddleWare from './src/MiddleWare/InitializeMiddlewareWrapper'
import './src/MiddleWare/InitializePassport'
import { dbconnect } from './src/MiddleWare/InitializeMongoose'
import { logger } from './src/logger'

const app = express()
initializeMiddleWare(app)
dbconnect()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`)
})
