import React, { useState } from 'react'
import '../css/how-it-works.css'
import {discoverSummary,learnSummary,solveSummary,goSummary} from '../stringVariables/HomeStringVariables'

class HowItWorks extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			width: '0%',
		}
	}
	changeOnStep = (percentage) => {
		this.setState({ width: percentage })
	}

	render() {
		return (
			<div className="how-it-works-container">
				<div className="how-it-works-title">
<p className="subtitle">How It Works</p>
<h1 className="bold">Stay ahead from home</h1>
				</div>
				<div className="progress">
					<div
						className="progress-bar"
						style={{ width: this.state.width }}
					></div>
				</div>
				<div className="row">
					<div className="col-sm" id="step-1" onMouseOver={() =>this.changeOnStep('10%')}>
						<h2 className="step-title">Discover</h2>
						<p>
							{discoverSummary}
						</p>
					</div>
					<div className="col-sm " id="step-2" onMouseOver={() =>this.changeOnStep('40%')}>
						<h2 className="step-title">Learn</h2>
						<p>
							{learnSummary}
						</p>
					</div>
					<div className="col-sm " id="step-3" onMouseOver={() =>this.changeOnStep('65%')}>
						<h2 className="step-title">Solve</h2>
						<p>
							{solveSummary}
						</p>
					</div>
					<div className="col-sm " id="step-4" onMouseOver={() =>this.changeOnStep('100%')}>
						<h2 className="step-title">Go</h2>
						<p>
							{goSummary}
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default HowItWorks
export { default as HowItWorks } from './HowItWorks'
