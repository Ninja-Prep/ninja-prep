import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import ShareIcon from '@material-ui/icons/Share'

function ProblemDesktop() {
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
                <h3 className="font-weight-bold">1. Two Sum</h3>
                <p>
                    This is the description of the problem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    sodales egestas ligula eget cursus. Nunc lorem ipsum, aliquam eu magna in, rutrum viverra ante. Suspendisse at
                    augue purus. Donec lorem ante, ullamcorper id varius sed, sodales eget orci. Aliquam ac justo nisl. Proin
                    posuere sapien vel justo ullamcorper, luctus placerat mi molestie. Pellentesque fermentum tellus nec efficitur
                    gravida. Nunc suscipit nulla at dui vestibulum molestie id non nunc. Nunc ut interdum quam. Vivamus malesuada
                    ornare eleifend.
                </p>
                <p>
                    Morbi id nisl vel neque bibendum imperdiet. Nulla facilisi. Pellentesque eget aliquet metus. Aenean vitae
                    dolor vitae ligula bibendum vulputate. Suspendisse quis neque volutpat, ornare sem eget, tempor ex. Cras
                    maximus porta luctus. Mauris posuere lacus sed dui congue commodo.
                </p>
            </div>
            <div className="pb-4">
                <p className="font-weight-bold lead">Example 1</p>
                <div className="bg-dark text-light rounded mb-3">
                    <p className="p-3">
                        Morbi id nisl vel neque bibendum imperdiet. Nulla facilisi. Pellentesque eget aliquet metus. Aenean vitae
                        dolor vitae ligula bibendum vulputate. Suspendisse quis neque volutpat, ornare sem eget, tempor ex. Cras
                        maximus porta luctus. Mauris posuere lacus sed dui congue commodo.
                    </p>
                </div>
                <p className="font-weight-bold lead">Example 2</p>
                <div className="bg-dark text-light rounded">
                    <p className="p-3">
                        Morbi id nisl vel neque bibendum imperdiet. Nulla facilisi. Pellentesque eget aliquet metus. Aenean vitae
                        dolor vitae ligula bibendum vulputate. Suspendisse quis neque volutpat, ornare sem eget, tempor ex. Cras
                        maximus porta luctus. Mauris posuere lacus sed dui congue commodo.
                    </p>
                </div>
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
