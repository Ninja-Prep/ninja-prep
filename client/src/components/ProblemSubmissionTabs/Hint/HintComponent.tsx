import React, {Fragment} from 'react';

import _ from 'lodash';

import * as Styled from './styled';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  hints?: string[];
}

const HintCard = ({index, hint}: {index: number; hint: string}) => {
  return (
    <Styled.StyledAccordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <b>Hint {index}</b>
        </AccordionSummary>
        <AccordionDetails>{hint}</AccordionDetails>
      </Accordion>
    </Styled.StyledAccordion>
  );
};

const HintComponent = (props: Props): JSX.Element => {
  if (_.isNull(props.hints)) {
    return <Fragment />;
  }
  return (
    <div>
      <Styled.HintTitle>Hints</Styled.HintTitle>
      {props.hints?.map((hint, index) => {
        return <HintCard key={index} index={index + 1} hint={hint} />;
      })}
    </div>
  );
};

export default HintComponent;
