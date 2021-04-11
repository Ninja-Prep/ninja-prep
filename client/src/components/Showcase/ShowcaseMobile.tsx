import React from 'react'
import { Container } from 'react-bootstrap'
import { SHOWCASE_TITLE, SHOWCASE_DESCRIPTION } from './ShowcaseStringIds'
import './Showcase.css'

function ShowcaseMobile() {
    return (
        <div className="py-5 showcase-bg">
            <Container>
                <div className="text-center pb-4">
                    <h3 className="font-weight-bold pb-2">{SHOWCASE_TITLE}</h3>
                    <p className="lead">{SHOWCASE_DESCRIPTION}</p>
                </div>
            </Container>
        </div>
    )
}

export default ShowcaseMobile
