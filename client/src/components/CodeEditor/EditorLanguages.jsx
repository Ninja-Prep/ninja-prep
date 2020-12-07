// Theme CSS
import 'codemirror/theme/material.css'
import 'codemirror/theme/eclipse.css'
import 'codemirror/theme/night.css'
import 'codemirror/theme/monokai.css'

// Language CSS
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'
import 'codemirror/mode/javascript/javascript'

export const languageMap = {
	'text/x-java': 'java',
	'text/x-c++src': 'cpp14',
	python: 'python3',
	javascript: 'nodejs',
}

export const themeOptions = [
	{ value: 'eclipse', label: 'Eclipse' },
	{ value: 'material', label: 'Material' },
	{ value: 'night', label: 'Night' },
	{ value: 'monokai', label: 'Sublime' },
]

export const modeOptions = [
	{ value: 'text/x-java', label: 'Java' },
	{ value: 'text/x-c++src', label: 'C++' },
	{ value: 'javascript', label: 'Javascript' },
	{ value: 'python', label: 'Python' },
]
