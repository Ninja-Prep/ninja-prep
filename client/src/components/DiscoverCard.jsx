import React from 'react'
import '../css/discover.css'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const DiscoverCard = (props) => {
	return (
		<div className="card ">
			<img
				className="card-img-top"
				src={props.discoverCardImgPath}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h2 className="card-title">{props.discoverCardTitle}</h2>
				<p className="card-text subtitle">{props.discoverCardSubtitle}</p>
			</div>
		</div>
	)
}

export default DiscoverCard
export { default as DiscoverCard } from './DiscoverCard'
