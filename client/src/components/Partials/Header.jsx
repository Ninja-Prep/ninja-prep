import React from 'react'

import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 30,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		fontWeight: '700',
		fontFamily: 'Roboto',
		fontSize: '1.4em',
		textTransform: 'none',
	},
})

function Header() {
	return (
		<div className="py-3 mt-5 text-center">
			<img
				className="w-auto h-25"
				src="/images/NinjaPrep-Logo.png"
				alt="/images/NinjaPrep-Logo.png"
			/>
			<h1 className="display-3">Enhance your skills here</h1>

			<p className="lead">
				A place to help you build a strong foundation in data structures and
				algorithms and prepare for technical interviews, all in one platform.
			</p>
			<Link to="/login">
				<Button className={[useStyles().root, 'mt-2 mt-5 px-4']}>
					<div className="py-1 px-2"> Start Learning </div>
					<NavigateNextIcon className="start-learning-icon" />
				</Button>
			</Link>
		</div>
	)
}

export default Header
export { default as Header } from './Header'
