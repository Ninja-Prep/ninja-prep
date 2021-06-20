import {Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

export const IconWrapper = styled(Col)`
  background-color: #f5f5f5;
  max-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuestionTitle = styled(Col)`
  padding: 22px;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CardRow = styled(Row)`
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 20px 0px;
`;
