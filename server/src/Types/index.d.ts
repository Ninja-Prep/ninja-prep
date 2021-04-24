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
        }
    }
}
