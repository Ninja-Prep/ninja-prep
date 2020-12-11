import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './sign-in.css'
import { logInTitle, logInDescription } from '../Partials/HomeStringVariables'

const SocialMediaButtons = (cssClass) => {
	return (
		<>
			<div className="lead">
				<a
					className={cssClass + ' fluid ui mb-4 py-3 red google button'}
					href="/auth/google"
				>
					<i className="google icon"></i>
					Google Login
				</a>
			</div>
			<div className="lead">
				<a
					className={cssClass + ' fluid ui mb-4 py-3 facebook button'}
					href="/auth/facebook"
				>
					<i className="facebook icon"></i>
					Facebook Login
				</a>
			</div>
			<div className="lead">
				<a
					className={cssClass + ' fluid ui py-3 black button'}
					href="/auth/github"
				>
					<i className="github icon"></i>
					GitHub Login
				</a>
			</div>
		</>
	)
}

const LoginMobile = () => (
	<div className="py-auto px-5 mx-5">
		<Row className="py-5 px-0 mx-auto container">
			<Col className="px-0 my-auto">
				<div>
					<div className="py-5">
						<h3 className="font-weight-bold pb-4">Learn to code with NinjaPrep</h3>
						<div>
							{SocialMediaButtons('mx-auto')}
						</div>
					</div>
				</div>
			</Col>
		</Row>
	</div>
)

export default LoginMobile
export { default as LoginMobile } from './LoginMobile'
