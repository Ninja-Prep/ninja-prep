import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import SettingsIcon from '@material-ui/icons/Settings'
import InfoIcon from '@material-ui/icons/Info'

import { Modal, Button, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap'

//ThemeOptions
import { useDispatch } from 'react-redux'
import { changeTheme, changeMode } from '../../actions'
import Select from 'react-select'
import { themeOptions, modeOptions } from './CodeEditorLanguages'

function CodeEditorShortcuts() {
    //For Shortcuts Icon
    const [showShortcuts, setShowShortcuts] = useState(false)
    const handleShortcutsClose = () => setShowShortcuts(false)
    const handleShortcutsShow = () => setShowShortcuts(true)

    //For Setting Icon
    const [showSetting, setShowSetting] = useState(false)
    const handleSettingClose = () => setShowSetting(false)
    const handleSettingShow = () => setShowSetting(true)

    //For ThemeOptions
    const dispatch = useDispatch()
    return (
        <div>
            <IconButton onClick={handleShortcutsShow} className="text-secondary">
                <InfoIcon />
            </IconButton>

            <Modal show={showShortcuts} onHide={handleShortcutsClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Code Editor Shortcuts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <p>Undo</p>
                            <p>Redo</p>
                        </Col>
                        <Col>
                            <p>CTRL + Z</p>
                            <p>CTRL + Y</p>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            {/* <IconButton onClick={handleSettingShow}>
                <SettingsIcon />
            </IconButton>

            <Modal show={showSetting} onHide={handleSettingClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Code Editor Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <p>Theme</p>
                            <p>Try different styles and syntax highlighting.</p>
                        </Col>
                        <Col>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={'Theme'}
                                onSelect={(e) => dispatch(changeTheme(e))}
                            >
                                {themeOptions.map((theme) => (
                                    <Dropdown.Item eventKey={theme.value}> {theme.label} </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal> */}

            <IconButton className="text-secondary">
                <FullscreenIcon />
            </IconButton>
        </div>
    )
}

export default CodeEditorShortcuts
export { default as CodeEditorShortcuts } from './CodeEditorShortcuts'
