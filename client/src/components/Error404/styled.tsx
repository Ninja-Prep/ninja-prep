import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 16px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const HomeButton = styled.button.attrs(() => ({
  className: 'mt-5 btn-primary btn',
}))``;

export const ErrorHeading = styled.h1.attrs(() => ({
  className: 'display-1 mt-5',
}))`
  text-align: center;
`;

export const TextDiv = styled.div.attrs(() => ({
  className: 'mt-3',
}))`
  text-align: center;
`;
