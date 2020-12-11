import React from 'react'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Button } from 'react-bootstrap'
import './header.css'

const HeaderTablet = () => (
	<div className="py-5 text-center header-bg">
		<div className="py-3 px-5 ">
			<img
				className="w-auto h-20"
				src="/images/NinjaPrep-Logo.png"
				alt="logo"
			/>
			<h1 className="display-4 px-5 font-weight-bold">
				Enhance your skills here
			</h1>
			<span className="lead m-auto d-block">
				A place to help you build a strong foundation in data structures and
			</span>
			<span className="lead m-auto d-block">
				algorithms and prepare for technical interviews, all in one platform.
			</span>
			<Link to="/login">
				<Button
					variant="gradient"
					className=" mt-2 mt-5 px-4 font-weight-bold btn-lg"
				>
					Start Learning <NavigateNextIcon className="start-learning-icon" />
				</Button>
			</Link>
		</div>
	</div>
)

export default HeaderTablet
export { default as HeaderTablet } from './HeaderTablet'
