import 'express-session';
declare module 'express-session' {
  interface SessionData {
    isAuthenticated: boolean;
    user: {[key: string]: any} | null;
    publicUser: {[key: string]: any} | null;
  }
}

import 'express';
declare global {
  namespace Express {
    interface Request {
      problemSubmissionInput: ProblemSubmissionInput;
      id: string;
    }
  }
}

// Environment variables that do not need to be explicitly typed are omitted
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      COMPILER_HOST: string;
      NODE_ENV: string;
      MONGO_URL: string;
      MOCHA_TEST: string;
      GOOGLE_CLIENT: string;
      GOOGLE_SECRET: string;
      FACEBOOK_CLIENT: string;
      FACEBOOK_SECRET: string;
      GITHUB_CLIENT: string;
      GITHUB_SECRET: string;
      SHOULD_LOG_META: string;
      STRIPE_SUCCESS_URL: string;
      STRIPE_CANCEL_URL: string;
      STRIPE_TEST_KEY: string;
    }
  }
}
