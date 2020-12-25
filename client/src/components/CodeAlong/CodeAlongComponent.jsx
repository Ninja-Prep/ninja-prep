import React from 'react'
import { CodeAlongDesktop } from './CodeAlongDesktop'
import { CodeAlongTablet } from './CodeAlongTablet'
import { CodeAlongMobile } from './CodeAlongMobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const CodeAlongComponent = () => (
    <div>
        <Desktop>
            <CodeAlongDesktop />
        </Desktop>
        <Tablet>
            <CodeAlongTablet />
        </Tablet>
        <Mobile>
            <CodeAlongMobile />
        </Mobile>
    </div>
)

export default CodeAlongComponent
export { default as CodeAlongComponent } from './CodeAlongComponent'
