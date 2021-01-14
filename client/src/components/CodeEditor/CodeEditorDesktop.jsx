import React, { Component, Fragment } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Axios from 'axios'
import { languageMap } from './CodeEditorLanguages'
import CodeEditorNavbar from './CodeEditorNavbar'
import './CodeMirror.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/selection/active-line'

class CodeEditorDesktop extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            value: '',
            output: '',
        }
    }

    componentDidMount() {
        // console.log(this.props)
        Axios({
            method: 'GET',
            url: `/api/challenges/${this.props.match.params.id}`,
        }).then((res) => {
            this.setState({ value: res.data })
        })
    }

    textHandler(value) {
        this.setState({ value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = {
            codeSnippet: this.state.value,
            programmingLanguage: languageMap[this.props.mode],
        }
        Axios({
            method: 'POST',
            url: `/api/dockersandbox/execute/${this.props.match.params.id}`,
            data: data,
        }).then((res) => {
            // console.log(res)
            this.setState({ output: res.data.stdOutput, error: res.data.stdErr })
        })
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <CodeEditorNavbar />
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
                <p>{this.state.output}</p>
                <p>{this.state.error}</p>
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

export default connect(mapStateToProps)(withRouter(CodeEditorDesktop))
