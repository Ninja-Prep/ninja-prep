import React from 'react'
import './code-along.css'
import CodeIcon from '@material-ui/icons/Code'

function CodeAlong() {
	return (
		<div className="code-along-container px-5">
			<CodeIcon />
			<h1 className="landing-page-title code-along-title">
				Code Along & Execute
			</h1>

			<p className="code-along-description mb-5 mx-auto w-50">
				New skills have a higher chance of being retained when practiced. Code
				along with our videos then execute by solving our challenges! We support
				over 5+ languages and customizable themes.
			</p>
			<img
				className="code-along-img"
				src="./images/Code-Along.png"
				alt="code along placeholder"
			/>
		</div>
	)
}

export default CodeAlong
export { default as CodeAlong } from './CodeAlong'
