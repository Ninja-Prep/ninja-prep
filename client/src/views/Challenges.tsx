import React from 'react'
import QuestionListComponent from '../components/QuestionList/QuestionListComponent'

function Challenges() {
    return (
        <div className="challenges-container">
            <QuestionListComponent />
        </div>
    )
}

export default Challenges
export { default as Challenges } from './Challenges'
