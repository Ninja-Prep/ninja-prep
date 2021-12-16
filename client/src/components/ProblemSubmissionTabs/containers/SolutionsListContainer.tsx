import React, {Component} from 'react';

import {RouteComponentProps, withRouter} from 'react-router-dom';

import {getSolutions} from 'services/challenges';
import {SolutionDetails} from 'utils/types/challenges';
import SolutionsList from '../SolutionsList/SolutionsList';

interface MatchParams {
  id: string;
}

interface State {
  solutionsList?: SolutionDetails[];
}

class SubmissionsContainer extends Component<RouteComponentProps<MatchParams>, State> {
  state = {
    solutionsList: [],
  };

  async componentDidMount(): Promise<void> {
    const solutionsList = await getSolutions(this.props.match.params.id);
    this.setState({solutionsList});
  }

  render(): JSX.Element {
    return <SolutionsList solutionsList={this.state.solutionsList} />;
  }
}

export default React.memo(withRouter(SubmissionsContainer));
