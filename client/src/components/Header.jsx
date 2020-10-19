import React from 'react'
import '../css/header.css'
import {
	headerTitle,
	headerDescription,
} from '../stringVariables/HomeStringVariables'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Header = (props) => {
	return (
		<div className="header-container">
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<h1 className="bold"> {headerTitle} </h1>
						<h2 className="header-description"> {headerDescription} </h2>
						<img className="header-img" src="./images/coursePreview.png" />
					</div>
					<div className="col-sm">
						<div className="card sign-in-form">
							<div className="card-body">
								<h2 className="bold sign-in-title">Get Started for Free</h2>
								<button
									type="button"
									className="btn btn-outline-dark login-btn"
								>
									<FacebookIcon
										className="login-icon"
										style={{ color: '#1976d2' }}
									/>
									<p>Log in with Facebook</p>
								</button>
								<button
									type="button"
									className="btn btn-outline-dark login-btn"
								>
									<GitHubIcon className="login-icon" />
									<p>Log in with GitHub</p>
								</button>
								<button
									type="button"
									className="btn btn-outline-dark login-btn"
								>
									<LinkedInIcon
										className="login-icon"
										style={{ color: '#1976d2' }}
									/>
									<p>Log in with LinkedIn</p>
								</button>
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
