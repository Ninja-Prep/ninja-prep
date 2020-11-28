import React from 'react'
import { Header } from '../components/Header'
import { Discover } from '../components/Discover'
import { Footer } from '../components/Footer'
import '../css/LandingPage.css'

function LandingPage() {
	return (
		<div>
			<Header />
			<Discover />
			<Footer />
		</div>
	)
}

export default LandingPage
export { default as LandingPage } from './LandingPage'
