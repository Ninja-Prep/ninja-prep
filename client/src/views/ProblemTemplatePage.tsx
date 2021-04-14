import React, { Component } from 'react'

import ReflexDemo from '../components/CodeEditor/ReflexDemo'

class ProblemTemplatePage extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props)
    }

    render() {
        return (
            <div>
                <ReflexDemo {...this.props} />
            </div>
        )
    }
}

export default ProblemTemplatePage
