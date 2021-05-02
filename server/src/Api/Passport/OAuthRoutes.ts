import { default as _ } from 'lodash'
import express, { Request, Response } from 'express'
import passport from 'passport'

const router = express.Router()

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get('/facebook', passport.authenticate('facebook'))
router.get('/github', passport.authenticate('github'))

const publicUserFields = ['first_name', '_id', 'profile_picture']

function setUserCookie(req: Request) {
    const publicUser = _.pick(req.user, publicUserFields)
    req.session.publicUser = publicUser
    req.session.user = req.user
    req.session.isAuthenticated = true
}

router.get('/authenticationStatus', (req: Request, res: Response) => {
    if (req.session?.isAuthenticated) {
        res.send(req.session.isAuthenticated)
    } else {
        res.send(false)
    }
})

router.get('/getUser', (req: Request, res: Response) => {
    res.send(req.session?.publicUser)
})

router.get('/logout', (req: Request, res: Response) => {
    req.logOut()
    req.session = null as any
    res.redirect('/')
})

router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req: Request, res: Response) => {
        setUserCookie(req)
        res.redirect('/')
    }
)

router.get(
    '/facebook/callback',
    passport.authenticate('facebook', {
        failureRedirect: '/login'
    }),
    (req: Request, res: Response) => {
        setUserCookie(req)
        res.redirect('/')
    }
)

router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req: Request, res: Response) {
        setUserCookie(req)
        res.redirect('/')
    }
)

export default router
