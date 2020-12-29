import React from 'react'
import '../premium.css'
import { Container, Row, Col } from 'react-bootstrap'
import DoneIcon from '@material-ui/icons/Done'

const styles = {
    doneIcon: {
        fontSize: 30,
        color: '#259AF3',
    },
}

function Benefits() {
    return (
        <div className="circles-bg">
            <Container>
                <h2 className="display-5 py-5 m-0">What's included</h2>
                <Row className="pb-5 mb-3">
                    <Col className="pr-5">
                        <DoneIcon className="align-middle" style={styles.doneIcon} />
                        <p className="d-inline lead align-middle">Access to Premium Content</p>
                        <p className="text-secondary lead pt-2">
                            Access to over 100 challenges that cover in-demand algorithm and data structure concepts.
                            This is placeholder text where you elaborate on the benefit in about 2 to 3 sentences.
                        </p>
                    </Col>
                    <Col className="pl-5">
                        <DoneIcon style={styles.doneIcon} />
                        <p className="d-inline lead align-middle">Premium Articles</p>
                        <p className="text-secondary lead pt-2">
                            This is placeholder text where you elaborate on the benefit. Elaborate articles to provide
                            detailed conceptual overview. This is placeholder text where you elaborate on the benefit.
                        </p>
                    </Col>
                </Row>
                <Row className="pb-5 mb-3">
                    <Col className="pr-5">
                        <DoneIcon style={styles.doneIcon} />
                        <p className="d-inline lead align-middle">Code Walkthroughs</p>
                        <p className="text-secondary lead pt-2">
                            Step by Step video solutions to efficiently walk you through the problem. This is
                            placeholder text where you elaborate on the benefit. Elaborate articles to provide detailed
                            conceptual overview. This is placeholder text where you elaborate on the benefit in about 2
                            to 3 sentences.
                        </p>
                    </Col>
                    <Col className="pl-5">
                        <DoneIcon style={styles.doneIcon} />
                        <p className="d-inline lead align-middle">Crash Course</p>
                        <p className="text-secondary lead pt-2">
                            This is placeholder text where you elaborate on the benefit. Elaborate articles to provide
                            detailed conceptual overview. This is placeholder text where you elaborate on the benefit.
                        </p>
                    </Col>
                </Row>
                <Row className="pb-5 mb-3">
                    <Col className="pr-5">
                        <DoneIcon style={styles.doneIcon} />
                        <p className="d-inline lead align-middle">In-Browser Compiler</p>
                        <p className="text-secondary lead pt-2">
                            This is placeholder text where you elaborate on the benefit. Elaborate articles to provide
                            detailed conceptual overview. This is placeholder text where you elaborate on the benefit.
                        </p>
                    </Col>
                    <Col className="pl-5">
                        <DoneIcon style={styles.doneIcon} />
                        <p className="d-inline lead align-middle">Code in 5 languages</p>
                        <p className="text-secondary lead pt-2">
                            This is placeholder text where you elaborate on the benefit. Elaborate articles to provide
                            detailed conceptual overview. This is placeholder text where you elaborate on the benefit.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Benefits
export { default as Benefits } from './Benefits'
