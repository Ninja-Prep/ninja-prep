import * as React from 'react';
import OrderSuccess from 'components/Ordering/containers/OrderSuccess/OrderSuccessContainer';
import ChallengesPage from 'pages/ChallengesPage/ChallengesPage';
import LandingPage from 'pages/LandingPage';
import PremiumPage from 'pages/PremiumPage';
import ProblemSubmissionPage from 'pages/ProblemSubmissionPage/ProblemSubmissionPage';
import DefaultRoute from './DefaultRoute';
import ProtectedRoute from './ProtectedRoute';
import UnsubscribedRoute from './UnsubscribedRoute';
import Error404Component from 'components/Error404/Error404';
import UserSettings from 'components/ProblemSubmission/containers/UserSettings/UserSettingsContainer';

export const LandingPageRoute = <ProtectedRoute path="/" exact authComponent={ChallengesPage} component={LandingPage} />;
export const OrderSuccessRoute = <ProtectedRoute path="/order/success" exact fallbackRedirectTo="/" authComponent={OrderSuccess} />;
export const ChallengesRoute = <DefaultRoute path="/challenges" exact component={ChallengesPage} />;
export const PremiumRoute = <UnsubscribedRoute path="/premium" exact unsubscribedComponent={PremiumPage} fallbackRedirectTo="/" />;
export const ProblemSubmissionRoute = <DefaultRoute path="/problem/:id" exact component={ProblemSubmissionPage} />;
export const Error404Route = <DefaultRoute exact component={Error404Component} />;
export const SettingsPageRoute = <ProtectedRoute path="/settings" exact authComponent={UserSettings} fallbackRedirectTo="/" />;
