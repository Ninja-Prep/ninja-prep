import {css} from 'styled-components';

export * from './Spacing';
export * from './Colors';
export * from './Fonts';
export * from './Buttons';
export * from './Borders';

export const TRIMMED_ELLIPSES = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const STANDARDIZED_PAGE_PADDING = css`
  padding: 0 16%;
`;

export const FULL_PAGE_WIDTH = css`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
`;
