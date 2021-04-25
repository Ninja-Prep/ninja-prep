/*
404 Not Found pages when user goes to route that does not exist
*/

import React from 'react'
import Error404Desktop from './Error404Desktop'
import Error404Tablet from './Error404Tablet'
import Error404Mobile from './Error404Mobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const Error404Component = () => (
    <div>
        <Desktop>
            <Error404Desktop />
        </Desktop>
        <Tablet>
            <Error404Tablet />
        </Tablet>
        <Mobile>
            <Error404Mobile />
        </Mobile>
    </div>
)

export default Error404Component
