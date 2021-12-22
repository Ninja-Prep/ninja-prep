import React from 'react';
import {Box} from '@mui/material';

import * as Styled from './styled';

interface Props {
  videoSolutionLink: string;
}

function VideoSolution(props: Props): JSX.Element {
  return (
    <div>
      <h3>Video Solution</h3>
      <hr></hr>
      <Box p={3}>
        <Styled.Container>
          <Styled.Iframe src={props.videoSolutionLink} frameBorder="0" allow="fullscreen; picture-in-picture" allowFullScreen title="Two-Sum Video.mp4"></Styled.Iframe>
        </Styled.Container>
      </Box>
    </div>
  );
}

export default VideoSolution;
