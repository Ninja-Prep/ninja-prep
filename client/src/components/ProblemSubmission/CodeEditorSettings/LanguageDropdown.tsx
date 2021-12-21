import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import {LabelValuePair} from 'utils/types/userSettings';
import {FormControl, Select, SelectChangeEvent} from '@mui/material';
import * as Styled from './styled';

interface Props {
  onSelect: (event: SelectChangeEvent) => void;
  language: string;
  modeOptions: LabelValuePair[];
}

function LanguageDropdown(props: Props): JSX.Element {
  return (
    <Styled.LanguageDropdownContainer>
      <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
        <Select
          displayEmpty
          onChange={props.onSelect}
          value={props.language}
          renderValue={(language) => {
            return language;
          }}
        >
          {props.modeOptions.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Styled.LanguageDropdownContainer>
  );
}

export default LanguageDropdown;
