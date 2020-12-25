import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './discover.css'
import {
    DISCOVER_PLAIN_TEXT,
    DISCOVER_INDEMAND_CONCEPTS,
} from './DiscoverStringIds'

const DiscoverDesktop = () => (
    <div className="text-center px-5 pt-5 pb-3 container">
        <Row className="pt-3">
            <Col className="my-auto">
                <img
                    className="img-fluid w-75"
                    src="./images/Explore-Cards.png"
                    alt="Explore Cards"
                />
            </Col>
            <Col className="my-auto">
                <h1 className="font-weight-bold discover-text display-5 pb-2">
                    {DISCOVER_PLAIN_TEXT}
                </h1>
                <p className="lead text-secondary w-75 m-auto">
                    {DISCOVER_INDEMAND_CONCEPTS}
                </p>
            </Col>
        </Row>
    </div>
)

export default DiscoverDesktop
export { default as DiscoverDesktop } from './DiscoverDesktop'
