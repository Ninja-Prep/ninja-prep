import React from 'react'
import { Featured } from '../components/Featured'
import QuestionListDesktop from '../components/QuestionList/QuestionListDesktop'
import QuestionListComponent from '../components/QuestionListComponent'

function Challenges() {
    return (
        <div className="challenges-container">
            <Featured />
            <QuestionListComponent />
        </div>
    )
}

export default Challenges
export { default as Challenges } from './Challenges'
