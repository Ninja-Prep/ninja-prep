import { useDispatch } from 'react-redux'
import { changeMode } from '../../../actions'
import React from 'react'
import { modeOptions } from './CodeEditorLanguages'
import { connect } from 'react-redux'
import { DropdownButton, Dropdown } from 'react-bootstrap'

function LanguageDropdown(props) {
    const dispatch = useDispatch()
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
    )
}

const mapStateToProps = (state) => ({
    language: state.editor.language
})

export default connect(mapStateToProps)(LanguageDropdown)
