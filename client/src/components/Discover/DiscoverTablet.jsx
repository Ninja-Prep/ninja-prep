import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './discover.css'

const DiscoverTablet = () => (
	<div className="text-center py-5 container">
		<Row className="pt-3">
			<Col className="my-auto ">
				<img
					className="img-fluid"
					src="./images/Explore-Cards.png"
					alt="Explore Cards"
				/>
			</Col>
			<Col className="my-auto ">
				<h1 className="font-weight-bold discover-text display-5  pb-2">Discover</h1>

				<p className="lead text-secondary m-auto">
					Discover in-demand concepts and skills that are actually asked for by
					top companies. Choose from our wide selection of problems and dive
					deep!
				</p>
			</Col>
		</Row>
	</div>
)

export default DiscoverTablet
export { default as DiscoverTablet } from './DiscoverTablet'
