import React, {Component} from 'react';

import './QuestionList.css';
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
import FadeIn from 'react-fade-in';

import QuestionCard from './QuestionCard';
import {QuestionStatus} from './QuestionListStringIds';

interface Challenge {
  title: string;
  problem_path: string;
}

interface State {
  challenges: Array<Challenge>;
}

/**
 *
 */
class QuestionListDesktop extends Component {
  state: State = {
    challenges: [],
  };
  /**
   *
   */
  componentDidMount(): void {
    axios({
      method: 'GET',
      url: `/api/challenges/findchallenges`,
    }).then((res) => {
      this.setState({challenges: res.data});
    });
  }

  /**
   *
   */
  renderCards() {
    return (
      <FadeIn delay={250} transitionDuration={450}>
        <Row>
          <Col className="my-auto text-center">
            {this.state.challenges.map((challenge: Challenge) => {
              return (
                <QuestionCard
                  status={QuestionStatus.NONE}
                  questionTitle={challenge.title}
                  path={challenge.problem_path}
                />
              );
            })}
          </Col>
        </Row>
      </FadeIn>
    );
  }
  /**
   *
   */
  render() {
    return (
      <div className="mx-5 px-5 pb-5 mb-5">
        <h2 className="font-weight-bold pb-4">All</h2>
        {this.renderCards()}
      </div>
    );
  }
}

export default QuestionListDesktop;
