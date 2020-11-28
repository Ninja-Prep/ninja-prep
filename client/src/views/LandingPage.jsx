import React from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Discover } from '../components/Discover'
import { Footer } from '../components/Footer'
import '../css/LandingPage.css'

function LandingPage() {
	return (
		<div>
			<Navbar />
			<Header />
			<Discover />
			<Footer />
		</div>
	)
}

export default LandingPage
export { default as LandingPage } from './LandingPage'
