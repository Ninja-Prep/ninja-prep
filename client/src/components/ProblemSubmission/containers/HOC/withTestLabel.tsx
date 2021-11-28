import React from 'react';

import {CenterTestCaseTabLabel} from '../../Submission/SubmissionTestCaseLabels/styled';

interface WithTestLabelProps {
  labelText: string;
  index: string;
}

function withTestLabel<T extends WithTestLabelProps = WithTestLabelProps>(WrappedComponent: React.ComponentType): React.ComponentType<T> {
  const ComponentWithLabel = (props: WithTestLabelProps): JSX.Element => {
    return (
      <CenterTestCaseTabLabel eventKey={props.index}>
        <WrappedComponent />
        <b>{props.labelText}</b>
      </CenterTestCaseTabLabel>
    );
  };

  return ComponentWithLabel;
}

export default withTestLabel;
