import React from 'react'
import '../css/header.css'

const Header = (props) => {
	return (
		<div className="header">
			<div className="header-title">
				<h1 className="bold">A place to gain new coding skills</h1>
			</div>
			<div className="header-description">
				<h2>
					NinjaPrep will help you build a strong and solid foundation on data
					structures and algorithms to prepare you for technical interviews.
				</h2>
			</div>
			<button className="get-started">
				<p className="bold">Get started</p>
			</button>
		</div>
	)
}

export default Header
export { default as Header } from './Header'
