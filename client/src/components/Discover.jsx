import React from 'react'
import '../css/discover.css'

const Discover = (props) => {
	return (
		<div className="discover">
			<div className="discover-title">
				<h1 className="bold">Discover New Skills</h1>
			</div>

			<div className="discover-section row">
				<div className="col-sm discover-filter-container">
					<div className="discover-filter">
						<img
							className="discover-filter-img"
							src="./images/discover/all.png"
							logo="all-categories"
						/>
						<p className="discover-filter-text bold subtitle">All Categories</p>
					</div>
					<div className="discover-filter">
						<img
							className="discover-filter-img"
							src="./images/discover/array.png"
							logo="all-categories"
						/>
						<p className="discover-filter-text bold subtitle">Array & String</p>
					</div>
					<div className="discover-filter">
						<img
							className="discover-filter-img"
							src="./images/discover/hash.png"
							logo="all-categories"
						/>
						<p className="discover-filter-text bold subtitle">Hashing</p>
					</div>
					<div className="discover-filter">
						<img
							className="discover-filter-img"
							src="./images/discover/algorithm.png"
							logo="all-categories"
						/>
						<p className="discover-filter-text bold subtitle">
							Greedy Algorithms
						</p>
					</div>
					<div className="discover-filter">
						<img
							className="discover-filter-img"
							src="./images/discover/tree.png"
							logo="all-categories"
						/>
						<p className="discover-filter-text bold subtitle">Trees & Graphs</p>
					</div>
				</div>

				<div className="row  discover-content-container">
					<div className="discover-content ">
						<div className="discover-card card">
							<img className="card-img-top" src="..." alt="Course image" />
							<div className="card-body">
								<h2 className="card-title bold">
									The Basics of Array & String
								</h2>
								<p className="card-text subtitle">Array & String</p>
							</div>
						</div>
					</div>

					<div className="discover-content ">
						<div className="discover-card card">
							<img className="card-img-top" src="..." alt="Course image" />
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
							<img className="card-img-top" src="..." alt="Course image" />
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
							<img className="card-img-top" src="..." alt="Course image" />
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
