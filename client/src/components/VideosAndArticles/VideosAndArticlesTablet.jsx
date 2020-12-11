import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './videos-and-articles.css'
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

const VideosAndArticlesTablet = () => (
	<div className="text-center  py-5  rainbow-bg">
		<Row className="mt-5 p-0 mx-auto container">
			<Col className="pl-0 pr-4 py-3 col-6">
				<OndemandVideoIcon style={styles.videoIcon} />
				<h1 className="font-weight-bold pt-2  pb-2 video-text display-5">
					Step-by-step Video Explanations
				</h1>
				<p className="lead text-secondary">
					Learning from textbooks isn't meant to be easy which is why each of
					our questions are accompanied with a video to maximize your learning
					experience.
				</p>
			</Col>
			<Col className="pr-0 pl-4 py-3 col-6 ">
				<ChromeReaderModeIcon style={styles.chromeReaderIcon} />
				<h1 className="font-weight-bold pt-2  pb-2 article-text display-5">
					Insightful Community Articles
				</h1>
				<p className="lead text-secondary">
					We provide articles written from the community on the most important
					and complex topics as an additional resource!
				</p>
			</Col>
		</Row>
	</div>
)

export default VideosAndArticlesTablet
export { default as VideosAndArticlesTablet } from './VideosAndArticlesTablet'
