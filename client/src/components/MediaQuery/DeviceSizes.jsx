import { useMediaQuery } from 'react-responsive'
import React from 'react'

export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })

    if (isDesktop) {
        if (children != null) return children
        return <div></div>
    }
    return null
}
export const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    if (isTablet) {
        if (children != null) return children
        return <div></div>
    }
    return <div></div>
}
export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    if (isMobile) {
        if (children != null) return children
        return <div></div>
    }
    return null
}
export const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    if (isNotMobile) {
        if (children != null) return children
        return <div></div>
    }
    return null
}
