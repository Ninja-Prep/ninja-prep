import React from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function Home() {
	return (
		<div>
			<Navbar />
			<Header />
			<Footer />
		</div>
	)
}

export default Home
export { default as Home } from './Home'
