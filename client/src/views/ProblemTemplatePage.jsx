import React, { Component } from 'react'

import ReflexDemo from '../components/CodeEditor/ReflexDemo'

class ProblemTemplatePage extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.match.params.id)
    }

    render() {
<<<<<<< HEAD
        return (
            <div>
                <ReflexDemo />
            </div>
        )
=======
        return <div></div>
>>>>>>> ed1a7224241c38aaae9f92002de216d61d4db2e7
    }
}

export default ProblemTemplatePage
