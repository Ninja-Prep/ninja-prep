import React from 'react'
import FooterBarComponent from '../Partials/FooterBar/FooterBarComponent'
export const FooterLayout = ({ children }) => (
    <div>
        {children}
        <FooterBarComponent />
    </div>
)
