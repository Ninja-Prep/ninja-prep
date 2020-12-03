import React from 'react'
import '../css/videos-and-articles.css'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'

const styles = {
	videoIcon: {
		fontSize: 80,
		color: '#1da09c',
	},
	chromeReaderIcon: {
		fontSize: 80,
		color: '#259af3',
	},
}

function VideosAndArticles() {
	return (
		<div className="videos-and-articles-container">
			<div className="container">
				<div className="row my-5 py-5">
					<div className="col-lg my-5 text-center ">
						<OndemandVideoIcon
							className="video-icon"
							style={styles.videoIcon}
						/>
						<div className="w-50 mx-auto">
							<h1 className="video-title">Step-by-step Video Explanations</h1>

							<p>
								Learning from textbooks isn't meant to be easy which is why each
								of our questions are accompanied with a video to maximize your
								learning experience.
							</p>
						</div>
					</div>
					<div className="col-lg my-5 text-center">
						<ChromeReaderModeIcon style={styles.chromeReaderIcon} />
						<div className="w-50 mx-auto">
							<h1 className="chrome-title">Insightful Community Articles</h1>

							<p>
								We provide articles written from the community on the most
								important and complex topics as an additional resource!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideosAndArticles
export { default as VideosAndArticles } from './VideosAndArticles'
