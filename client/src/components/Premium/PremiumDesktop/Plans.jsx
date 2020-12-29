import React from 'react'
import '../premium.css'
import { Container, CardDeck, Card, Row, Col, Button } from 'react-bootstrap'

function Plans() {
    return (
        <div className="pb-3">
            <h2 className="display-5 py-5 m-0 text-center">Our Plans</h2>
            <Container>
                <CardDeck className="m-0">
                    <Card>
                        <Card.Header className="plan-a text-light py-5 px-5">
                            <Row>
                                <Col>
                                    <h2>Plan A</h2>
                                </Col>
                                <Col>
                                    <h2 className="text-right">
                                        $55
                                        <span className="lead text-light">/mo</span>
                                    </h2>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="px-5 py-4 lead">
                            <Card.Text>Access to guided and convenient features, all in one platform.</Card.Text>
                        </Card.Body>
                        <div className="mx-auto pb-4">
                            <Button href="#" variant="outline-secondary">
                                <p className="lead">Subscribe</p>
                            </Button>
                        </div>
                    </Card>
                    <Card>
                        <Card.Header className="plan-b text-light py-5 px-5">
                            <Row>
                                <Col>
                                    <h2>Plan B</h2>
                                </Col>
                                <Col>
                                    <h2 className="text-right">
                                        $45
                                        <span className="lead text-light">/mo</span>
                                    </h2>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="px-5 py-4 lead">
                            <Card.Text>Access to guided and convenient features, all in one platform.</Card.Text>
                        </Card.Body>
                        <div className="mx-auto pb-4">
                            <Button href="#" variant="outline-secondary">
                                <p className="lead">Subscribe</p>
                            </Button>
                        </div>
                    </Card>
                    <Card>
                        <Card.Header className="plan-c text-light py-5 px-5">
                            <Row>
                                <Col>
                                    <h2>Plan C</h2>
                                </Col>
                                <Col>
                                    <h2 className="text-right">
                                        $35
                                        <span className="lead text-light">/mo</span>
                                    </h2>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="px-5 py-4 lead">
                            <Card.Text>Access to guided and convenient features, all in one platform.</Card.Text>
                        </Card.Body>
                        <div className="mx-auto pb-4">
                            <Button href="#" variant="outline-secondary">
                                <p className="lead">Subscribe</p>
                            </Button>
                        </div>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    )
}

export default Plans
export { default as Plans } from './Plans'
