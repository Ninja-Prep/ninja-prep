import React from 'react'
import '../css/videos-and-articles.css'
import Grid from '@material-ui/core/Grid'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'

function VideosAndArticles() {
	return (
		<div className="background-container">
			<img src="./images/Rainbow-Background.png" alt="" />
			<div className="landing-page-container videos-and-articles-container">
				<Grid container>
					<Grid item xs={12} sm={6}>
						<OndemandVideoIcon style={{ fontSize: 80, color: '#1da09c' }} />
						<h1 className="landing-page-title video-title">
							Step-by-step Video Explanations
						</h1>

						<p className="landing-page-description">
							Learning from textbooks isn't meant to be easy which is why each
							of our questions are accompanied with a video to maximize your
							learning experience.
						</p>
					</Grid>
					<Grid item xs={12} sm={6}>
						<ChromeReaderModeIcon style={{ fontSize: 80, color: '#259af3' }} />
						<h1 className="landing-page-title article-title">
							Insightful Community Articles
						</h1>

						<p className="landing-page-description">
							We provide articles written from the community on the most
							important and complex topics as an additional resource!
						</p>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default VideosAndArticles
export { default as VideosAndArticles } from './VideosAndArticles'
