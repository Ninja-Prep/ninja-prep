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

router.post('/:problemPath', async (req: Request, res: Response) => {
    const language = req.body.language
    let problem = await Problem.findOne({
        problem_path: req.params.problemPath
    })

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

router.post('/:problemPath/startercode', async (req: Request, res: Response) => {
    const language = req.body.language
    let problem = await Problem.findOne({
        problem_path: req.params.problemPath
    })

    if (!problem) {
        res.send({})
    } else {
        const templateObjectId = problem.templates.get(language)
        const problemTemplateCode = await ProblemLanguageTemplate.findById(templateObjectId)
        if (problemTemplateCode) {
            const starterCode = problemTemplateCode.starter_code_snippet
            res.send({ starterCode })
        } else {
            res.send({})
        }
    }
})

export default router
