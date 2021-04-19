import React, { useEffect, useState } from 'react'
import CodeEditorDesktop from './CodeEditorDesktop'
import { getProblemDetails } from './CodeEditorBaseComponent'
import Error404Component from '../Error404/Error404Component'
import { Desktop, Tablet, Mobile } from '../MediaQuery/DeviceSizes'
import { default as _ } from 'lodash'

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
        // TODO: Add loading spinner
        return null
    } else if (!isLoading && _.isEmpty(problemDetails)) {
        // TODO: Add meaningful missing problem component
        return <Error404Component />
    }
    return (
        <div>
            <Desktop>
                <CodeEditorDesktop problemDetails={problemDetails} />
            </Desktop>
            <Tablet>
                <CodeEditorDesktop problemDetails={problemDetails} />
            </Tablet>
        </div>
    )
}

export default CodeEditorComponent
