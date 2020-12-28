import React, { Component } from 'react'

import ReflexDemo from '../components/CodeEditor/ReflexDemo'

class ProblemTemplatePage extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <ReflexDemo />
            </div>
        )
    }
}

export default ProblemTemplatePage
