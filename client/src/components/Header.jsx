import React from 'react'
import '../css/header.css'
import {
	headerTitle,
	headerDescription,
} from '../stringVariables/HomeStringVariables'

const SocialMediaButtons = (cssClass) => {
	return (
		<>
			<div className="d-flex justify-content-center">
				<a
					className={cssClass + ' fluid ui mb-3 red google button'}
					href="/auth/google"
				>
					<i className="google icon"></i>
					Google Login
				</a>
			</div>
			<div className="d-flex justify-content-center">
				<a
					className={cssClass + ' fluid ui mb-3 facebook button'}
					href="/auth/github"
				>
					<i className="facebook icon"></i>
					Facebook Login
				</a>
			</div>
			<div className="d-flex justify-content-center">
				<a
					className={cssClass + ' fluid ui mb-3 black button'}
					href="/auth/github"
				>
					<i className="github icon"></i>
					GitHub Login
				</a>
			</div>
		</>
	)
}

const Header = (props) => {
	return (
		<div className="header-container">
			<div className="container">
				<div className="row">
					<div className="col-lg">
						<h1 className="bold"> {headerTitle} </h1>
						<h2 className="header-description"> {headerDescription} </h2>
						<img className="header-img" src="./images/coursePreview.png" />
					</div>
					<div className="col-lg">
						<div className="card sign-in-form">
							<div className="card-body">
								<h2 className="bold sign-in-title">Get Started for Free</h2>
								<div className="card-body py-0">
									{/* Show smaller buttons for large screens */}
									{SocialMediaButtons('w-75 d-none d-lg-block')}
									{/* Show full buttons for small screens */}
									{SocialMediaButtons('d-lg-none')}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
export { default as Header } from './Header'
