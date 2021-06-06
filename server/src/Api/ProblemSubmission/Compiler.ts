import express, { Request, Response } from 'express'
import { logger } from '../../logger'
import got from 'got'
import { Problem, ProblemLanguageTemplate } from 'question-database'

const router = express.Router()

async function getProblemDetails(req: Request, res: Response, next: () => void) {
    logger.info(req.body)
    const programmingLanguage = req.body.programmingLanguage
    const userCodeSnippet = req.body.codeSnippet
    let problem = await Problem.findOne({
        problem_path: req.params.problemPath
    })
    const problemTemplateCode = await ProblemLanguageTemplate.findOne({ _id: problem?.templates.get(programmingLanguage) })
    if (problem && problemTemplateCode) {
        const testCases = problem.input_testcases
        const codeContainer = problemTemplateCode.executable_code_container
        const userCode = codeContainer.replace('INSERT_SOLVER', userCodeSnippet)
        console.log(userCode)
        const checkerCode = problem.checker_code_snippet
        const validateTestCaseCode = problem.validate_test_case_snippet

        req.problemBO = {
            testCases,
            snippets: { userCode, checkerCode, validateTestCaseCode }
        }
    }

    next()
}

router.post('/execute/:problemPath', getProblemDetails, async (req: Request, res: Response) => {
    const problemBO = req.problemBO
    // console.log(req)
    try {
        const { body } = await got.post(`http://${process.env.COMPILER_HOST}:8000/compile/`, {
            json: {
                snippets: problemBO.snippets,
                testCases: problemBO.testCases,
                language: req.body.programmingLanguage
            },
            headers: {
                'X-Request-Id': req.id
            }
        })
        logger.info(JSON.parse(body))
        res.send(body)
    } catch (error) {
        logger.error(error)
        res.send(error)
    }
})

export default router
