import React from 'react'
import { Container } from 'react-bootstrap'
import '../premium.css'
import { FAQ_1, FAQ_2, FAQ_3 } from './PremiumFAQStringIds'

function PremiumFAQDesktop() {
    function FAQCard(props) {
        return (
            <div className="border-top py-5">
                <p className="lead text-secondary">{props.title}</p>
                <p className="text-muted font-italic">{props.answer}</p>
            </div>
        )
    }
    return (
        <div className="pb-5">
            <Container>
                <hr className="hr-line m-auto text-center"></hr>
                <h2 className="display-5 py-5 m-0 text-center text-secondary">FAQ</h2>
                <FAQCard title={FAQ_1.QUESTION} answer={FAQ_1.ANSWER} />
                <FAQCard title={FAQ_2.QUESTION} answer={FAQ_2.ANSWER} />
                <FAQCard title={FAQ_3.QUESTION} answer={FAQ_3.ANSWER} />
            </Container>
        </div>
    )
}

export default PremiumFAQDesktop
export { default as PremiumFAQDesktop } from './PremiumFAQDesktop'
