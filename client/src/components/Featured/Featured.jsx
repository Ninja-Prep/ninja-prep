import React from 'react'
import './featured.css'
import FeaturedCard from './FeaturedCard'
import { DISCOVER_NEW_SKILLS } from './FeaturedStringIds'

const Featured = (props) => {
    const FeaturedList = [
        {
            discoverCardImgPath: './images/discover1.png',
            discoverCardTitle: 'Stacks 101',
            discoverCardSubtitle: 'Stacks',
        },
        {
            discoverCardImgPath: './images/discover2.png',
            discoverCardTitle: 'Queues 101',
            discoverCardSubtitle: 'Queues',
        },
        {
            discoverCardImgPath: './images/discover3.png',
            discoverCardTitle: 'Linked List 101',
            discoverCardSubtitle: 'Linked List',
        },
        {
            discoverCardImgPath: './images/discover4.png',
            discoverCardTitle: 'Remembering Binary',
            discoverCardSubtitle: 'Binary',
        },
    ]
    return (
        <div className="mx-5 px-5 pb-5 pt-5 mb-5">
            <div className="mx-5">
                <h2 className="font-weight-bold pb-4">{DISCOVER_NEW_SKILLS}</h2>

                <div className="card-deck ">
                    {FeaturedList.map((card, i) => (
                        <FeaturedCard key={i} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured
export { default as Featured } from './Featured'
