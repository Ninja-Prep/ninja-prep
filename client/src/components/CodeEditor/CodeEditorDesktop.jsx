import React, { Component, Fragment } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Axios from 'axios'
import { languageMap } from './CodeEditorLanguages'
import CodeEditorNavbar from './CodeEditorNavbar'

import IconButton from '@material-ui/core/IconButton'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import SettingsIcon from '@material-ui/icons/Settings'
import InfoIcon from '@material-ui/icons/Info'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

//Tab Icons
import SubtitlesIcon from '@material-ui/icons/Subtitles'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import BookIcon from '@material-ui/icons/Book'
import WatchLaterIcon from '@material-ui/icons/WatchLater'

import { ProblemDesktop } from './Tabs/ProblemDesktop'
import { VideoSolution } from './Tabs/VideoSolution'
import { ConceptReview } from './Tabs/ConceptReview'
import { LanguageDropdown } from './LanguageDropdown'
import { CodeEditorSettings } from './CodeEditorSettings'
import { DropdownButton, Dropdown, Row, Col, Tabs, Tab, Nav, Button } from 'react-bootstrap'

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
            console.log(res)
            this.setState({
                verdict: res.data.detailedExitCode,
                inputTestCase: res.data.testCase,
                userOutput: res.data.userOutput,
                expectedOutput: res.data.solutionOutput,
            })
        })
    }
    renderLeftPage() {
        return (
            <ReflexElement {...this.resizeProps}>
                <Tabs defaultActiveKey="problem" id="uncontrolled-tab-example" className="header-area">
                    <Tab eventKey="problem" title="Problem">
                        <ProblemDesktop />
                    </Tab>
                    <Tab eventKey="videoSolution" title="Video Solution">
                        <VideoSolution />
                    </Tab>
                    <Tab eventKey="article" title="Concept Review">
                        <ConceptReview />
                    </Tab>
                    <Tab eventKey="submissions" title="Submissions">
                        <ConceptReview />
                    </Tab>
                </Tabs>
            </ReflexElement>
        )
    }

    renderTestCases() {
        return (
            <Tabs defaultActiveKey="output" id="uncontrolled-tab-example">
                <Tab eventKey="output" title="Test Case">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Test Case 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Test Case 2</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p>{this.state.verdict}</p>
                                        <p>Input: {this.state.inputTestCase}</p>
                                        <p>Output: {this.state.userOutput}</p>
                                        <p>Expected Output: {this.state.expectedOutput}</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>{this.state.verdict}</p>
                                        <p>Input: {this.state.inputTestCase}</p>
                                        <p>Output: {this.state.userOutput}</p>
                                        <p>Expected Output: {this.state.expectedOutput}</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Tab>
                <Tab eventKey="customInput" title="Custom Input">
                    this is where users can customize test case / input
                </Tab>
            </Tabs>
        )
    }

    renderRunAndSubmissionButtons() {
        return (
            <ReflexElement flex={0.06} className="footer">
                <Button
                    variant="outline-dark"
                    type="submit"
                    onClick={this.handleSubmit}
                    className="position-absolute"
                    style={{ bottom: 0, right: 80 }}
                >
                    <PlayArrowIcon />
                    Run Code
                </Button>
                <Button
                    variant="success"
                    type="submit"
                    onClick={this.handleSubmit}
                    className="position-absolute"
                    style={{ bottom: 0, right: 0 }}
                >
                    Submit
                </Button>
            </ReflexElement>
        )
    }

    renderSettingsArea() {
        return (
            <Row className="p-1 code-editor-settings-area">
                <Col className="align-self-center">
                    <LanguageDropdown />
                </Col>
                <Col className="text-right">
                    <CodeEditorSettings />
                </Col>
            </Row>
        )
    }
    renderCodemirror() {
        return (
            // <form onSubmit={this.handleSubmit} id="codeSubmitForm">
            // <div>
            <CodeMirror
                value={this.state.value}
                options={this.props}
                onBeforeChange={(editor, data, value) => {
                    this.textHandler(value)
                }}
            />
            // </div>
            // </form>
        )
    }
    render() {
        return (
            <div className="viewport-height">
                <ReflexContainer orientation="vertical">
                    {this.renderLeftPage()}
                    <ReflexSplitter {...this.resizeProps} style={{ width: '10px' }} />

                    <ReflexElement {...this.resizeProps}>
                        <ReflexContainer orientation="horizontal">
                            <ReflexElement
                                flex={4}
                                {...this.resizeProps}
                                style={{ overflow: 'hidden' }}
                                // minSize="100"
                                // maxSize="900"
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                    }}
                                >
                                    <div></div>
                                    <div style={{ flex: 'none' }}>{this.renderSettingsArea()}</div>

                                    <div
                                        style={{
                                            flex: '1 1 100%',
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            minHeight: '0px',
                                        }}
                                    >
                                        <div style={{ height: '100%', flex: '1 1 auto', overflow: 'hidden' }}>
                                            {this.renderCodemirror()}
                                            {/* <p> hello </p> */}
                                        </div>
                                    </div>
                                </div>
                            </ReflexElement>

                            <ReflexSplitter
                                {...this.resizeProps}
                                style={{ height: '13px', backgroundColor: '#2A2A3A', borderColor: 'transparent' }}
                                className="code-splitter"
                            />

                            <ReflexElement
                                flex={1}
                                {...this.resizeProps}
                                style={{ overflow: 'hidden', backgroundColor: '#404053' }}
                                minSize="150"
                                maxSize="800"
                            >
                                <div className="test-case-container">{this.renderTestCases()}</div>
                                {this.renderRunAndSubmissionButtons()}
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
