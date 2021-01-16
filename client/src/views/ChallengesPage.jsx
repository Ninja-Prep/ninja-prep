import React from 'react'
import { Featured } from '../components/Featured/Featured'
import QuestionListComponent from '../components/QuestionList/QuestionListComponent'
import QuestionListDesktop from '../components/QuestionList/QuestionListDesktop'

function ChallengesPage() {
    return (
        <div className="challenges-container">
            <Featured />
            <QuestionListComponent />
        </div>
    )
}

export default ChallengesPage
