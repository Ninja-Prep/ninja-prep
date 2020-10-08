import React from 'react'
import '../css/solve-card.css'

function SolveCard() {
	return (
		<div className="solve-card card">
			<div className="card-text">
				<p className="subtitle bold">Array 101: String Manipulation</p>
				<span className="subtitle">0/9</span>
			</div>
		</div>
	)
}

export default SolveCard
export { default as SolveCard } from './SolveCard'
