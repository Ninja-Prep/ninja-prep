interface FAQObject {
    question: string
    answer: string
}

interface FAQObjectListInteface {
    questions: Array<FAQObject>
}

const FAQObjectList: FAQObjectListInteface = {
    questions: [
        {
            question: 'What will I get with a premium subscription?',
            answer:
                '- This is the answer to the first question that will preferably be between 2-3 sentences. This is the answer to the first question that will preferably be between 2-3 sentences. This is the answer to the first question that will preferably be between 2-3 sentences.'
        },
        {
            question: 'What if I sign up and want to cancel?',
            answer:
                '- This is the answer to the first question that will preferably be between 2-3 sentences. This is the answer to the first question that will preferably be between 2-3 sentences. This is the answer to the first question that will preferably be between 2-3 sentences.'
        },
        {
            question: 'What is the return policy?',
            answer:
                '- This is the answer to the first question that will preferably be between 2-3 sentences. This is the answer to the first question that will preferably be between 2-3 sentences. This is the answer to the first question that will preferably be between 2-3 sentences.'
        }
    ]
}

export default FAQObjectList
