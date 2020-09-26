import React from 'react'
import '../css/header.css'

const Header = (props) => {
	return (
		<div className="header">
			<div className="header-content">
				<h1>A place to develop new coding skills</h1>
				<h2>
					NinjaPrep will help you build a strong and solid foundation on data
					structures and algorithms to prepare you for technical interviews.
				</h2>

				<p className="bold">Get started</p>
			</div>
		</div>
	)
}

export default Header
export { default as Header } from './Header'
