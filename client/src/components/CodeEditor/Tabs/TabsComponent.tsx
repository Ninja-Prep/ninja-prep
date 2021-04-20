import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import ConceptReview from './ConceptReview'
import ProblemDesktop from './ProblemDesktop'
import VideoSolution from './VideoSolution'
import './Tabs.css'

const TabsComponent = () => {
    return (
        <div className="content-tabs-link">
            <Tabs defaultActiveKey="problem">
                <Tab eventKey="problem" title="Problem">
                    <ProblemDesktop />
                </Tab>
                <Tab eventKey="videoSolution" title="Video Solution">
                    <VideoSolution />
                </Tab>
                <Tab eventKey="article" title="Concept Review">
                    <ConceptReview />
                </Tab>
                <Tab eventKey="submissions" title="Submissions">
                    <ConceptReview />
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabsComponent
