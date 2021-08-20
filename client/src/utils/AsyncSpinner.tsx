import React from 'react';

import ClipLoader from 'react-spinners/ClipLoader';

const AsyncSpinner = (): JSX.Element => {
  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', marginTop: '-300px', marginLeft: '-100px'}}>
      <ClipLoader size={200} color="#259af3"></ClipLoader>
    </div>
  );
};

export default AsyncSpinner;
