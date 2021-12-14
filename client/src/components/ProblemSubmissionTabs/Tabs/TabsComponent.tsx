import React from 'react';

import {Tab, Tabs} from 'react-bootstrap';
import {ProblemDetails} from 'utils/types/challenges';

import ProblemDescription from '../ProblemDescription/ProblemDescription';
import VideoSolution from './VideoSolution';

import './Tabs.css';
import SubmissionsContainer from '../containers/SubmissionsContainer';
import SolutionsListContainer from '../containers/SolutionsListContainer';

interface Props {
  problemDetails: ProblemDetails;
}

const TabsComponent = (props: Props): JSX.Element => {
  return (
    <div className="content-tabs-link">
      <Tabs defaultActiveKey="problem">
        <Tab eventKey="problem" title="Problem">
          <ProblemDescription problemDetails={props.problemDetails} />
        </Tab>
        <Tab eventKey="videoSolution" title="Video Solution">
          <VideoSolution />
        </Tab>
        <Tab eventKey="solutions" title="Solutions">
          <SolutionsListContainer />
        </Tab>
        <Tab eventKey="submissions" title="Submissions">
          <SubmissionsContainer />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsComponent;