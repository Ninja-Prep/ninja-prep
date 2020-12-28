import React from 'react'

import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
import CodeEditorComponent from './CodeEditorComponent'
import 'react-reflex/styles.css'

class ReflexDemo extends React.Component {
    render() {
        return (
            <ReflexContainer orientation="vertical" className="pt-3">
                <ReflexElement className="left-pane">
                    <div className="pane-content">Left Pane (resizeable)</div>
                </ReflexElement>

                <ReflexSplitter />

                <ReflexElement className="right-pane">
                    <div className="pane-content">
                        <CodeEditorComponent />
                    </div>
                </ReflexElement>
            </ReflexContainer>
        )
    }
}

export default ReflexDemo
