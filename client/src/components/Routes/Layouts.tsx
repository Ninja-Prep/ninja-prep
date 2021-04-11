/*
Layouts for pageouts to include additional content
- Above
- Below
- In between
other components
*/

import React from 'react'
import FooterBarComponent from '../Partials/FooterBar/FooterBarComponent'
import NavigationBarComponent from '../Partials/NavigationBar/NavigationBarComponent'
import './Layouts.css'

interface Props {
    children: React.ReactNode
}

export const HeaderLayout = ({ children }: Props) => (
    <div className="Header-Padding">
        <NavigationBarComponent />
        {children}
    </div>
)

export const FooterLayout = ({ children }: Props) => (
    <div>
        {children}
        <FooterBarComponent />
    </div>
)

export const HeaderandFooterLayout = ({ children }: Props) => (
    <div className="Header-Padding">
        <NavigationBarComponent />
        {children}
        <FooterBarComponent />
    </div>
)
