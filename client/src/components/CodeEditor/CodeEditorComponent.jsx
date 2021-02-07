import React from 'react'
import CodeEditorDesktop from './CodeEditorDesktop'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const CodeEditorComponent = () => (
    <div>
        <Desktop>
            <CodeEditorDesktop />
        </Desktop>
    </div>
)

export default CodeEditorComponent
export { default as CodeEditorComponent } from './CodeEditorComponent'
