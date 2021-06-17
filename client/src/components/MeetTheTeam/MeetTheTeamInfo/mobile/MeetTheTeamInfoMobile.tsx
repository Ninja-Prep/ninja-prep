import React from 'react';

import {Col} from 'react-bootstrap';

import {biographies} from '../biographies';
import {Biography, BiographyContainer, Name} from './styled';

const MeetTheTeamInfoMobile = (): JSX.Element => {
  return (
    <BiographyContainer>
      {biographies.map((_) => {
        return (
          <div>
            <Name>{_.name}</Name>
            <Col>{_.photo}</Col>
            <Biography>{_.description}</Biography>
          </div>
        );
      })}
    </BiographyContainer>
  );
};

export default MeetTheTeamInfoMobile;
