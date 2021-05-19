import express, { Request, Response } from 'express'
import { Problem, ProblemLanguageTemplate } from 'question-database'
import _ from 'lodash'

const router = express.Router()

router.get('/findchallenges', async (_req: Request, res: Response) => {
    const publicChallengesFields = ['title', 'problem_path']

    const challenges = await Problem.find()
    const filteredChallenges = challenges.map((challenge) => {
        return _.pick(challenge, publicChallengesFields)
    })
    res.send(filteredChallenges)
})

router.get('/:problemPath', async (req: Request, res: Response) => {
    const language = 'java'
    let problem = await Problem.findOne({
        problem_path: req.params.problemPath
    })
        .populate({ path: 'templates.java', model: ProblemLanguageTemplate })
        .exec()

    if (!problem) {
        res.send({})
    } else {
        const templateObjectId = problem.templates.get(language)
        const problemTemplateCode = await ProblemLanguageTemplate.findById(templateObjectId)

        if (problemTemplateCode) {
            const starterCode = problemTemplateCode.starter_code_snippet
            const title = problem.title
            const description = problem.description
            const hints = problem.hints
            const testCases = problem.input_testcases
            res.send({ starterCode, title, description, hints, testCases })
        } else {
            res.send({})
        }
    }
})

export default router
