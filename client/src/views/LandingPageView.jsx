import React from 'react'
import { Header } from '../components/Partials/Header'
import { Discover } from '../components/Discover/Discover'
import { VideosAndArticles } from '../components/VideosAndArticles/VideosAndArticles'
import { CodeAlong } from '../components/CodeAlong/CodeAlong'
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
