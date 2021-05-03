import express from 'express'
import initializeMiddleWare from './src/MiddleWare/InitializeMiddlewareWrapper'

import './src/MiddleWare/InitializePassport'
import { dbconnect } from './src/MiddleWare/InitializeMongoose'

const app = express()
initializeMiddleWare(app)
dbconnect()

const PORT = process.env.PORT || 8080

let inProduction = false

if (process.env.NODE_ENV) {
    inProduction = process.env.NODE_ENV.trim() === 'production'
}
console.log(`production is ${inProduction}`)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
