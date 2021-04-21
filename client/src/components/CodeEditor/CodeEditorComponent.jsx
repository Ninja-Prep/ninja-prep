import React, { useEffect, useState } from 'react'
import CodeEditorDesktop from './CodeEditorDesktop'
import { getProblemDetails } from './CodeEditorBaseComponent'
import Error404Component from '../Error404/Error404Component'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'
import FadeIn from 'react-fade-in'

import { default as _ } from 'lodash'
import AsyncSpinner from '../Routes/Util/AsyncSpinner'

function CodeEditorComponent(props) {
    const [isLoading, setLoadingStatus] = useState(true)
    const [problemDetails, setProblemDetails] = useState()

    useEffect(() => {
        const loadDetails = async () => {
            const problemDetails = await getProblemDetails(props.match.params.id)
            setProblemDetails(problemDetails)
            setLoadingStatus(false)
        }
        loadDetails()
    }, [props.match.params.id])

    if (isLoading) {
        return <AsyncSpinner />
    } else if (!isLoading && _.isEmpty(problemDetails)) {
        // TODO: Add meaningful missing problem component
        return <Error404Component />
    }
    return (
        <div>
            <FadeIn delay={250} transitionDuration={450}>
                <Desktop>
                    <CodeEditorDesktop problemDetails={problemDetails} />
                </Desktop>
                <Tablet>
                    <CodeEditorDesktop problemDetails={problemDetails} />
                </Tablet>
            </FadeIn>
        </div>
    )
}

export default CodeEditorComponent
