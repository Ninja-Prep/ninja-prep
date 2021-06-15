import React from 'react';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import _ from 'lodash';
import {Row, Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {RouteComponentProps} from 'react-router';
import {withRouter} from 'react-router-dom';

import {handleSubmit} from '../CodeEditorBaseComponent';
import {UserSubmissionContext} from './TestCaseArea';
import {SubmissionStatus, UserSubmissionOutput} from './TestCaseAreaHelper';
import {
  INTERNAL_ERROR,
  SUBMIT_CODE,
  SUBMIT_YOUR_CODE,
} from './TestCaseAreaStringIds';

interface MatchParams {
  id: string;
}

interface SubmitCodeButtonsProps extends RouteComponentProps<MatchParams> {
  codeSnippet: string;
  mode: string;
  userSubmissionOutput?: UserSubmissionOutput;
}

/**
 *
 */
function VerdictFromSubmission() {
  return (
    <UserSubmissionContext.Consumer>
      {({submissionOutput}) => {
        if (submissionOutput) {
          switch (submissionOutput.verdict) {
            case 'ACCEPTED': {
              return (
                <p className="h3 font-weight-bold d-inline text-success">
                  {' '}
                  ACCEPTED{' '}
                </p>
              );
            }
            case 'Wrong Answer': {
              const countFailed = submissionOutput.judged_test_cases.filter(
                (testCase: any) => {
                  return testCase.status === 'ACCEPTED';
                },
              ).length;
              return (
                <p className="h4 font-weight-bold d-inline text-danger">
                  {countFailed}/{submissionOutput.judged_test_cases.length} Test
                  Cases Passed
                </p>
              );
            }
            default: {
              return (
                <p className="h4 font-weight-bold d-inline text-danger">
                  {' '}
                  {submissionOutput.verdict}{' '}
                </p>
              );
            }
          }
        } else {
          return (
            <p className="h5 font-weight-bold d-inline text-danger">
              {' '}
              {INTERNAL_ERROR}{' '}
            </p>
          );
        }
      }}
    </UserSubmissionContext.Consumer>
  );
}

/**
 *
 */
function VerdictHeader() {
  return (
    <UserSubmissionContext.Consumer>
      {({submissionStatus}) => {
        switch (submissionStatus) {
          case SubmissionStatus.None:
            return (
              <p className="h5 font-weight-bold d-inline text-dark">
                {' '}
                {SUBMIT_YOUR_CODE}{' '}
              </p>
            );
          case SubmissionStatus.Completed:
            return <VerdictFromSubmission />;
          default:
            return (
              <p className="h5 font-weight-bold d-inline text-danger">
                {' '}
                {INTERNAL_ERROR}{' '}
              </p>
            );
        }
      }}
    </UserSubmissionContext.Consumer>
  );
}

/**
 *
 */
function SubmitCodeButtons({codeSnippet, mode, match}: SubmitCodeButtonsProps) {
  return (
    <UserSubmissionContext.Consumer>
      {({setSubmissionStatus, setUserSubmission}) => (
        <Row className="px-3 pt-3 pb-2">
          <Col md="auto">
            <VerdictHeader />
          </Col>
          <Col>
            <div className="float-right">
              <Button
                variant="success"
                type="submit"
                onClick={(e) =>
                  handleSubmit(
                    e,
                    codeSnippet,
                    mode,
                    match.params.id,
                    setSubmissionStatus,
                    setUserSubmission,
                  )
                }
              >
                <PlayArrowIcon />
                <b>{SUBMIT_CODE}</b>
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </UserSubmissionContext.Consumer>
  );
}

export default withRouter(SubmitCodeButtons);
