import React from 'react'
import FooterBarComponent from '../Partials/FooterBar/FooterBarComponent'
import NavigationBarComponent from '../Partials/NavigationBar/NavigationBarComponent'
import './layouts.css'

export const FooterLayout = ({ children }) => (
    <div>
        {children}
        <FooterBarComponent />
    </div>
)

export const HeaderandFooterLayout = ({ children }) => (
    <div className="Header-Padding">
        {children}
        <NavigationBarComponent />
        <FooterBarComponent />
    </div>
)
