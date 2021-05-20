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
                snippets: { userCode: string; checkerCode: string; validateTestCaseCode: string }
            }
            id: string
        }
    }
}

//Environment variables that do not need to be explicitly typed are omitted
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            COMPILER_HOST: string
            NODE_ENV: string
            MONGO_URL: string
            MOCHA_TEST: string
            GOOGLE_CLIENT: string
            GOOGLE_SECRET: string
            SHOULD_LOG_META: string
            STRIPE_SUCCESS_URL: string
            STRIPE_CANCEL_URL: string
            STRIPE_TEST_KEY: string
        }
    }
}
