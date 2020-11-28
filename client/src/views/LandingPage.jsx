import React from 'react'
import { Header } from '../components/Header'
import { Discover } from '../components/Discover'
import { VideosAndArticles } from '../components/VideosAndArticles'
import { CodeAlong } from '../components/CodeAlong'
import '../css/LandingPage.css'

function LandingPage() {
	return (
		<div>
			<Header />
			<Discover />
			<VideosAndArticles />
			<CodeAlong />
		</div>
	)
}

export default LandingPage
export { default as LandingPage } from './LandingPage'
