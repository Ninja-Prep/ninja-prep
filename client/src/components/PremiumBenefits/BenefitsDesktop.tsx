import React from 'react';

import DoneIcon from '@material-ui/icons/Done';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import DescriptionIcon from '@material-ui/icons/Description';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';

import {Container, Row, Col} from 'react-bootstrap';

import {BenefitsCardProps} from './BenefitsBaseComponent';
import {BenefitsList} from './BenefitsList';
import {BENEFIT_TITLE, BENEFIT_DESCRIPTION} from './BenefitsStringIds';

import {BenefitsBackground, BenefitsContainer} from './styled';

const styles = {
  benefitIcon: {
    fontSize: 30,
    color: '#25D0F3',
  },
};

function BenefitsCard(props: BenefitsCardProps) {
  return (
    <Col>
      <div className="my-3">
        <span className="align-middle" style={styles.benefitIcon}>
          {props.icon}
        </span>
        <h2 className="font-weight-bold d-inline  pl-3">{props.title}</h2>
      </div>
      <h2 className="font-weight-light text-secondary m-0">
        {props.description}
      </h2>
    </Col>
  );
}

function BenefitsDesktop() {
  return (
    <BenefitsBackground>
      <div className="text-center pb-4">
        <h1 className="font-weight-bold pb-2 display-4">{BENEFIT_TITLE}</h1>
        <h2 className="font-weight-light">{BENEFIT_DESCRIPTION}</h2>
      </div>
      <BenefitsContainer>
        {/* {BenefitsList.map((card, i) => (
          <BenefitsCard
            key={i}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
        <span className="align-middle" style={styles.doneIcon}>
          {BenefitsList[0].icon}
        </span> */}

        <Row className="pb-5 mb-3 px-3">
          <BenefitsCard
            icon={BenefitsList[0].icon}
            title={BenefitsList[0].title}
            description={BenefitsList[0].description}
          />
          <BenefitsCard
            icon={BenefitsList[1].icon}
            title={BenefitsList[1].title}
            description={BenefitsList[1].description}
          />
        </Row>
        <Row className="pb-5 mb-3 px-3">
          <BenefitsCard
            icon={BenefitsList[2].icon}
            title={BenefitsList[2].title}
            description={BenefitsList[2].description}
          />
          <BenefitsCard
            icon={BenefitsList[3].icon}
            title={BenefitsList[3].title}
            description={BenefitsList[3].description}
          />
        </Row>
        <Row className="pb-5 mb-3 px-3">
          <BenefitsCard
            icon={BenefitsList[4].icon}
            title={BenefitsList[4].title}
            description={BenefitsList[4].description}
          />
          <BenefitsCard
            icon={BenefitsList[5].icon}
            title={BenefitsList[5].title}
            description={BenefitsList[5].description}
          />
        </Row>
      </BenefitsContainer>
    </BenefitsBackground>
  );
}

export default BenefitsDesktop;
