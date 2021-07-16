import React from 'react';

import {FACEBOOK_LOGIN, GITHUB_LOGIN, GOOGLE_LOGIN} from 'utils/stringIds.json';

interface Props {
  readonly cssClass: string;
}

const SocialMediaButtons = ({cssClass}: Props): JSX.Element => {
  return (
    <div>
      <div className="lead">
        <a className={cssClass + ' red google button'} href="/api/auth/google">
          <i className="google icon"></i>
          {GOOGLE_LOGIN}
        </a>
      </div>
      <div className="lead">
        <a className={cssClass + ' facebook button'} href="/api/auth/facebook">
          <i className="facebook icon"></i>
          {FACEBOOK_LOGIN}
        </a>
      </div>
      <div className="lead">
        <a className={cssClass + ' black button'} href="/api/auth/github">
          <i className="github icon"></i>
          {GITHUB_LOGIN}
        </a>
      </div>
    </div>
  );
};

export default SocialMediaButtons;
