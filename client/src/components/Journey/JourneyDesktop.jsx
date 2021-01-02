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
    function JourneyCard(props) {
        return (
            <Row className={' py-5 ' + props.backgroundImage}>
                <Col className="pr-5">
                    <img className="float-right img-fluid" src={props.imagePath} alt="disover" />
                </Col>
                <Col className="my-auto pl-5">
                    <h4 className="font-weight-bold">{props.title}</h4>
                    <p className="w-75 lead text-secondary">{props.description}</p>
                </Col>
            </Row>
        )
    }
    return (
        <div className="pb-5">
            <Container>
                <div className="text-center pb-4">
                    <h3 className="font-weight-bold pb-2">{JOURNEY_TITLE}</h3>
                    <p className="lead">{JOURNEY_DESCRIPTION}</p>
                </div>
                <JourneyCard
                    backgroundImage={'discover'}
                    imagePath={DISCOVER_CONCEPTS.IMAGE_PATH}
                    title={DISCOVER_CONCEPTS.TITLE}
                    description={DISCOVER_CONCEPTS.DESCRIPTION}
                />
                <JourneyCard
                    backgroundImage={'videos'}
                    imagePath={VIDEOS.IMAGE_PATH}
                    title={VIDEOS.TITLE}
                    description={VIDEOS.DESCRIPTION}
                />
                <JourneyCard
                    backgroundImage={'articles'}
                    imagePath={ARTICLES.IMAGE_PATH}
                    title={ARTICLES.TITLE}
                    description={ARTICLES.DESCRIPTION}
                />
                <JourneyCard
                    backgroundImage={'feedback'}
                    imagePath={FEEDBACK.IMAGE_PATH}
                    title={FEEDBACK.TITLE}
                    description={FEEDBACK.DESCRIPTION}
                />
                <JourneyCard
                    backgroundImage={'job'}
                    imagePath={JOB.IMAGE_PATH}
                    title={JOB.TITLE}
                    description={JOB.DESCRIPTION}
                />
            </Container>
        </div>
    )
}

export default JourneyDesktop
export { default as JourneyDesktop } from './JourneyDesktop'
