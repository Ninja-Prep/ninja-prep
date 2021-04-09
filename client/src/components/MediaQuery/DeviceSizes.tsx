/*
    Wrapper to handle which component to render based on user screen size
    Fall back to return Empty Fragment if component does not exist for screen size
*/

import { useMediaQuery } from 'react-responsive'
import React, { Fragment } from 'react'

type Props = {
    children: React.ReactNode
}

export const Desktop = ({ children }: Props) => {
    const isDesktop: boolean = useMediaQuery({ minWidth: 992 })

    if (isDesktop) {
        if (children != null) return children
        return <Fragment />
    }
    return <Fragment />
}

export const Tablet = ({ children }: Props) => {
    const isTablet: boolean = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    if (isTablet) {
        if (children != null) return children
        return <Fragment />
    }
    return <Fragment />
}

export const Mobile = ({ children }: Props) => {
    const isMobile: boolean = useMediaQuery({ maxWidth: 767 })
    if (isMobile) {
        if (children != null) return children
        return <Fragment />
    }
    return <Fragment />
}

export const Default = ({ children }: Props) => {
    const isNotMobile: boolean = useMediaQuery({ minWidth: 768 })
    if (isNotMobile) {
        if (children != null) return children
        return <Fragment />
    }
    return <Fragment />
}
