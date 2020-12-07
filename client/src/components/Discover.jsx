import React from 'react'
import '../css/discover.css'
import Grid from '@material-ui/core/Grid'

function Discover() {
	return (
		<div className="landing-page-container discover-container">
			<Grid container justify="center" alignItems="center">
				<Grid item xs={12} sm={6}>
					<img
						className="explore-cards-img"
						src="./images/Explore-Cards.png"
						alt="Explore Cards"
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<h1 className="landing-page-title discover-title">Discover</h1>

					<p className="landing-page-description">
						Discover in-demand concepts and skills that are actually asked for
						by top companies. Choose from our wide selection of problems and
						dive deep!
					</p>
				</Grid>
			</Grid>
		</div>
	)
}

export default Discover
export { default as Discover } from './Discover'
