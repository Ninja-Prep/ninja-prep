import React, { useState } from 'react'
import '../css/how-it-works.css'
class HowItWorks extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			width: '25%',
		}
	}
	changeOnStep1 = () => {
		this.setState({ width: '25%' })
	}
	changeOnStep2 = () => {
		this.setState({ width: '50%' })
	}
	changeOnStep3 = () => {
		this.setState({ width: '75%' })
	}
	changeOnStep4 = () => {
		this.setState({ width: '100%' })
	}
	render() {
		return (
			<div className="how-it-works-container">
				<div className="progress">
					<div
						className="progress-bar"
						style={{ width: this.state.width }}
					></div>
				</div>
				<div className="row">
					<div className="col-sm" id="step-1" onMouseOver={this.changeOnStep1}>
						<h2>Discover</h2>
						<p>
							Discover in-demand concepts and skills that are actually asked for
							by top companies. Choose from our categories and dive deep!
						</p>
					</div>
					<div className="col-sm " id="step-2" onMouseOver={this.changeOnStep2}>
						<h2>Learn</h2>
						<p>
							Learning isn't meant to be easy. But we've made it easier for you
							by giving you the ability to code along, watch step-by-step
							videos, and read insightful articles!
						</p>
					</div>
					<div className="col-sm " id="step-3" onMouseOver={this.changeOnStep3}>
						<h2>Solve</h2>
						<p>
							New skills have a higher chance of being retained when practiced.
							Put your new skills to the test by solving our challenges!
						</p>
					</div>
					<div className="col-sm " id="step-4" onMouseOver={this.changeOnStep4}>
						<h2>Go</h2>
						<p>
							All hard work pays off. Be ready for your technical interviews.
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default HowItWorks
export { default as HowItWorks } from './HowItWorks'
