import React from 'react'
import { DiscoverDesktop } from './DiscoverDesktop'
import { DiscoverTablet } from './DiscoverTablet'
import { DiscoverMobile } from './DiscoverMobile'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'

const DiscoverComponent = () => (
	<div>
		<Desktop>
			<DiscoverDesktop />
		</Desktop>
		<Tablet>
			<DiscoverTablet />
		</Tablet>
		<Mobile>
			<DiscoverMobile />
		</Mobile>
	</div>
)

export default DiscoverComponent
export { default as DiscoverComponent } from './DiscoverComponent'
