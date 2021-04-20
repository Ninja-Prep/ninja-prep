import React, { useState, useEffect } from 'react'
import NavigationBarDesktop from './NavigationBarDesktop'
import NavigationBarTablet from './NavigationBarTablet'
import NavigationBarMobile from './NavigationBarMobile'
import { Desktop, Tablet, Mobile } from '../../MediaQuery/DeviceSizes'
import { default as _ } from 'lodash'
import axios, { AxiosResponse } from 'axios'

export type AuthUser = {
    profile_picture: string
}

export interface NavBarProps {
    user?: AuthUser
}

function NavigationBarComponent() {
    const [user, setUser] = useState<AuthUser>()

    useEffect(() => {
        axios.get<AuthUser>('/auth/getUser').then((authUser: AxiosResponse<AuthUser>) => {
            // _.data returns an empty string instead of undefined if no user
            if (!_.isEmpty(authUser.data)) {
                setUser(authUser.data)
            }
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
