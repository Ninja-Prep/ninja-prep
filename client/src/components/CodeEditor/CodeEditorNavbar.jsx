import { useDispatch } from 'react-redux'
import { changeTheme, changeMode } from '../../actions'
import React, { Fragment } from 'react'
import Select from 'react-select'
import { themeOptions, modeOptions } from './CodeEditorLanguages'

function CodeEditorNavbar() {
    const dispatch = useDispatch()
    return (
        <div className="row p-0 m-0">
            <div className="col-3 p-0 m-0">
                <Select placeholder="Language" options={modeOptions} onChange={(e) => dispatch(changeMode(e.value))} />
            </div>
            <div className="col-3 p-0 m-0">
                <Select placeholder="Theme" options={themeOptions} onChange={(e) => dispatch(changeTheme(e.value))} />
            </div>
        </div>
    )
}

export default CodeEditorNavbar
