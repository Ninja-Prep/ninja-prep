import React from 'react';

import {Tab, Tabs} from 'react-bootstrap';

import ConceptReview from './ConceptReview';
import ProblemDescription from './ProblemDescription';
import VideoSolution from './VideoSolution';
import './Tabs.css';

interface Props {
  problemDetails: any;
}

const TabsComponent = (props: Props) => {
  return (
    <div className="content-tabs-link">
      <Tabs defaultActiveKey="problem">
        <Tab eventKey="problem" title="Problem">
          <ProblemDescription problemDetails={props.problemDetails} />
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
  );
};

export default TabsComponent;
