import React from 'react'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import './TestCaseArea.css'
import FadeIn from 'react-fade-in'
import _ from 'lodash'

interface Props {
    TabLabels: React.ReactNode
    TabContent: React.ReactNode
}

function TestCaseOutputWrapper({ TabLabels, TabContent }: Props) {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
            <FadeIn>
                <Row className="h-75">
                    <Col sm={3} className="pr-0">
                        <Nav variant="pills" className="flex-column">
                            {TabLabels}
                        </Nav>
                    </Col>
                    <Col sm={9} className="selected-testcase-details">
                        <Tab.Content>{TabContent}</Tab.Content>
                    </Col>
                </Row>
            </FadeIn>
        </Tab.Container>
    )
}

export default TestCaseOutputWrapper
