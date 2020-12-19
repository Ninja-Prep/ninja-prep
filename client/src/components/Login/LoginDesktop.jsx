import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { logInTitle } from '../Partials/HomeStringVariables'

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

const LoginDesktop = () => (
	<div className="py-auto px-5">
		<Row className="py-5 px-0 mx-auto container">
			<Col className="pl-0 pr-5">
				<img
					className="pt-3 pr-5"
					src="./images/coursePreview.png"
					alt="Placeholder"
				/>
				<h2 className="display-5 font-weight-bold pb-2 pt-2 pr-3">
					{logInTitle}
				</h2>
			</Col>
			<Col className="px-0 col-5 my-auto">
				<div>
					<div className="py-5">
						<h3 className="font-weight-bold pb-4">Get Started for Free</h3>
						<div>{SocialMediaButtons('mx-auto')}</div>
					</div>
				</div>
			</Col>
		</Row>
	</div>
)

export default LoginDesktop
export { default as LoginDesktop } from './LoginDesktop'
