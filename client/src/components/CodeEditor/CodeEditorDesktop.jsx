import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import TabComponent from './Tabs/TabsComponent'
import CodeEditorNavbar from './CodeEditorNavbar/CodeEditorNavbar'
import TestCaseArea from './CodeEditorOutput/TestCaseArea'

import CodeMirrorWrapperComponent from './CodeMirrorWrapperComponent'
import { getStarterCode } from './CodeEditorBaseComponent'

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
        this.cookieUsercodeKey = [props.problemDetails.title, props.mode].join('_')
        this.state = {
            value: this.setInitialCode(),
            output: ''
        }
    }

    setInitialCode() {
        console.log(this.state)
        const storageUserCode = this.getLanguageCookie()
        if (!_.isNull(storageUserCode)) {
            return storageUserCode
        }
        return this.props.problemDetails.starterCode
    }

    textHandler(value) {
        this.setState({ value })
        const cookieKey = this.getLanguageCookieKey()
        localStorage.setItem(cookieKey, value)
    }

    getLanguageCookieKey() {
        return [this.props.problemDetails.title, this.props.mode].join('_')
    }

    getLanguageCookie() {
        return localStorage.getItem(this.getLanguageCookieKey())
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.mode !== this.props.mode) {
            const userLanguageTextCookie = this.getLanguageCookie()
            if (userLanguageTextCookie) {
                this.setState({ value: userLanguageTextCookie })
            } else {
                const starterCode = await getStarterCode(this.props.match.params.id, this.props.language)
                if (starterCode) this.setState({ value: starterCode })
            }
        }
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
                                        <TestCaseArea
                                            testCases={this.props.problemDetails.testCases}
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
    language: state.editor.language,
    theme: state.editor.theme,
    mode: state.editor.mode,
    lineNumbers: true,
    lineWrapping: true,
    styleActiveLine: true,
    matchBrackets: true,
    autoCloseBrackets: true
})

export default connect(mapStateToProps)(withRouter(CodeEditorDesktop))
