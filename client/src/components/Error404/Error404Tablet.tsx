import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'
import { TEXT_404, MISSING_PAGE_TEXT, OOPS, REDIRECT_TEXT } from './Error404StringIds'

function Error404Tablet() {
    return (
        <div className="container">
            <h1 className="display-1 text-center mt-5"> {TEXT_404} </h1>
            <div className="text-center mt-5"> {OOPS} </div>
            <div className="text-center"> {MISSING_PAGE_TEXT} </div>
            <div className="text-center my-5">
                <button className="btn btn-primary">
                    <Link to="/">
                        <p className="backHomeButton">{REDIRECT_TEXT}</p>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Error404Tablet