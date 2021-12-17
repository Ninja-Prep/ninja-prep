import * as React from 'react';
import OrderSuccess from 'components/Ordering/containers/OrderSuccess/OrderSuccessContainer';
import LandingPage from 'pages/LandingPage';
import PremiumPage from 'pages/PremiumPage';
import DefaultRoute from './DefaultRoute';
import ProtectedRoute from './ProtectedRoute';
import UnsubscribedRoute from './UnsubscribedRoute';
import Error404Component from 'components/Error404/Error404';
import UserSettings from 'components/UserSettings/containers/UserSettingsContainer';
import ProblemSubmissionPageContainer from 'pages/ProblemSubmissionPage/containers/ProblemSubmissionPageContainer';
import ChallengesPageContainer from 'pages/ChallengesPage/containers/ChallengesPageContainer';

export const LandingPageRoute = <ProtectedRoute path="/" exact authComponent={ChallengesPageContainer} component={LandingPage} />;
export const OrderSuccessRoute = <ProtectedRoute path="/order/success" exact fallbackRedirectTo="/" authComponent={OrderSuccess} />;
export const ChallengesRoute = <DefaultRoute path="/challenges" exact component={ChallengesPageContainer} />;
export const PremiumRoute = <UnsubscribedRoute path="/premium" exact unsubscribedComponent={PremiumPage} fallbackRedirectTo="/" />;
export const ProblemSubmissionRoute = () => <DefaultRoute path="/problem/:id" exact component={ProblemSubmissionPageContainer} transitionOff />;
export const Error404Route = <DefaultRoute exact component={Error404Component} />;
export const SettingsPageRoute = <ProtectedRoute path="/settings" exact authComponent={UserSettings} fallbackRedirectTo="/" />;
