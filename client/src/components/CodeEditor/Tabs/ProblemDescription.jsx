import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import ShareIcon from '@material-ui/icons/Share'
import ReactMarkdown from 'react-markdown'
function ProblemDesktop({ problemDetails }) {
    return (
        <div className="m-4">
            <div>
                <p className="text-success d-inline pr-3">Easy</p>
                <p className="text-secondary d-inline pr-3">
                    <HowToRegIcon />
                    123 completed
                </p>
                <p className="text-secondary d-inline pr-3">
                    <ShareIcon />
                    Share
                </p>
            </div>

            <div className="text-dark pb-4">
                <h3 className="font-weight-bold">{problemDetails.title}</h3>
                <ReactMarkdown>{problemDetails.description}</ReactMarkdown>
            </div>
            <div className="text-dark pb-4">
                <p className="font-weight-bold lead">Hints</p>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="text-dark bg-light">
                            Hint 1
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <p className="p-3 text-dark">
                                Morbi id nisl vel neque bibendum imperdiet. Nulla facilisi. Pellentesque eget aliquet metus.
                                Aenean vitae dolor vitae ligula bibendum vulputate. Suspendisse quis neque volutpat, ornare sem
                                eget, tempor ex. Cras maximus porta luctus. Mauris posuere lacus sed dui congue commodo.
                            </p>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="text-dark bg-light">
                            Hint 2
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <p className="p-3 text-dark">
                                Morbi id nisl vel neque bibendum imperdiet. Nulla facilisi. Pellentesque eget aliquet metus.
                                Aenean vitae dolor vitae ligula bibendum vulputate. Suspendisse quis neque volutpat, ornare sem
                                eget, tempor ex. Cras maximus porta luctus. Mauris posuere lacus sed dui congue commodo.
                            </p>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    )
}

export default ProblemDesktop
