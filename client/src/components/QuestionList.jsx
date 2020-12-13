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

	var card = (
		<div class="w-25 text-white bg-secondary mb-3 col-sm p-3 mx-2">
			<div class="card-body">
				<h5 class="card-title">Primary card title</h5>
			</div>
		</div>
	)

	function copyCards() {
		for (var i = 0; i < numCols; i++) {
			QuestionImageList[i] = card
		}
		return QuestionImageList
	}

	var row = <div class="row">{copyCards()}</div>

	function makeRows() {
		let rows = []
		for (var i = 0; i < numRows; i++) {
			rows[i] = row
		}
		return rows
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

	function makeButtons() {
		return [easyButton, mediumButton, hardButton]
	}

	return (
		<div className="featured-container">
			<div className="featured-title">
				<h1 className="bold">All</h1>
				<PlayArrowIcon className="featured-play" />
			</div>

			{/* <div class="row mb-3 col-sm p-3 mx-auto"> 
                    {makeButtons()}
                </div> */}
			<Row className="pt-3">
				<Col className="my-auto text-center">{easyButton}</Col>
				<Col className="my-auto text-center">{mediumButton}</Col>
				<Col className="my-auto text-center">{hardButton}</Col>
			</Row>
			{/* {makeRows()} */}
		</div>
	)
}

export default QuestionList
export { default as QuestionList } from './QuestionList'
