import React from 'react'
// import Featured from '../components/Featured'
import QuestionListComponent from '../components/QuestionList/QuestionListComponent'

function Challenges() {
    return (
        <div className="challenges-container">
            {/* <Featured /> */}
            <QuestionListComponent />
        </div>
    )
}

export default Challenges
export { default as Challenges } from './Challenges'
