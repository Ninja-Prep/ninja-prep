import express, { Request, Response } from 'express'
import got from 'got'
import mongoose from 'mongoose'

const router = express.Router()

async function getProblemDetails(req: Request, res: Response, next: () => void) {
    console.log(req.body)
    const programmingLanguage = req.body.programmingLanguage
    const userCodeSnippet = req.body.codeSnippet

    console.log(req.params)
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
        console.time()
        const { body } = await got.post('http://npbox:8000/compile/', {
            json: {
                snippets: problemBO.snippets,
                testCases: problemBO.testCases,
                language: 'java'
            }
        })
        console.timeEnd()
        console.log(body)
        res.send(body)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

export default router
