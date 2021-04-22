import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
const LoadingCodeSubmission = () => {
    return (
        <div>
            <p className="h5 font-weight-bold p-3">Processing...</p>
            <LinearProgress />
        </div>
    )
}

export default LoadingCodeSubmission
