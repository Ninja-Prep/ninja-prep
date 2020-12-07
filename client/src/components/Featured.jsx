import React from 'react'
import '../css/featured.css'
import FeaturedCard from './FeaturedCard'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

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
		<div className="featured-container">
			<div className="featured-title">
				<h1 className="bold">Discover New Skills</h1>
				<PlayArrowIcon className="featured-play" />
			</div>
			<div className="card-deck ">
				{FeaturedList.map((card, i) => (
					<FeaturedCard key={i} {...card} />
				))}
			</div>
		</div>
	)
}

export default Featured
export { default as Featured } from './Featured'
