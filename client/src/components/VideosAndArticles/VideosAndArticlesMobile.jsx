import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './videos-and-articles.css'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'
import {
    ARTICLE_HEADER,
    ARTICLE_DESCRIPTION,
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

const VideosAndArticlesMobile = () => (
    <div className="text-center px-5 py-5  rainbow-bg">
        <Row className="mt-5 p-0 mx-auto container">
            <Col className="p-0 py-3 col-12">
                <OndemandVideoIcon style={styles.videoIcon} />
                <h1 className="font-weight-bold pt-2  pb-2 video-text display-5">
                    {STEP_BY_STEP}
                </h1>
                <p className="lead text-secondary">{VIDEO_DESCRIPTION}</p>
            </Col>
            <Col className="pt-5 py-3 col-12">
                <ChromeReaderModeIcon style={styles.chromeReaderIcon} />
                <h1 className="font-weight-bold pt-2  pb-2 article-text display-5">
                    {ARTICLE_HEADER}
                </h1>
                <p className="lead text-secondary">{ARTICLE_DESCRIPTION}</p>
            </Col>
        </Row>
    </div>
)

export default VideosAndArticlesMobile
export { default as VideosAndArticlesMobile } from './VideosAndArticlesMobile'
