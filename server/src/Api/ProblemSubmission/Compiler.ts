import express, { Request, Response } from 'express'
import { logger, logObject } from '../../logger'
import got from 'got'
import mongoose from 'mongoose'

const router = express.Router()

async function getProblemDetails(req: Request, res: Response, next: () => void) {
    logObject(req.body)
    const programmingLanguage = req.body.programmingLanguage
    const userCodeSnippet = req.body.codeSnippet
    let problem = await mongoose.connection.db.collection('problems').findOne({
        problem_path: req.params.problemPath
    })
    const problemTemplateCode = await mongoose.connection.db
        .collection('problemlanguagetemplates')
        .findOne({ _id: problem.templates[programmingLanguage] })

    const testCases = problem.input_testcases
    const solutionCodeSnippet = problemTemplateCode.solution_code_snippet
    const codeContainer = problemTemplateCode.executable_code_container
    const userCode = codeContainer.replace('INSERT_SOLVER', userCodeSnippet)

    const checkerCode = problem.checker_code_snippet.replace('INSERT_SOLUTION_SNIPPET', solutionCodeSnippet)

    req.problemBO = {
        testCases,
        snippets: { userCode, checkerCode }
    }
    next()
}

router.post('/execute/:problemPath', getProblemDetails, async (req: Request, res: Response) => {
    const problemBO = req.problemBO

    try {
        const { body } = await got.post(`http://${process.env.COMPILER_HOST}:8000/compile/`, {
            json: {
                snippets: problemBO.snippets,
                testCases: problemBO.testCases,
                language: 'java'
            }
        })
        logObject(JSON.parse(body))
        res.send(body)
    } catch (error) {
        logger.error(error)
        res.send(error)
    }
})

export default router
