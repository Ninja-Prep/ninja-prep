import React from 'react'
import './question-list.css'
import '../Featured/featured.css'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const QuestionListDesktop = (props) => {
	const numRows = 4

	const questionCard = (
		<div className="card text-primary mb-3 col-sm p-3 mx-2">
			<blockquote className="blockquote mb-0 card-body flex-fill">
				<p>Question</p>
				<footer className="blockquote-footer">
				<small className="text-muted">
					<cite title="Stacks">Stacks 101</cite>
				</small>
				</footer>
			</blockquote>
		</div>
	)
	
	function makeQuestionCards() {
		let cards = []
		for (var i = 0; i < numRows; i++) {
			cards[i] = questionCard
		}
		return cards
	}

	const easyButton = (
		<Link className="nav-link" to="#">
			<p className="easy d-inline">Easy</p>
		</Link>
	)

	const mediumButton = (
		<Link className="nav-link" to="#">
			<p className="medium d-inline">Medium</p>
		</Link>
	)

	const hardButton = (
		<Link className="nav-link" to="#">
			<p className="hard d-inline">Hard</p>
		</Link>
	)

	return (
		<div className="featured-container">
			<div className="featured-title">
				<h1 className="bold">All</h1>
				<PlayArrowIcon className="featured-play" />
			</div>

			<Row className="pt-3">
				<Col className="my-auto text-center">{easyButton}</Col>
				<Col className="my-auto text-center">{mediumButton}</Col>
				<Col className="my-auto text-center">{hardButton}</Col>
			</Row>

			<Row className="pt-3">
				<Col className="my-auto text-center">{makeQuestionCards()}</Col>
				<Col className="my-auto text-center">{makeQuestionCards()}</Col>
				<Col className="my-auto text-center">{makeQuestionCards()}</Col>
			</Row>
			
		</div>
	)
}


export default QuestionListDesktop
export { default as QuestionListDesktop } from './QuestionListDesktop'