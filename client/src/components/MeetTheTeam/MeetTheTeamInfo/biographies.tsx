import React from 'react';

import {
  ALEX_NGUYEN,
  ALEX_DESCRIPTION,
  ANGELA_SUN,
  ANGELA_S_DESCRIPTION,
  ANGELA_YEUNG,
  ANGELA_Y_DESCRIPTION,
  JOANNE_CHEONG,
  JOANNE_DESCRIPTION,
} from 'utils/stringIds.json';

interface TeamMate {
  name: string;
  description: string;
  photo: JSX.Element;
}

export const biographies: TeamMate[] = [
  {
    name: ALEX_NGUYEN,
    description: ALEX_DESCRIPTION,
    photo: (
      <img
        className="img-fluid rounded"
        src="/images/ALEX-PHOTO.jpg"
        alt="AlexPhoto"
      />
    ),
  },
  {
    name: ANGELA_SUN,
    description: ANGELA_S_DESCRIPTION,
    photo: (
      <img
        className="img-fluid rounded"
        src="/images/ANGELA-S-PHOTO.jpg"
        alt="AngelaSPhoto"
      />
    ),
  },
  {
    name: ANGELA_YEUNG,
    description: ANGELA_Y_DESCRIPTION,
    photo: (
      <img
        className="img-fluid rounded"
        src="/images/ANGELA-Y-PHOTO.jpg"
        alt="AngelaYPhoto"
      />
    ),
  },
  {
    name: JOANNE_CHEONG,
    description: JOANNE_DESCRIPTION,
    photo: (
      <img
        className="img-fluid rounded"
        src="/images/JOANNE-PHOTO.jpg"
        alt="JoannePhoto"
      />
    ),
  },
];
