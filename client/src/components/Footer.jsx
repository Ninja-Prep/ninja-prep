import React from 'react'
import '../css/footer.css'

function Footer() {
	return (
		<div class="footer">
			<div class="row">
				<div class="col-sm">
					<div>
						<p class="footer-logo">row1</p>
					</div>
				</div>
				<div class="col-sm">
					<div class="contact">
						<p>row1</p>
					</div>
				</div>
			</div>

			<div class="copyright">
				<p>&copy; NinjaPrep</p>
				<p>2020</p>
			</div>
		</div>
	)
}

export default Footer
export { default as Footer } from './Footer'
