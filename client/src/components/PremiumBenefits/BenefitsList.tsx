import React from 'react';

import {
  BENEFIT_1,
  BENEFIT_2,
  BENEFIT_3,
  BENEFIT_4,
  BENEFIT_5,
  BENEFIT_6,
} from './BenefitsStringIds';

import DoneIcon from '@material-ui/icons/Done';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';

export const BenefitsList = [
  {
    icon: <LockOpenIcon />,
    title: BENEFIT_1.TITLE,
    description: BENEFIT_1.DESCRIPTION,
  },
  {
    icon: <PlayArrowIcon />,
    title: BENEFIT_2.TITLE,
    description: BENEFIT_2.DESCRIPTION,
  },
  {
    icon: <OfflineBoltOutlinedIcon />,
    title: BENEFIT_3.TITLE,
    description: BENEFIT_3.DESCRIPTION,
  },
  {
    icon: <DescriptionIcon />,
    title: BENEFIT_4.TITLE,
    description: BENEFIT_4.DESCRIPTION,
  },
  {
    icon: <SchoolIcon />,
    title: BENEFIT_5.TITLE,
    description: BENEFIT_5.DESCRIPTION,
  },
  {
    icon: <CodeIcon />,
    title: BENEFIT_6.TITLE,
    description: BENEFIT_6.DESCRIPTION,
  },
];
