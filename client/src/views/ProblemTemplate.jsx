import { useRouteMatch, useParams, Link } from 'react-router-dom'
import CodeEditor from '../components/problem/CodeEditor'
import React, { Component } from 'react'


class ProblemTemplate extends Component {
	constructor(props) {
		super(props)
		this.problemName = this.props.match.params.name
	}

	render() {
		return <div><CodeEditor /></div>
	}
}

export default ProblemTemplate
