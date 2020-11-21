import React from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Discover } from '../components/Discover'
import { HowItWorks } from '../components/HowItWorks'

import { Footer } from '../components/Footer'

function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<Discover />
			<HowItWorks />
			<Footer />
		</div>
	)
}

export default Home
export { default as Home } from './Home'
