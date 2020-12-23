import React from 'react'
import { LoginDesktop } from './LoginDesktop'
import { LoginTablet } from './LoginTablet'
import { LoginMobile } from './LoginMobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const LoginComponent = () => (
	<div>
		<Desktop>
			<LoginDesktop />
		</Desktop>
		<Tablet>
			<LoginTablet />
		</Tablet>
		<Mobile>
			<LoginMobile />
		</Mobile>
	</div>
)

export default LoginComponent
export { default as LoginComponent } from './LoginComponent'
