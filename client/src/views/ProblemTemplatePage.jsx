import CodeEditorComponent from '../components/CodeEditor/CodeEditorComponent'
import React, { Component } from 'react'

class ProblemTemplatePage extends Component {
    constructor(props) {
        super(props)
        this.problemName = this.props.match.params.name
    }

    render() {
        return (
            <div>
                <CodeEditorComponent />
            </div>
        )
    }
}

export default ProblemTemplatePage
