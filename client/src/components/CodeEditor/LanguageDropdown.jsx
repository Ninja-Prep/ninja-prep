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
        // <div>
        //     <div className="row p-0 m-0 position-absolute">
        //         <div className="col-3 p-0 m-0">
        //             <Select
        //                 placeholder="Language"
        //                 options={modeOptions}
        //                 onChange={(e) => dispatch(changeMode(e.value))}
        //             />
        //         </div>
        //     </div>
        // </div>
        <DropdownButton id="dropdown-basic-button" title={'Language'} onSelect={(e) => dispatch(changeMode(e))}>
            {modeOptions.map((option) => (
                <Dropdown.Item eventKey={option.value}> {option.label} </Dropdown.Item>
            ))}
        </DropdownButton>
    )
}

export default LanguageDropdown
export { default as LanguageDropdown } from './LanguageDropdown'
