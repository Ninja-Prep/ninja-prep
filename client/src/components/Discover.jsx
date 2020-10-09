import React from 'react'
import '../css/discover.css'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AppsIcon from '@material-ui/icons/Apps'
import ViewArrayIcon from '@material-ui/icons/ViewArray'
import LockIcon from '@material-ui/icons/Lock'
import CategoryIcon from '@material-ui/icons/Category'
import AccountTreeIcon from '@material-ui/icons/AccountTree'

const Discover = (props) => {
	return (
		<div className="discover">
			<div className="discover-title">
				<h1 className="bold">Discover New Skills</h1>
				<PlayArrowIcon className="discover-play"/>
			</div>

			<div className="discover-section row">
				<div className="col-sm discover-filter-container">
					<div className="discover-filter">
						<AppsIcon className="discover-filter-img" />
						<p className="discover-filter-text subtitle">All Categories</p>
					</div>
					<div className="discover-filter">
						<ViewArrayIcon className="discover-filter-img" />
						<p className="discover-filter-text subtitle">Array & String</p>
					</div>
					<div className="discover-filter">
						<LockIcon className="discover-filter-img" />
						<p className="discover-filter-text subtitle">Hashing</p>
					</div>
					<div className="discover-filter">
						<CategoryIcon className="discover-filter-img" />
						<p className="discover-filter-text subtitle">Greedy Algorithms</p>
					</div>
					<div className="discover-filter">
						<AccountTreeIcon className="discover-filter-img" />
						<p className="discover-filter-text subtitle">Trees & Graphs</p>
					</div>
				</div>

				<div className="row  discover-content-container">
					<div className="discover-content ">
						<div className="discover-card mr-2 card">
							<img className="card-img-top" src="./images/discover1.png" alt="Course image" />
							<div className="card-body">
								<h2 className="card-title bold">
									The Basics of Array & String
								</h2>
								<p className="card-text subtitle">Array & String</p>
							</div>
						</div>
					</div>

					<div className="discover-content ">
						<div className="discover-card mr-2 card">
							<img className="card-img-top" src="./images/discover2.png" alt="Course image" />
							<div className="card-body">
								<h2 className="card-title bold">
									The Basics of Array & String
								</h2>
								<p className="card-text subtitle">Array & String</p>
							</div>
						</div>
					</div>

					<div className="discover-content">
						<div className="discover-card mr-2 card">
							<img className="card-img-top" src="./images/discover3.png" alt="Course image" />
							<div className="card-body">
								<h2 className="card-title bold">
									The Basics of Array & String
								</h2>
								<p className="card-text subtitle">Array & String</p>
							</div>
						</div>
					</div>

					<div className="discover-content">
						<div className="discover-card card">
							<img className="card-img-top" src="./images/discover4.png" alt="Course image" />
							<div className="card-body">
								<h2 className="card-title bold">
									The Basics of Array & String
								</h2>
								<p className="card-text subtitle">Array & String</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Discover
export { default as Discover } from './Discover'
