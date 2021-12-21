import React from 'react';
import {Box} from '@mui/material';

import * as Styled from './styled';

function VideoSolution(): JSX.Element {
  return (
    <div>
      <h3>Video Solution</h3>
      <hr></hr>
      <Box p={3}>
        <Styled.Container>
          <Styled.Iframe
            src="https://player.vimeo.com/video/633280864?h=7e5e3f57e6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            title="Two-Sum Video.mp4"
          ></Styled.Iframe>
        </Styled.Container>
      </Box>
    </div>
  );
}

export default VideoSolution;
