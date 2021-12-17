import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';

import SolutionsList from '../SolutionsList/SolutionsList';

const mapStateToProps = (state: RootState) => {
  return {
    solutionsList: state.problemDetails.solutionsList,
  };
};

const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;

class SubmissionsContainer extends Component<Props> {
  render(): JSX.Element {
    if (this.props.solutionsList.length === 0) {
      return <div></div>;
    }
    return <SolutionsList solutionsList={this.props.solutionsList} />;
  }
}

export default React.memo(connector(SubmissionsContainer));
