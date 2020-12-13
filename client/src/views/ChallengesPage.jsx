import React from 'react'
import { Featured } from '../components/Featured/Featured'
import QuestionList from '../components/QuestionList'

function ChallengesPage() {
	return (
		<div className="challenges-container">
			<Featured />
			<QuestionList />
		</div>
	)
}

export default ChallengesPage
