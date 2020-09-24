import React from 'react'
import '../css/footer.css'

function Footer() {
	return (
		<div className="footer">
			<div className="row">
				<div className="col-sm">
					<div>
						<p className="footer-logo">row1</p>
					</div>
				</div>
				<div className="col-sm">
					<div className="contact">
						<p>row1</p>
					</div>
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
