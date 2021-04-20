import React from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
import { css } from '@emotion/core'

const spinnerCss = css`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -75px;
    margin-top: -150px;
`
const AsyncSpinner = () => {
    return (
        <div>
            <MoonLoader css={spinnerCss} />
        </div>
    )
}

export default AsyncSpinner
