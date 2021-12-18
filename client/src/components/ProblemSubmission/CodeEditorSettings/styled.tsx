import styled from 'styled-components';
import * as CoreUI from 'uiLibrary/CoreUI';

export const Row = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
  background-color: ${CoreUI.BABY_BLUE_BACKGROUND};
`;

export const LanguageDropdownContainer = styled.div`
  .MuiSelect-select:focus {
    background-color: transparent;
  },
`;
