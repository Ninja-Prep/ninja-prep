import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const CardHeader = styled.div.attrs((props: {backgroundColor: string}) => props)`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: 24px 48px;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 12px;
`;

export const PlanDescription = styled.p`
  font-size: 18px;
  padding: 12px;
  ${CoreUI.OPEN_SANS_REGULAR}
  color: ${CoreUI.BODY_TEXT_COLOR};
`;

export const Card = styled.div`
  padding: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 15px;
  &:hover {
    cursor: pointer;
  }
`;
