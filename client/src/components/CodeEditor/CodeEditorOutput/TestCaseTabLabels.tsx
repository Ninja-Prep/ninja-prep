import React, {Fragment} from 'react';

import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import {Nav} from 'react-bootstrap';

import {UserSubmissionContext} from './TestCaseArea';

interface StyleTestCaseTabLabelProps {
  index: number;
  children?: React.ReactNode;
}

/**
 *
 */
function StyleTestCaseTabLabel({index, children}: StyleTestCaseTabLabelProps) {
  return (
    <Nav.Link eventKey={index.toString()} className="text-dark text-center">
      {children}
      <b className="px-1">Test Case {index + 1}</b>
    </Nav.Link>
  );
}

/**
 *
 */
export function DefaultTestCaseTabLabels() {
  return (
    <UserSubmissionContext.Consumer>
      {({testCases}) => {
        return (
          <Fragment>
            {testCases.map((_, index) => {
              return <StyleTestCaseTabLabel index={index} />;
            })}
          </Fragment>
        );
      }}
    </UserSubmissionContext.Consumer>
  );
}

/**
 *
 */
export function CompletedTestCaseTabLabels() {
  return (
    <UserSubmissionContext.Consumer>
      {({submissionOutput}) => {
        return (
          <Fragment>
            {submissionOutput &&
              submissionOutput.judged_test_cases.map((testCase, index) => {
                if (testCase.status == 'ACCEPTED') {
                  return (
                    <StyleTestCaseTabLabel index={index}>
                      <CheckRoundedIcon style={{color: 'green'}} />
                    </StyleTestCaseTabLabel>
                  );
                }
                return (
                  <StyleTestCaseTabLabel index={index}>
                    <CloseRoundedIcon style={{color: 'red'}} />
                  </StyleTestCaseTabLabel>
                );
              })}
          </Fragment>
        );
      }}
    </UserSubmissionContext.Consumer>
  );
}
