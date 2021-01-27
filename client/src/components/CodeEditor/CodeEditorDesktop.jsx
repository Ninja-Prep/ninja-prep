import React, { Component, Fragment } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Axios from 'axios'
import { languageMap } from './CodeEditorLanguages'
import CodeEditorNavbar from './CodeEditorNavbar'

import { DropdownButton, Dropdown } from 'react-bootstrap'
import './CodeMirror.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'

import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
import 'react-reflex/styles.css'

class CodeEditorDesktop extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            value: '',
            output: '',
        }
        this.resizeProps = {
            onStopResize: this.onStopResize.bind(this),
            onResize: this.onResize.bind(this),
        }
    }

    onResize(e) {
        if (e.domElement) {
            e.domElement.classList.add('resizing')
        }
    }

    onStopResize(e) {
        if (e.domElement) {
            e.domElement.classList.remove('resizing')
        }
    }

    componentDidMount() {
        // console.log(this.props)
        Axios({
            method: 'GET',
            url: `/api/challenges/${this.props.match.params.id}`,
        }).then((res) => {
            // console.log(res.data)
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
            this.setState({ output: res.data.detailedExitCode })
        })
    }

    render() {
        return (
            <div className="viewport-height">
                {/* <CodeEditorNavbar /> */}
                <ReflexContainer orientation="horizontal">
                    <ReflexElement>
                        <ReflexContainer orientation="vertical">
                            <ReflexElement {...this.resizeProps}>
                                {/* <CodeEditorNavbar /> */}
                                <ReflexContainer orientation="horizontal">
                                    <ReflexElement {...this.resizeProps}>
                                        This is the documentation resources area
                                    </ReflexElement>
                                </ReflexContainer>
                            </ReflexElement>

                            <ReflexSplitter {...this.resizeProps} style={{ width: '10px' }} />

                            <ReflexElement {...this.resizeProps}>
                                <ReflexElement className="header">
                                    {/* <CodeEditorNavbar /> */}
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        title="Dropdown button"
                                        className="position-absolute"
                                    >
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </DropdownButton>
                                    {/* <div className="row">Hello World!</div> */}
                                </ReflexElement>
                                <ReflexContainer orientation="horizontal">
                                    <ReflexElement {...this.resizeProps}>
                                        <div>
                                            <ReflexContainer orientation="vertical">
                                                <ReflexElement {...this.resizeProps}>
                                                    <div className="pane-content">
                                                        <form onSubmit={this.handleSubmit} id="codeSubmitForm">
                                                            <div>
                                                                {/* <CodeMirror
                                                                    value={this.state.value}
                                                                    options={this.props}
                                                                    onBeforeChange={(editor, data, value) => {
                                                                        this.textHandler(value)
                                                                    }}
                                                                /> */}
                                                            </div>
                                                        </form>
                                                    </div>
                                                </ReflexElement>
                                            </ReflexContainer>
                                        </div>
                                    </ReflexElement>
                                    <ReflexSplitter {...this.resizeProps} style={{ height: '10px' }} />
                                    <ReflexElement {...this.resizeProps} minSize="50" maxSize="600">
                                        <div className="pane-content">
                                            <label>
                                                This is the Right bottom pane with output
                                                <p>{this.state.output}</p>
                                                <p>{this.state.error}</p>
                                            </label>

                                            <button
                                                type="submit"
                                                form="codeSubmitForm"
                                                className="position-absolute"
                                                style={{ bottom: 0, right: 0 }}
                                            >
                                                Submit Code
                                            </button>
                                        </div>
                                    </ReflexElement>
                                    {/* <ReflexElement className="submit-viewport"> */}

                                    {/* </ReflexElement> */}
                                </ReflexContainer>
                            </ReflexElement>
                        </ReflexContainer>
                    </ReflexElement>
                </ReflexContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    theme: state.editor.theme,
    mode: state.editor.mode,
    lineNumbers: true,
    lineWrapping: true,
    styleActiveLine: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    indentUnit: 4,
})

export default connect(mapStateToProps)(withRouter(CodeEditorDesktop))
