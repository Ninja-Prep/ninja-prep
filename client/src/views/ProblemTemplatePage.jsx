import React, { Component } from 'react'

class ProblemTemplatePage extends Component {
    constructor(props) {
        super(props)
        this.problemName = this.props.match.params.name
    }

    render() {
        return <div></div>
    }
}

export default ProblemTemplatePage
