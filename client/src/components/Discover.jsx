import React from 'react'
import '../css/discover.css'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const Discover = (props) => {
	return (
		<div className="discover-container">
			<div className="discover-title">
				<h1 className="bold">Discover New Skills</h1>
				<PlayArrowIcon className="discover-play" />
			</div>
			<div class="card-deck">
				<div class="card">
					<img
						class="card-img-top"
						src="./images/discover1.png"
						alt="Card image cap"
					/>
					<div class="card-body">
						<h2 class="card-title">Stacks</h2>
						<p class="card-text subtitle">Stacks</p>
					</div>
				</div>
				<div class="card">
					<img
						class="card-img-top"
						src="./images/discover2.png"
						alt="Card image cap"
					/>
					<div class="card-body">
						<h2 class="card-title">Queue</h2>
						<p class="card-text subtitle">Queue</p>
					</div>
				</div>
				<div class="card">
					<img
						class="card-img-top"
						src="./images/discover3.png"
						alt="Card image cap"
					/>
					<div class="card-body">
						<h2 class="card-title">Linked List</h2>
						<p class="card-text subtitle">Linked List</p>
					</div>
				</div>
				<div class="card">
					<img
						class="card-img-top"
						src="./images/discover4.png"
						alt="Card image cap"
					/>
					<div class="card-body">
						<h2 class="card-title">Linked List</h2>
						<p class="card-text subtitle">Linked List</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Discover
export { default as Discover } from './Discover'
