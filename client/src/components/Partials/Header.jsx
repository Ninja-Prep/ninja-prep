import React from 'react'
import './header.css'

import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import styles from '../HeaderCssComponent'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

function Header() {
	return (
		<div className="header-container">
			<img
				className="header-logo"
				src="/images/NinjaPrep-Logo.png"
				alt="/images/NinjaPrep-Logo.png"
			/>
			<h1 className="landing-page-title">Enhance your skills here</h1>

			<p className="header-description landing-page-description">
				A place to help you build a strong foundation in data structures and
				algorithms and prepare for technical interviews, all in one platform.
			</p>
			<Link to="/login">
				<Button className={[styles().root, 'mt-2 mt-5 px-4']}>
					<div className="py-1 px-2"> Start Learning </div>
					<NavigateNextIcon className="start-learning-icon" />
				</Button>
			</Link>
		</div>
	)
}

export default Header
export { default as Header } from './Header'
