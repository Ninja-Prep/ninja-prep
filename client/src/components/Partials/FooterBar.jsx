import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Nav } from 'react-bootstrap'

function FooterBar() {
	return (
		<footer>
			<Container className="py-5">
				<Row>
					<Col className="my-auto">
						<img
							className=""
							src="./images/NinjaPrep-Logo.png"
							alt="logo"
							width="70"
							height="70"
						/>
					</Col>

					<Col>
						<p className="font-weight-bold">NINJAPREP</p>
						<Nav.Link as={Link} to="/about" className="pl-0">
							About Us
						</Nav.Link>

						<Nav.Link as={Link} to="/premium" className="pl-0">
							Get Premium
						</Nav.Link>

						<Nav.Link as={Link} to="/roadmap" className="pl-0">
							Roadmap
						</Nav.Link>
					</Col>
					<Col>
						<p className="font-weight-bold">COURSES</p>
						<p>Stacks</p>
						<p>Queues</p>
						<p>Linked List</p>
					</Col>
					<Col>
						<p className="font-weight-bold">RESOURCES</p>
						<p>Articles</p>
						<p>Challenges</p>
						<p>Cheatsheets</p>
					</Col>
				</Row>

			</Container>
		</footer>
	)
}

export default FooterBar
export { default as FooterBar } from './FooterBar'
