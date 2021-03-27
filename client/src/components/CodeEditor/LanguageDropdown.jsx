import { useDispatch } from 'react-redux'
import { changeTheme, changeMode } from '../../actions'
import React, { Fragment } from 'react'
import Select from 'react-select'
import { themeOptions, modeOptions } from './CodeEditorLanguages'
import { DropdownButton, Dropdown } from 'react-bootstrap'

function LanguageDropdown() {
    const dispatch = useDispatch()

    const handleSelect = (e) => console.log(e)

    return (
        <DropdownButton
            variant="outline-light"
            id="dropdown-basic-button"
            title={'Language '}
            onSelect={(e) => dispatch(changeMode(e))}
            className="ml-2"
        >
            {modeOptions.map((option) => (
                <Dropdown.Item eventKey={option.value}> {option.label} </Dropdown.Item>
            ))}
        </DropdownButton>
    )
}

export default LanguageDropdown
export { default as LanguageDropdown } from './LanguageDropdown'
