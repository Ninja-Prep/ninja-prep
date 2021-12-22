import React, {Component} from 'react';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from 'reducers/rootReducer';

import VideoSolution from '../VideoSolution/VideoSolution';

const mapStateToProps = (state: RootState) => {
  return {
    videoSolutionLink: state.problemDetails.details.videoSolutionLink,
  };
};

const connector = connect(mapStateToProps);
type Props = ConnectedProps<typeof connector>;

class VideoSolutionContainer extends Component<Props> {
  render(): JSX.Element {
    return <VideoSolution videoSolutionLink={this.props.videoSolutionLink} />;
  }
}

export default React.memo(connector(VideoSolutionContainer));
