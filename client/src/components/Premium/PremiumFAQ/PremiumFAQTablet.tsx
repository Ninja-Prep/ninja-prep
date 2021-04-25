import React from 'react'
import { Container } from 'react-bootstrap'
import FAQCard from './FAQCard'
import FAQObjectList from './PremiumFAQQuestions'

function PremiumFAQTablet() {
    return (
        <div className="pb-5">
            <Container>
                <hr className="m-auto text-center"></hr>
                <h2 className="display-5 py-5 m-0 text-center text-secondary">FAQ</h2>
                {FAQObjectList.questions.map((FAQ, key) => (
                    <FAQCard question={FAQ.question} key={key} answer={FAQ.answer} />
                ))}
            </Container>
        </div>
    )
}

export default PremiumFAQTablet
