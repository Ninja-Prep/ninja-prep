import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
    JOURNEY_TITLE,
    JOURNEY_DESCRIPTION,
    DISCOVER_CONCEPTS,
    VIDEOS,
    ARTICLES,
    FEEDBACK,
    JOB,
} from './JourneyStringIds'
import './journey.css'

function JourneyDesktop() {
    const JourneyList = [
        ['discover', DISCOVER_CONCEPTS.IMAGE_PATH, DISCOVER_CONCEPTS.TITLE, DISCOVER_CONCEPTS.DESCRIPTION],
        ['videos', VIDEOS.IMAGE_PATH, VIDEOS.TITLE, VIDEOS.DESCRIPTION],
        ['articles', ARTICLES.IMAGE_PATH, ARTICLES.TITLE, ARTICLES.DESCRIPTION],
        ['feedback', FEEDBACK.IMAGE_PATH, FEEDBACK.TITLE, FEEDBACK.DESCRIPTION],
        ['job', JOB.IMAGE_PATH, JOB.TITLE, JOB.DESCRIPTION],
    ]
    function JourneyCard(props) {
        return (
            <Row className={' py-5 blob-bg ' + props.backgroundImage}>
                <Col className="pr-5">
                    <img className="float-right img-fluid" src={props.imagePath} />
                </Col>
                <Col className="my-auto pl-5">
                    <h4 className="font-weight-bold">{props.title}</h4>
                    <p className="w-75 lead text-secondary">{props.description}</p>
                </Col>
            </Row>
        )
    }
    return (
        <div className="pb-5 pt-4">
            <Container>
                <div className="text-center pb-4">
                    <h3 className="font-weight-bold pb-2">{JOURNEY_TITLE}</h3>
                    <p className="lead">{JOURNEY_DESCRIPTION}</p>
                </div>
                {JourneyList.map((card, i) => (
                    <JourneyCard
                        key={i}
                        backgroundImage={JourneyList[i][0]}
                        imagePath={JourneyList[i][1]}
                        title={JourneyList[i][2]}
                        description={JourneyList[i][3]}
                    />
                ))}
            </Container>
        </div>
    )
}

export default JourneyDesktop
export { default as JourneyDesktop } from './JourneyDesktop'
