import React from 'react'
import '../css/footer.css'
import FavoriteIcon from '@material-ui/icons/Favorite'

function Footer() {
	return (
		<div className="footer-container">
			<div className="row">
				<div className="col-sm">
					<div>
						<img className="logo" src="./images/logo.png" alt="logo" />
					</div>
				</div>
				<div className="col-sm">
					<p className="bold">NINJAPREP</p>
					<p>About Us</p>
					<p>Premium</p>
					<p>Roadmap</p>
				</div>
				<div className="col-sm">
					<p className="bold">COURSES</p>
					<p>Stacks</p>
					<p>Queues</p>
					<p>Linked List</p>
				</div>
				<div className="col-sm">
					<p className="bold">RESOURCES</p>
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
