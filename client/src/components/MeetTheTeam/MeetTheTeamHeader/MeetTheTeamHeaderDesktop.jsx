import React from 'react'
import '../meettheteam.css'

function MeetTheTeamHeaderDesktop() {
    return (
        <div className="py-5 text-center header-bg">
            <img className="w-auto pb-4 pt-2" src="/images/NinjaPrep-Logo.png" alt="logo" />
            <h2 className="display-5 pb-2">
                Learn, practice, and apply in-demand skills with a NinjaPrep subscription.
            </h2>
            <span className="text-secondary lead m-auto d-block ">
                Access to guided and convenient features, all in one platform.
            </span>
        </div>
    )
}

export default MeetTheTeamHeaderDesktop
export { default as MeetTheTeamHeaderDesktop } from './MeetTheTeamHeaderDesktop'