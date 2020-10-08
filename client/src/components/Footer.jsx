import React from 'react'
import '../css/footer.css'

function Footer() {
	return (
		<div className="footer">
			<div className="row">
				<div className="col-sm">
					<div>
						<p className="footer-logo">
							<img className="logo" src="./images/logo.png" alt="logo" />
						</p>
					</div>
				</div>
				<div className="col-sm">
					<p className="bold">NINJAPREP</p>
					<p>About Us</p>
					<p>About Us</p>
					<p>About Us</p>
					<p>About Us</p>
				</div>
				<div className="col-sm">
					<p className="bold">COURSES</p>
					<p>About Us</p>
					<p>About Us</p>
					<p>About Us</p>
					<p>About Us</p>
				</div>
				<div className="col-sm">
					<p className="bold">COURSES</p>
					<p>About Us</p>
					<p>About Us</p>
					<p>About Us</p>
					<p>About Us</p>
				</div>
				<div className="col-sm">
					<p className="bold">RESOURCES</p>
					<p>About Us</p>
					<p>About Us</p>
					<p>About Us</p>
					<p>About Us</p>
				</div>
			</div>

			<div className="copyright">
				<p>&copy; NinjaPrep</p>
				<p>2020</p>
			</div>
		</div>
	)
}

export default Footer
export { default as Footer } from './Footer'
