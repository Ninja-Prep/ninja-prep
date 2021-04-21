import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import TabComponent from './Tabs/TabsComponent'
import CodeEditorNavbar from './CodeEditorNavbar/CodeEditorNavbar'
import TestCase from './CodeEditorOutput/TestCase'
import SubmitCodeButtons from './CodeEditorOutput/SubmitCodeButtons'
import CodeMirrorWrapperComponent from './CodeMirrorWrapperComponent'

import './CodeMirror.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'

import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
import { default as _ } from 'lodash'
import 'react-reflex/styles.css'

class CodeEditorDesktop extends Component {
    constructor(props) {
        super(props)
        this.cookieUsercodeKey = [props.problemDetails.problemName, props.mode].join('_')
        this.state = {
            value: this.setInitialCode(),
            output: ''
        }
    }

    setInitialCode() {
        const storageUserCode = localStorage.getItem(this.cookieUsercodeKey)
        if (!_.isNull(storageUserCode)) {
            return storageUserCode
        }
        return this.props.problemDetails.starterCode
    }

    textHandler(value) {
        this.setState({ value })
        localStorage.setItem(this.cookieUsercodeKey, value)
    }

    render() {
        return (
            <div className="viewport-wrapper">
                <CodeEditorNavbar title={this.props.problemDetails.title} />
                <ReflexContainer orientation="horizontal">
                    <ReflexElement>
                        <ReflexContainer orientation="vertical">
                            <ReflexElement>
                                <TabComponent problemDetails={this.props.problemDetails} />
                            </ReflexElement>
                            <ReflexSplitter style={{ width: '10px' }} />

                            <ReflexElement>
                                <ReflexContainer orientation="horizontal">
                                    <ReflexElement flex={4} className="reflex-element-hide-overflow">
                                        <CodeMirrorWrapperComponent
                                            textValue={this.state.value}
                                            textHandler={(value) => this.textHandler(value)}
                                            editorConfig={this.props}
                                        />
                                    </ReflexElement>
                                    <ReflexSplitter className="reflex-splitter-horizontal-editor-testcase" />

                                    <ReflexElement
                                        flex={2}
                                        className="reflex-element-testcase-area reflex-element-hide-overflow text-light"
                                    >
                                        <TestCase
                                            verdict={this.state.verdict}
                                            inputTestCase={this.state.inputTestCase}
                                            userOutput={this.state.userOutput}
                                            expectedOutput={this.state.expectedOutput}
                                        />

                                        <SubmitCodeButtons
                                            paramsId={this.props.match.params.id}
                                            mode={this.props.mode}
                                            codeSnippet={this.state.value}
                                        />
                                    </ReflexElement>
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
    autoCloseBrackets: true
})

export default connect(mapStateToProps)(withRouter(CodeEditorDesktop))
