import React from 'react'
import '../css/sign-in.css'
import {
	headerTitle,
	headerDescription,
} from '../components/Partials/HomeStringVariables'

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
					href="/auth/facebook"
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
const LoginView = (props) => {
	return (
		<div className="sign-in-container">
			<div className="container">
				<div className="row">
					<div className="col-lg">
						<h1 className="bold"> {headerTitle} </h1>
						<h2 className="sign-in-description"> {headerDescription} </h2>
						<img
							className="sign-in-img"
							src="./images/coursePreview.png"
							alt="Placeholder"
						/>
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
export default LoginView
