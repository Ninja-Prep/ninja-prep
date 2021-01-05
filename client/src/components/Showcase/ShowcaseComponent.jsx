import React from 'react'
import { ShowcaseDesktop } from './ShowcaseDesktop'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const ShowcaseComponent = () => (
    <div>
        <Desktop>
            <ShowcaseDesktop />
        </Desktop>
        <Tablet></Tablet>
        <Mobile></Mobile>
    </div>
)

export default ShowcaseComponent
export { default as ShowcaseComponent } from './ShowcaseComponent'
