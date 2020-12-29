import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import '../premium.css'

function FAQ() {
    return (
        <div className="pb-5">
            <Container>
                <hr className="hr-line m-auto text-center"></hr>
                <h2 className="display-5 py-5 m-0 text-center text-secondary">FAQ</h2>
                <div className="border-top py-5">
                    <p className="lead text-secondary">What will I get with a premium subscription?</p>
                    <p className="text-muted font-italic">
                        - This is the answer to the first question that will preferably be between 2-3 sentences. This
                        is the answer to the first question that will preferably be between 2-3 sentences. This is the
                        answer to the first question that will preferably be between 2-3 sentences.
                    </p>
                </div>
                <div className="border-top py-5">
                    <p className="lead text-secondary">What if I sign up and want to cancel?</p>
                    <p className="text-muted font-italic">
                        - This is the answer to the first question that will preferably be between 2-3 sentences. This
                        is the answer to the first question that will preferably be between 2-3 sentences. This is the
                        answer to the first question that will preferably be between 2-3 sentences.
                    </p>
                </div>
                <div className="border-top py-5">
                    <p className="lead text-secondary">What is the return policy?</p>
                    <p className="text-muted font-italic">
                        - This is the answer to the first question that will preferably be between 2-3 sentences. This
                        is the answer to the first question that will preferably be between 2-3 sentences. This is the
                        answer to the first question that will preferably be between 2-3 sentences.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default FAQ
export { default as FAQ } from './FAQ'
