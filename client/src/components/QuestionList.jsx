import React from 'react'
import '../css/question-list.css'
import '../components/Featured/featured.css'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const QuestionList = (props) => {
	const QuestionImageList = []
	const numRows = 4
	const numCols = 3

	var questionCard = (
		<div class="card text-primary mb-3 col-sm p-3 mx-2">
			<blockquote class="blockquote mb-0 card-body flex-fill">
				<p>Question</p>
				<footer class="blockquote-footer">
				<small class="text-muted">
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

	var easyButton = (
		<Link className="nav-link" to="#">
			<p className="easy d-inline text-center">Easy</p>
		</Link>
	)

	var mediumButton = (
		<Link className="nav-link" to="#">
			<p className="medium d-inline">Medium</p>
		</Link>
	)

	var hardButton = (
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


export default QuestionList
export { default as QuestionList } from './QuestionList'
