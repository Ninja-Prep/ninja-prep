import React from 'react'
import { VideosAndArticlesDesktop } from './VideosAndArticlesDesktop'
import { VideosAndArticlesTablet } from './VideosAndArticlesTablet'
import { VideosAndArticlesMobile } from './VideosAndArticlesMobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const VideosAndArticlesComponent = () => (
    <div>
        <Desktop>
            <VideosAndArticlesDesktop />
        </Desktop>
        <Tablet>
            <VideosAndArticlesTablet />
        </Tablet>
        <Mobile>
            <VideosAndArticlesMobile />
        </Mobile>
    </div>
)

export default VideosAndArticlesComponent
export { default as VideosAndArticlesComponent } from './VideosAndArticlesComponent'
