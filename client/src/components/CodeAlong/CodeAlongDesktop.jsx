import React from 'react'
import './code-along.css'
import CodeIcon from '@material-ui/icons/Code'

const styles = {
	codeIcon: {
		fontSize: 80,
		color: '#f5f5f5',
	},
}

const CodeAlongDesktop = () => (
	<div className="code-along-bg py-5 text-center">
		<CodeIcon style={styles.codeIcon} />
		<h1 className="code-along-text font-weight-bold display-5 pb-2">
			Code Along & Execute
		</h1>
		<p className="code-along-description mb-5 m-auto w-50 lead">
			New skills have a higher chance of being retained when practiced. Code
			along with our videos then execute by solving our challenges! We support
			over 5+ languages and customizable themes.
		</p>
		<img
			className="code-along-img pt-5 w-75"
			src="./images/Code-Along.png"
			alt="code along placeholder"
		/>
	</div>
)

export default CodeAlongDesktop
export { default as CodeAlongDesktop } from './CodeAlongDesktop'
