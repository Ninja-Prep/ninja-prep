import React from 'react';

import {ResponsiveEmbed} from 'react-bootstrap';

/**
 *
 */
function VideoSolution() {
  return (
    <div className="m-4">
      <h3 className="font-weight-bold">Video Solution</h3>
      <hr className="pb-2"></hr>
      <ResponsiveEmbed aspectRatio="16by9">
        <embed
          type="image/svg+xml"
          src="https://www.youtube.com/embed/vlDzYIIOYmM"
        />
      </ResponsiveEmbed>
    </div>
  );
}

export default VideoSolution;
