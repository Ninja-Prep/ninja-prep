import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import SocialMediaButtons from 'utils/SocialMediaButtons';
import {GET_STARTED} from 'utils/stringIds.json';

import './header.css';

import {
  HEADER_TITLE_1,
  HEADER_DESCRIPTION_1,
  HEADER_DESCRIPTION_2,
} from './HeaderStringIds';

import {
  HeaderContainer,
  HeaderBackground,
  HeaderFormBackground, HeaderMottoContainer,
  HeaderTitle,
  HeaderFormContainer
} from './styled'; 

function HeaderDesktop(): JSX.Element {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <Row>
          <HeaderMottoContainer>
              <HeaderTitle>
                {HEADER_TITLE_1}
              </HeaderTitle>
              <h2>
                {HEADER_DESCRIPTION_1} {HEADER_DESCRIPTION_2}
              </h2>
          </HeaderMottoContainer>
          <HeaderFormContainer>
            <HeaderFormBackground>
              <div className="pt-4 pb-2 px-5">
                <h1 className="font-weight-bold pb-3 mx-auto text-dark">
                  {GET_STARTED}
                </h1>
                <SocialMediaButtons cssClass="mx-auto fluid ui mb-4 py-3" />
              </div>
            </HeaderFormBackground>
          </HeaderFormContainer>
        </Row>
      </HeaderContainer>
    </HeaderBackground>
  );
}

export default HeaderDesktop;