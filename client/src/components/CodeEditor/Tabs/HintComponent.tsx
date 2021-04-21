import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

interface Props {
    hints: Array<string>
}

const HintCard = ({ index, hint }: { index: number; hint: string }) => {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0" className="text-dark bg-light">
                Hint {index}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <p className="p-3 text-dark">{hint}</p>
            </Accordion.Collapse>
        </Card>
    )
}

const HintComponent = (props: Props) => {
    return (
        <div className="text-dark pb-4">
            <p className="font-weight-bold lead">Hints</p>
            <Accordion>
                {props.hints.map((hint, index) => {
                    return <HintCard index={index + 1} hint={hint} />
                })}
            </Accordion>
        </div>
    )
}

export default HintComponent
