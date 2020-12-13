import React from 'react'
import {Featured} from '../components/Featured'
import QuestionList from '../components/QuestionList'

function Challenges() {
	return (
		<div className="challenges-container">
			<Featured />
			<QuestionList />
		</div>
	)
}

export default Challenges
export { default as Challenges } from './Challenges'
