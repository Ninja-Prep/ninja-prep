import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { EditorConfiguration } from 'codemirror'
import CodeEditorUserSettings from './UserSettings/CodeEditorUserSettings'
import './CodeMirror.css'
interface Props {
    textValue: string
    editorConfig: EditorConfiguration
    textHandler: (value: string) => void
}

const CodeMirrorWrapperComponent = (props: Props) => {
    return (
        <div className="Outer-flexBox-Wrapper">
            <div className="Settings-Area-Flex ">
                <CodeEditorUserSettings />
            </div>
            <div className="Middle-flexbox-Wrapper">
                <div className="Inner-flexbox-Wrapper">
                    <CodeMirror
                        value={props.textValue}
                        options={props.editorConfig}
                        onBeforeChange={(editor, data, value) => {
                            props.textHandler(value)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CodeMirrorWrapperComponent
