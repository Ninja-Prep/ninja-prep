import {Card, Button} from 'react-bootstrap';
import styled from 'styled-components';

export const PlanCardHeader = styled(Card.Header)`
  display: flex;
  justify-content: space-between !important;
  color: white;
  padding: 1.5rem;

  background-color: ${(props) => props.backgroundColor};
`;

export const PlanCardName = styled.h2`
  display: inline;
  margin: 0;
`;

export const MonthlyText = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
`;

export const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 12px;
`;

export const CenteredButton = styled(Button)`
  width: 50%;
  margin: auto;
  font-size: 1.25rem;
  font-weight: 300;
`;

export const PlanDescription = styled.p`
  font-size: 18px;
  padding: 1rem;
`;

export const HoverWrapper = styled(Card)`
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 0 #e0e0e0;
  }
`;
