<<<<<<< HEAD
import CodeEditorComponent from '../components/CodeEditor/CodeEditorComponent'
=======
>>>>>>> 014371ac9e184a758cd141fd4768b38473c66874
import React, { Component } from 'react'

class ProblemTemplatePage extends Component {
    constructor(props) {
        super(props)
        this.problemName = this.props.match.params.name
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <CodeEditorComponent />
=======
>>>>>>> 014371ac9e184a758cd141fd4768b38473c66874
            </div>
        )
    }
}

export default ProblemTemplatePage
