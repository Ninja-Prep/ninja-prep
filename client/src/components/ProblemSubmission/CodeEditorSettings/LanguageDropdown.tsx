import React from 'react';

import {DropdownButton, Dropdown} from 'react-bootstrap';
import {LabelValuePair} from 'utils/types/userSettings';

interface Props {
  onSelect: (event: string | null) => void;
  language: string;
  modeOptions: LabelValuePair[];
}

function LanguageDropdown(props: Props): JSX.Element {
  return (
    <DropdownButton variant="outline-dark" title={props.language} onSelect={props.onSelect}>
      {props.modeOptions.map((option) => (
        <Dropdown.Item eventKey={option.value}> {option.label} </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default LanguageDropdown;
