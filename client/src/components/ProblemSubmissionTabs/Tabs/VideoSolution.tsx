import React from 'react';

import {ResponsiveEmbed} from 'react-bootstrap';

function VideoSolution() {
  return (
    <div className="m-4">
      <h3 className="font-weight-bold">Video Solution</h3>
      <hr className="pb-2"></hr>
      <ResponsiveEmbed aspectRatio="16by9">
        <embed type="image/svg+xml" src="https://player.vimeo.com/video/633280864?h=7e5e3f57e6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      </ResponsiveEmbed>
    </div>
  );
}

export default VideoSolution;
