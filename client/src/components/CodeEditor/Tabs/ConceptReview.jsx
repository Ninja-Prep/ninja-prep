import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'

function ConceptReview() {
    return (
        <div className="m-4">
            <div className="text-dark pb-4">
                <h3 className="font-weight-bold">Concepts</h3>
                <hr></hr>
                <p className="font-weight-bold lead">Example 1</p>
                <p>
                    This is the description of the problem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sodales egestas ligula eget cursus. Nunc lorem ipsum, aliquam eu magna in, rutrum viverra
                    ante. Suspendisse at augue purus. Donec lorem ante, ullamcorper id varius sed, sodales eget orci.
                    Aliquam ac justo nisl. Proin posuere sapien vel justo ullamcorper, luctus placerat mi molestie.
                    Pellentesque fermentum tellus nec efficitur gravida. Nunc suscipit nulla at dui vestibulum molestie
                    id non nunc. Nunc ut interdum quam. Vivamus malesuada ornare eleifend.
                </p>
                <p>
                    Morbi id nisl vel neque bibendum imperdiet. Nulla facilisi. Pellentesque eget aliquet metus. Aenean
                    vitae dolor vitae ligula bibendum vulputate. Suspendisse quis neque volutpat, ornare sem eget,
                    tempor ex. Cras maximus porta luctus. Mauris posuere lacus sed dui congue commodo.
                </p>
            </div>
            <div className="pb-4">
                <p className="font-weight-bold lead">Example 1</p>
                <div className="bg-dark text-light rounded mb-3">
                    <p className="p-3">
                        Morbi id nisl vel neque bibendum imperdiet. Nulla facilisi. Pellentesque eget aliquet metus.
                        Aenean vitae dolor vitae ligula bibendum vulputate. Suspendisse quis neque volutpat, ornare sem
                        eget, tempor ex. Cras maximus porta luctus. Mauris posuere lacus sed dui congue commodo.
                    </p>
                </div>
                <p className="font-weight-bold lead">Example 2</p>
                <div className="bg-dark text-light rounded">
                    <p className="p-3">
                        Morbi id nisl vel neque bibendum imperdiet. Nulla facilisi. Pellentesque eget aliquet metus.
                        Aenean vitae dolor vitae ligula bibendum vulputate. Suspendisse quis neque volutpat, ornare sem
                        eget, tempor ex. Cras maximus porta luctus. Mauris posuere lacus sed dui congue commodo.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ConceptReview
export { default as ConceptReview } from './ConceptReview'
