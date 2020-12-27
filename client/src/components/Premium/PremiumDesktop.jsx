import React from 'react'
import { CardDeck, Card, Row, Col, Button } from 'react-bootstrap'
import './premium.css'

const PremiumDesktop = () => (
    <div className="">
        <div className="px-5 py-5 text-center header-bg">
            <img className="w-auto h-20 pb-4" src="/images/NinjaPrep-Logo.png" alt="logo" />
            <h2 className="display-5 px-5 pb-2">
                Learn, practice, and apply in-demand skills with a NinjaPrep subscription.
            </h2>
            <span className="text-secondary lead w-75 m-auto d-block py-3">
                Access to guided and convenient features, all in one platform.
            </span>
        </div>
        <div className="py-5">
            <h2 className="display-5 px-5 pb-5 font-weight-bold text-center">Our Plans</h2>
            <CardDeck>
                <Card>
                    <Card.Header className="bg-primary text-light">
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
                    <Card.Body>
                        <Card.Text>Access to guided and convenient features, all in one platform.</Card.Text>
                    </Card.Body>
                    <div className="mx-auto">
                        <Button href="#" variant="outline-secondary">
                            Subscribe
                        </Button>
                    </div>
                </Card>
                <Card>
                    <Card.Header className="bg-primary text-light">
                        <Row>
                            <Col>
                                <h2>Plan A</h2>
                            </Col>
                            <Col>
                                <h2 className="text-right">$55/mo</h2>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>Access to guided and convenient features, all in one platform.</Card.Text>
                    </Card.Body>
                    <div className="mx-auto">
                        <Button href="#" variant="outline-secondary">
                            Subscribe
                        </Button>
                    </div>
                </Card>
                <Card>
                    <Card.Header className="bg-primary text-light">
                        <Row>
                            <Col>
                                <h2>Plan A</h2>
                            </Col>
                            <Col>
                                <h2 className="text-right">$55/mo</h2>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>Access to guided and convenient features, all in one platform.</Card.Text>
                    </Card.Body>
                    <div className="mx-auto">
                        <Button href="#" variant="outline-secondary">
                            Subscribe
                        </Button>
                    </div>
                </Card>
            </CardDeck>
        </div>
    </div>
)

export default PremiumDesktop
export { default as PremiumDesktop } from './PremiumDesktop'
