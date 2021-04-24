import express, { Request, Response } from 'express'
import initializeMiddleWare from './src/MiddleWare/InitializeMiddlewareWrapper'

import './src/MiddleWare/InitializePassport'
import './src/MiddleWare/InitializeMongoose'
import path from 'path'

const app = express()

initializeMiddleWare(app)

const PORT = process.env.PORT || process.argv[2] || 5000

let inProduction = false
if (process.env.NODE_ENV) {
    inProduction = process.env.NODE_ENV.trim() === 'production'
}
// app.all('*', function (req: Request, res: Response, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type')
//     next()
// })
console.log(`production is ${inProduction}`)

if (inProduction) {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
