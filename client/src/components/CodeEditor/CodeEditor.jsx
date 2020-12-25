import React, { Component, Fragment } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { connect } from 'react-redux'
import Axios from 'axios'
import { languageMap } from './CodeEditorNavbar/CodeEditorLanguages'
import CodeEditorNav from './CodeEditorNavbar/CodeEditorNavbar'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/selection/active-line'

class CodeEditor extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            value: '',
            output: '',
        }
    }

    textHandler(value) {
        this.setState({ value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = {
            script: this.state.value,
            language: languageMap[this.props.mode],
        }
        Axios({
            method: 'POST',
            url: '/api/compile',
            data: data,
        }).then((res) => {
            this.setState({ output: res.data })
        })
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <EditorNav />
                    <div>
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
