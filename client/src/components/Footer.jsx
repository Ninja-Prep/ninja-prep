import React from 'react'
import '../css/footer.css'

function Footer() {
	return (
		<div className="footer-container">
			<div className="row">
				<div className="col-sm">
					<img
						className="footer-logo"
						src="./images/NinjaPrep-Logo.png"
						alt="logo"
					/>
				</div>
				<div className="col-sm">
					<p className="footer-column bold subtitle">NINJAPREP</p>
					<p>About Us</p>
					<p>Premium</p>
					<p>Roadmap</p>
				</div>
				<div className="col-sm">
					<p className="footer-column bold subtitle">COURSES</p>
					<p>Stacks</p>
					<p>Queues</p>
					<p>Linked List</p>
				</div>
				<div className="col-sm">
					<p className="footer-column bold subtitle">RESOURCES</p>
					<p>Articles</p>
					<p>Challenges</p>
					<p>Cheatsheets</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
export { default as Footer } from './Footer'
