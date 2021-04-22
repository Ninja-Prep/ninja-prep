import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import HintComponent from './HintComponent'

function ProblemDescription({ problemDetails }) {
    return (
        <div className="m-4">
            <div>
                <p className="text-success d-inline pr-3">Easy</p>
            </div>

            <div className="text-dark pb-4 pt-2">
                <h3 className="font-weight-bold">{problemDetails.title}</h3>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{problemDetails.description}</ReactMarkdown>
            </div>
            <HintComponent hints={problemDetails.hints} />
        </div>
    )
}

export default ProblemDescription
