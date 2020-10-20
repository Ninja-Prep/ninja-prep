import React, { Component, Fragment } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { connect } from 'react-redux'
import Axios from 'axios'
import { languageMap } from './data.js'
import EditorNav from './EditorNav'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/selection/active-line'

class CodeEditor extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			value: '',
		}
	}

	textHandler(value) {
		this.setState({ value })
	}

	handleSubmit(event) {
		event.preventDefault()
		console.log(languageMap[this.props.mode])
		const data = {
			script: this.state.value,
			language: languageMap[this.props.mode],
		}

		Axios({
			method: 'POST',
			url: 'http://localhost:5000/',
			data: data,
		}).then((res) => {
			console.log(res.data)
		})
	}

	render() {
		return (
			<Fragment>
				<form onSubmit={this.handleSubmit}>
					<EditorNav />
					<div style={{ clear: 'right' }}>
						<CodeMirror
							value={this.state.value}
							options={this.props}
							onBeforeChange={(editor, data, value) => {
								this.textHandler(value)
							}}
						/>
					</div>
					<button type="submit">Submit Code</button>
				</form>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	theme: state.editor.theme,
	mode: state.editor.mode,
	lineNumbers: true,
	lineWrapping: true,
	styleActiveLine: true,
})

export default connect(mapStateToProps)(CodeEditor)
