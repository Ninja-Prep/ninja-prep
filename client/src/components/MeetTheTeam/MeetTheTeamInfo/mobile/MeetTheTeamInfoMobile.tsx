import React from 'react';

import {biographies} from '../biographies';
import {Biography, BiographyContainer, Name, Photo} from './styled';

const MeetTheTeamInfoMobile = (): JSX.Element => {
  return (
    <BiographyContainer>
      {biographies.map((_) => {
        return (
          <div>
            <Name>{_.name}</Name>
            <Photo>{_.photo}</Photo>
            <Biography>{_.description}</Biography>
          </div>
        );
      })}
    </BiographyContainer>
  );
};

export default MeetTheTeamInfoMobile;
