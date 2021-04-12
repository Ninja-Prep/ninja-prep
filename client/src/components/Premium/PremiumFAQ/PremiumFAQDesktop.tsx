import React from 'react'
import { Container } from 'react-bootstrap'
import FAQCard from './FAQCard'
import FAQObjectList from './PremiumFAQQuestions'

function PremiumFAQDesktop() {
    return (
        <div className="pb-5">
            <Container>
                <hr className="m-auto text-center"></hr>
                <h2 className="display-5 py-5 m-0 text-center text-secondary">FAQ</h2>
                {FAQObjectList.questions.map((FAQ) => (
                    <FAQCard question={FAQ.question} answer={FAQ.answer} />
                ))}
            </Container>
        </div>
    )
}

export default PremiumFAQDesktop
