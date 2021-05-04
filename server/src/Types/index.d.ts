import session from 'express-session'
declare module 'express-session' {
    interface SessionData {
        isAuthenticated: boolean
        user: { [key: string]: any }
        publicUser: { [key: string]: any }
    }
}

import * as express from 'express'
declare global {
    namespace Express {
        interface Request {
            problemBO: {
                testCases: Array<string>
                snippets: { userCode: string; checkerCode: string }
            }
            id: string
        }
    }
}

//Environment variables that do not need to be explicitly typed are omitted
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string
            MONGO_URL: string
            GOOGLE_CLIENT: string
            GOOGLE_SECRET: string
            STRIPE_SUCCESS_URL: string
            STRIPE_CANCEL_URL: string
            STRIPE_TEST_KEY: string
        }
    }
}
