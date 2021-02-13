import React from 'react'
import './question-list.css'
import '../Featured/featured.css'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import LockIcon from '@material-ui/icons/Lock'

const QuestionListDesktop = (props) => {
    const numRows = 4

    function makeQuestionCard(title, status) {
        let icon = null
        let questionTitle = title
        if (status == null) {
            icon = null
        } else if (status === 'done') {
            icon = <CheckCircleIcon className="check-circle-icon" />
        } else if (status === 'pending') {
            icon = <MoreHorizIcon className="pending-icon" />
        } else {
            icon = <LockIcon className="lock-icon" />
        }

        let questionCard = (
            <div className="card flex-row flex-wrap mb-3 col-sm p-0">
                <div className="img-square-wrapper p-2">{icon}</div>
                <div className="card-block px-2">
                    <blockquote className="mb-0 card-body flex-fill">{questionTitle}</blockquote>
                </div>
            </div>
        )

        return questionCard
    }

    function getQuestionList() {
        // TODO: get question list from db here instead
        return [
            ['Question', null],
            ['Question1', 'done'],
            ['Question2', 'pending'],
            ['Question3', 'premium'],
        ]
    }

    function makeQuestionCards() {
        let cards = []
        let questionList = getQuestionList()
        for (let i = 0; i < numRows; i++) {
            cards[i] = makeQuestionCard(questionList[i][0], questionList[i][1])
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
