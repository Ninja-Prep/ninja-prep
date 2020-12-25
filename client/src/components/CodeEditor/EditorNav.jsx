import { useDispatch } from 'react-redux'
import { changeTheme, changeMode } from '../../actions'
import React, { Fragment } from 'react'
import Select from 'react-select'
import { themeOptions, modeOptions } from './EditorLanguages'

function EditorNav() {
    const dispatch = useDispatch()
    return (
        <Fragment>
            <div className="row w-50 ml-auto">
                <div className="col-3 col-md-4 ml-auto">
                    <Select
                        placeholder="Theme"
                        options={themeOptions}
                        onChange={(e) => dispatch(changeTheme(e.value))}
                    />
                </div>
                <div className="col-3 col-md-4">
                    <Select
                        placeholder="Language"
                        options={modeOptions}
                        onChange={(e) => dispatch(changeMode(e.value))}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default EditorNav
