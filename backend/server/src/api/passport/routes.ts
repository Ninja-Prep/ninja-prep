import {OAuthCallback, getUser, logoutUser} from './controller';
import {facebookOauth, githubOauth, googleOauth, setUserCookie} from './middleware';
import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}));
router.get('/github', passport.authenticate('github'));

router.get('/getUser', getUser);
router.get('/logout', logoutUser);

router.get('/google/callback', googleOauth, setUserCookie, OAuthCallback);
router.get('/facebook/callback', facebookOauth, setUserCookie, OAuthCallback);
router.get('/github/callback', githubOauth, setUserCookie, OAuthCallback);

export default router;
