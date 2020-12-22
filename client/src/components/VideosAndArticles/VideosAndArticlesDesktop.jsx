import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './videos-and-articles.css'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'
import {
	ARTICLE_DESCRIPTION,
	ARTICLE_HEADER,
	STEP_BY_STEP,
	VIDEO_DESCRIPTION,
} from './VideosAndArticlesStringIds'

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

const VideosAndArticlesDesktop = () => (
	<div className="text-center  py-5  rainbow-bg">
		<Row className="mt-5 p-0 mx-auto container">
			<Col className="pr-5 pl-0 py-5 col-6">
				<OndemandVideoIcon style={styles.videoIcon} />
				<h1 className="font-weight-bold pt-3 pb-2 w-75 mx-auto video-text display-5">
					{STEP_BY_STEP}
				</h1>
				<p className="lead text-secondary w-75 m-auto">{VIDEO_DESCRIPTION}</p>
			</Col>
			<Col className="pl-5 pr-0 py-5 col-6">
				<ChromeReaderModeIcon style={styles.chromeReaderIcon} />
				<h1 className="font-weight-bold pt-3 pb-2 w-75 mx-auto article-text display-5">
					{ARTICLE_HEADER}
				</h1>
				<p className="lead text-secondary w-75 m-auto">{ARTICLE_DESCRIPTION}</p>
			</Col>
		</Row>
	</div>
)

export default VideosAndArticlesDesktop
export { default as VideosAndArticlesDesktop } from './VideosAndArticlesDesktop'
