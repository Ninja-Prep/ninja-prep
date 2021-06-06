// Theme CSS
import 'codemirror/theme/material.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/night.css'
import 'codemirror/theme/monokai.css'
import 'codemirror-theme-github/theme/github.css'

// Language CSS
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'
import 'codemirror/mode/javascript/javascript'

interface Map {
    [key: string]: string | undefined
}
export const languageMap: Map = {
    'text/x-java': 'java',
    'text/x-c++src': 'cpp14',
    python: 'python',
    javascript: 'nodejs'
}

export const themeOptions = [
    { value: 'eclipse', label: 'Eclipse' },
    { value: 'material', label: 'Material' },
    { value: 'night', label: 'Night' },
    { value: 'monokai', label: 'Sublime' }
]

export const modeOptions = [
    { value: 'text/x-java', label: 'java' },
    { value: 'text/x-c++src', label: 'c++' },
    { value: 'javascript', label: 'javascript' },
    { value: 'python', label: 'python' }
]
