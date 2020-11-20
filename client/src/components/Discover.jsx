import React from 'react'
import '../css/discover.css'
import DiscoverCard from './DiscoverCard'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const Discover = (props) => {
	const discoverCards = [
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
		<div className="discover-container">
			<div className="discover-title">
				<h1 className="bold">Discover New Skills</h1>
				<PlayArrowIcon className="discover-play" />
			</div>
			<div className="card-deck ">
				{discoverCards.map((card, i) => (
					<DiscoverCard key={i} {...card} />
				))}
			</div>
		</div>
	)
}

export default Discover
export { default as Discover } from './Discover'
