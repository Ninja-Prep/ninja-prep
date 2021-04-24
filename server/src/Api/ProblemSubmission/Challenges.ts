import express, { Request, Response } from 'express'
import _ from 'lodash'
import mongoose from 'mongoose'

const router = express.Router()

router.get('/findchallenges', async (_req: Request, res: Response) => {
    const publicChallengesFields = ['title', 'problem_path']
    const challenges = await mongoose.connection.db.collection('problems').find().toArray()
    const filteredChallenges = challenges.map((challenge: string) => {
        return _.pick(challenge, publicChallengesFields)
    })
    res.send(filteredChallenges)
})

router.get('/:problemPath', async (req: Request, res: Response) => {
    const language = 'java'
    let problem = await mongoose.connection.db.collection('problems').findOne({
        problem_path: req.params.problemPath
    })
    if (!problem) {
        res.send({})
    } else {
        const problemTemplateCode = await mongoose.connection.db
            .collection('problemlanguagetemplates')
            .findOne({ _id: problem.templates[language] })
        const starterCode = problemTemplateCode.starter_code_snippet
        const title = problem.title
        const description = problem.description
        const hints = problem.hints
        const testCases = problem.input_testcases
        res.send({ starterCode, title, description, hints, testCases })
    }
})

export default router
