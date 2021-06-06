import Axios from 'axios'
import { UserSubmissionOutput, SubmissionStatus } from './CodeEditorOutput/TestCaseAreaHelper'
import { languageMap } from './UserSettings/CodeEditorLanguages'

export interface MatchParams {
    id: string
}

export const getProblemDetails = async (paramsId: string, language: string) => {
    const problemInfo = await Axios({
        method: 'POST',
        url: `/api/challenges/${paramsId}`,
        data: {
            language: language
        }
    })
    return problemInfo.data
}

export const getStarterCode = async (paramsId: string, language: string) => {
    const problemInfo = await Axios({
        method: 'POST',
        url: `/api/challenges/${paramsId}/startercode`,
        data: {
            language: language
        }
    })
    return problemInfo.data.starterCode
}

export const handleSubmit = async (
    event: { preventDefault: () => void },
    codeSnippet: string,
    language: string,
    paramsId: string,
    setSubmissionStatus: (status: SubmissionStatus) => void,
    setUserSubmission: (submission: UserSubmissionOutput) => void
) => {
    event.preventDefault()
    setSubmissionStatus(SubmissionStatus.Pending)
    Axios.post<UserSubmissionOutput>(`/api/submisson/execute/${paramsId}`, {
        codeSnippet,
        programmingLanguage: languageMap[language]
    }).then((res) => {
        if (isUserSubmissionOutput(res.data)) {
            setUserSubmission(res.data as UserSubmissionOutput)
            setSubmissionStatus(SubmissionStatus.Completed)
        } else {
            setSubmissionStatus(SubmissionStatus.Error)
        }
    })
}

function isUserSubmissionOutput(output: object): output is UserSubmissionOutput {
    return (output as UserSubmissionOutput).verdict !== undefined
}
