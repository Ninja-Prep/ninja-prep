import React from 'react'
import '../css/solve.css'
import { SolveCard } from './SolveCard'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AppsIcon from '@material-ui/icons/Apps'
import ViewArrayIcon from '@material-ui/icons/ViewArray'
import LockIcon from '@material-ui/icons/Lock'
import CategoryIcon from '@material-ui/icons/Category'
import AccountTreeIcon from '@material-ui/icons/AccountTree'

const Solve = (props) => {
	return (
		<div className="solve">
			<div className="solve-title">
				<h1 className="bold">Solve These Challenges</h1>
				<PlayArrowIcon className="solve-play" />
			</div>

			<div className="discover-section row">
				<div className="col-sm discover-filter-container">
					<div className="discover-filter">
						<AppsIcon className="solve-filter-img" />
						<p className="solve-filter-text ">All Categories</p>
					</div>
					<div className="discover-filter">
						<ViewArrayIcon className="solve-filter-img" />
						<p className="solve-filter-text">Array & String</p>
					</div>
					<div className="discover-filter">
						<LockIcon className="solve-filter-img" />
						<p className="solve-filter-text ">Hashing</p>
					</div>
					<div className="discover-filter">
						<CategoryIcon className="solve-filter-img" />
						<p className="solve-filter-text ">Greedy Algorithms</p>
					</div>
					<div className="discover-filter">
						<AccountTreeIcon className="solve-filter-img" />
						<p className="solve-filter-text ">Trees & Graphs</p>
					</div>
				</div>

				<div className="row challenge-content-container">
					<div className="col-sm easy">
						<p>Easy</p>
						<SolveCard />
						<SolveCard />
					</div>
					<div className="col-sm medium">
						<p>Medium</p>
						<SolveCard />
						<SolveCard />
					</div>
					<div className="col-sm hard">
						<p>Hard</p>
						<SolveCard />
						<SolveCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Solve
export { default as Solve } from './Solve'
