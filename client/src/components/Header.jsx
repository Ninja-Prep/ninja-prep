import React from 'react'
import '../css/header.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

function Header() {
	const useStyles = makeStyles({
		root: {
			background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
			border: 0,
			borderRadius: 30,
			boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
			color: 'white',
			marginTop: '2%',
			padding: '0.5% 1.5%',
			fontWeight: '700',
			fontFamily: 'Roboto',
			fontSize: '1.4em',
			textTransform: 'none',
		},
	})
	const classes = useStyles()
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
			<Button className={classes.root}>
				Start Learning <NavigateNextIcon className="start-learning-icon" />
			</Button>
		</div>
	)
}

export default Header
export { default as Header } from './Header'
