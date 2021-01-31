import React, { useState, useEffect } from 'react'
import NavigationBarDesktop from './NavigationBarDesktop'
import NavigationBarTablet from './NavigationBarTablet'
import NavigationBarMobile from './NavigationBarMobile'
import { Desktop, Tablet, Mobile } from '../../MediaQuery/DeviceSizes'
import axios from 'axios'

function NavigationBarComponent() {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('/auth/getUser').then((authUser) => {
            setUser(authUser.data)
        })
    }, [])

    return (
        <div>
            <Desktop>
                <NavigationBarDesktop user={user} />
            </Desktop>
            <Tablet>
                <NavigationBarTablet user={user} />
            </Tablet>
            <Mobile>
                <NavigationBarMobile user={user} />
            </Mobile>
        </div>
    )
}

export default NavigationBarComponent
export { default as NavigationBarComponent } from './NavigationBarComponent'
