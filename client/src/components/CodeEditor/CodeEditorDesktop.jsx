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

import { ProblemDesktop } from './ProblemTab.jsx/ProblemDesktop'
import { DropdownButton, Dropdown, Row, Col, Tabs, Tab, Nav, Button } from 'react-bootstrap'

import './CodeMirror.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/scroll/simplescrollbars.css'

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
                <ReflexContainer orientation="vertical">
                    <ReflexElement {...this.resizeProps}>
                        <Tabs defaultActiveKey="problem" id="uncontrolled-tab-example" className="header-area">
                            <Tab eventKey="problem" title="Problem">
                                <ProblemDesktop />
                            </Tab>
                            <Tab eventKey="solution" title="Solution">
                                test2
                            </Tab>
                            <Tab eventKey="article" title="Article">
                                this is test3
                            </Tab>
                            <Tab eventKey="submission" title="Submission">
                                this is test4
                            </Tab>
                        </Tabs>
                    </ReflexElement>

                    <ReflexSplitter {...this.resizeProps} style={{ width: '10px' }} />

                    <ReflexElement {...this.resizeProps}>
                        <ReflexContainer orientation="horizontal">
                            <ReflexElement
                                {...this.resizeProps}
                                style={{ overflow: 'hidden' }}
                                minSize="200"
                                maxSize="800"
                            >
                                {/* <ReflexElement>
                                    <Row className="p-1 header-area">
                                        <Col className="align-self-center">
                                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </Col>
                                        <Col className="text-right">
                                            <IconButton>
                                                <InfoIcon />
                                            </IconButton>
                                            <IconButton>
                                                <SettingsIcon />
                                            </IconButton>
                                            <IconButton className="pr-0">
                                                <FullscreenIcon />
                                            </IconButton>
                                        </Col>
                                    </Row>
                                </ReflexElement> */}

                                <form onSubmit={this.handleSubmit} id="codeSubmitForm">
                                    <div>
                                        <CodeMirror
                                            value={this.state.value}
                                            options={this.props}
                                            onBeforeChange={(editor, data, value) => {
                                                this.textHandler(value)
                                            }}
                                        />
                                    </div>
                                </form>
                            </ReflexElement>

                            <ReflexSplitter {...this.resizeProps} style={{ height: '10px' }} />

                            <ReflexElement {...this.resizeProps} style={{ overflow: 'hidden' }}>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Row>
                                        <Col sm={3}>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <p>{this.state.output}</p>
                                                    <p>{this.state.error}</p>test1
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    <p>{this.state.output}</p>
                                                    <p>{this.state.error}</p>test2
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                    <ReflexElement flex={0.06} className="footer">
                                        <Button
                                            variant="outline-dark"
                                            className="position-absolute"
                                            style={{ bottom: 0, right: 80 }}
                                        >
                                            <PlayArrowIcon />
                                            Run Code
                                        </Button>
                                        <Button
                                            variant="success"
                                            type="submit"
                                            form="codeSubmitForm"
                                            className="position-absolute"
                                            style={{ bottom: 0, right: 0 }}
                                        >
                                            Submit
                                        </Button>
                                    </ReflexElement>
                                </Tab.Container>
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
    scrollbarStyle: 'overlay',
})

export default connect(mapStateToProps)(withRouter(CodeEditorDesktop))
