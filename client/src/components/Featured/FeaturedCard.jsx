import React from 'react'
import './featured.css'

const FeaturedCard = (props) => {
    return (
        <div className="card ">
            <img className="card-img-top" src={props.discoverCardImgPath} alt="Card cap" />
            <div className="card-body">
                <p className="card-title lead text-dark">{props.discoverCardTitle}</p>
                {/* <p className="card-text subtitle">{props.discoverCardSubtitle}</p> */}
            </div>
        </div>
    )
}

export default FeaturedCard
export { default as FeaturedCard } from './FeaturedCard'
