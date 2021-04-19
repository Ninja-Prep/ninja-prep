import Axios from 'axios'
import { languageMap } from './UserSettings/CodeEditorLanguages'

export const getProblemDetails = async (paramsId: string) => {
    const problemInfo = await Axios({
        method: 'GET',
        url: `/api/challenges/${paramsId}`
    })
    return problemInfo.data
}

export const handleSubmit = (event: { preventDefault: () => void }, codeSnippet: string, language: string, paramsId: string) => {
    event.preventDefault()
    Axios({
        method: 'POST',
        url: `/api/dockersandbox/execute/${paramsId}`,
        data: {
            codeSnippet,
            programmingLanguage: languageMap[language]
        }
    }).then((res) => {})
}
