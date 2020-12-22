import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {
	FACEBOOK_LOGIN,
	GITHUB_LOGIN,
	GOOGLE_LOGIN,
	LEARN_TO_CODE_MOBILE,
} from './LoginStringIds'

const SocialMediaButtons = (cssClass) => {
	return (
		<>
			<div className="lead">
				<a className={cssClass + ' red google button'} href="/auth/google">
					<i className="google icon"></i>
					{GOOGLE_LOGIN}
				</a>
			</div>
			<div className="lead">
				<a className={cssClass + '  facebook button'} href="/auth/facebook">
					<i className="facebook icon"></i>
					{FACEBOOK_LOGIN}
				</a>
			</div>
			<div className="lead">
				<a className={cssClass + ' black button'} href="/auth/github">
					<i className="github icon"></i>
					{GITHUB_LOGIN}
				</a>
			</div>
		</>
	)
}

const LoginMobile = () => (
	<div className="py-auto px-5 mx-5 login-mobile-container">
		<Row className="py-5 px-0 mx-auto container">
			<Col className="px-0 my-auto">
				<div>
					<div className="py-5">
						<h3 className="font-weight-bold pb-4">{LEARN_TO_CODE_MOBILE}</h3>
						<div>{SocialMediaButtons('mx-auto fluid ui mb-4 py-3 ')}</div>
					</div>
				</div>
			</Col>
		</Row>
	</div>
)

export default LoginMobile
export { default as LoginMobile } from './LoginMobile'
