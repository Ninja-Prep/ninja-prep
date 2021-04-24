import Axios from 'axios'
import { languageMap } from './UserSettings/CodeEditorLanguages'

export const getProblemDetails = async (paramsId: string) => {
    const problemInfo = await Axios({
        method: 'GET',
        url: `/api/challenges/${paramsId}`
    })
    return problemInfo.data
}

export const handleSubmit = (
    event: { preventDefault: () => void },
    codeSnippet: string,
    language: string,
    paramsId: string,
    setParentState: (arg0: object) => void
) => {
    event.preventDefault()
    setParentState({ isPendingSubmission: true })
    Axios({
        method: 'POST',
        url: `/api/submisson/execute/${paramsId}`,
        data: {
            codeSnippet,
            programmingLanguage: languageMap[language]
        }
    }).then((res) => {
        setParentState({ isPendingSubmission: false, userSubmissionOutput: res.data })
    })
}
