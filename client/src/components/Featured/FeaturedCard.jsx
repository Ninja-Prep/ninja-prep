import React from 'react'
import './featured.css'

const FeaturedCard = (props) => {
    return (
        <div className="card ">
            <img className="card-img-top" src={props.discoverCardImgPath} alt="Card image cap" />
            <div className="card-body">
                <h2 className="card-title">{props.discoverCardTitle}</h2>
                <p className="card-text subtitle">{props.discoverCardSubtitle}</p>
            </div>
        </div>
    )
}

export default FeaturedCard
export { default as FeaturedCard } from './FeaturedCard'
