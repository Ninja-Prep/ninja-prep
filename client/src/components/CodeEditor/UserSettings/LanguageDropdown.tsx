import React from 'react';

import {DropdownButton, Dropdown} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {changeMode} from 'redux/actions';

import {modeOptions} from './CodeEditorLanguages';

interface Props {
  language: string;
}

/**
 *
 */
function LanguageDropdown(props: Props) {
  const dispatch = useDispatch();
  return (
    <DropdownButton
      variant="outline-dark"
      id="dropdown-basic-button"
      title={props.language}
      onSelect={(e) => dispatch(changeMode(e))}
      className="ml-2"
    >
      {modeOptions.map((option) => (
        <Dropdown.Item eventKey={option.value}> {option.label} </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

const mapStateToProps = (state: {editor: Props}) => ({
  language: state.editor.language,
});

export default connect(mapStateToProps)(LanguageDropdown);
