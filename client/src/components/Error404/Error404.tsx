/*
404 Not Found pages when user goes to route that does not exist
*/
import React from 'react';

import {Link} from 'react-router-dom';
import {
  TEXT_404,
  MISSING_PAGE_TEXT,
  OOPS,
  REDIRECT_TEXT,
} from 'utils/stringIds';

import './Error404.module.scss';

function Error404Desktop(): JSX.Element {
  return (
    <div className="container">
      <h1 className="display-1 text-center mt-5"> {TEXT_404} </h1>
      <div className="text-center mt-5"> {OOPS} </div>
      <div className={'text-center'}> {MISSING_PAGE_TEXT} </div>
      <div className="text-center my-5">
        <button className={'btn btn-primary'}>
          <Link to="/">
            <p className="backhome">{REDIRECT_TEXT}</p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Error404Desktop;
