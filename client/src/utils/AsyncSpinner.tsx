import React from 'react';

import {css} from '@emotion/core';
import MoonLoader from 'react-spinners/MoonLoader';

const spinnerCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -75px;
  margin-top: -150px;
`;
const AsyncSpinner = (): JSX.Element => {
  return (
    <div>
      <MoonLoader css={spinnerCss} />
    </div>
  );
};

export default AsyncSpinner;
