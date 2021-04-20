import React from 'react'

interface Props {
    question: string
    answer: string
}

export default function FAQCard(props: Props) {
    return (
        <div className="border-top py-5">
            <p className="lead text-secondary">{props.question}</p>
            <p className="text-muted font-italic">{props.answer}</p>
        </div>
    )
}
