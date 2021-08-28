import React from 'react';
import OrderSuccess from 'components/OrderSuccess/OrderSuccess';
import ChallengesPage from 'pages/ChallengesPage/ChallengesPage';
import LandingPage from 'pages/LandingPage';
import MeetTheTeamPage from 'pages/MeetTheTeamPage';
import PremiumPage from 'pages/PremiumPage';
import ProblemSubmissionPage from 'pages/ProblemSubmissionPage/ProblemSubmissionPage';
import DefaultRoute from './DefaultRoute';
import ProtectedRoute from './ProtectedRoute';
import UnsubscribedRoute from './UnsubscribedRoute';
import Error404Component from 'components/Error404/Error404';

export const LandingPageRoute = <ProtectedRoute path="/" exact authComponent={ChallengesPage} component={LandingPage} />;
export const OrderSuccessRoute = <ProtectedRoute path="/order/success" exact fallbackRedirectTo="/" authComponent={OrderSuccess} />;
export const AboutRoute = <DefaultRoute path="/about" exact component={MeetTheTeamPage} />;
export const ChallengesRoute = <DefaultRoute path="/challenges" exact component={ChallengesPage} />;
export const PremiumRoute = <UnsubscribedRoute path="/premium" exact unsubscribedComponent={PremiumPage} fallbackRedirectTo="/" />;
export const ProblemSubmissionRoute = <DefaultRoute path="/problem/:id" exact component={ProblemSubmissionPage} />;
export const Error404Route = <DefaultRoute exact component={Error404Component} />;
