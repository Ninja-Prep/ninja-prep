import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'

function Error404Mobile() {
    return (
        <div className="container">
            <h1 className="display-1 text-center mt-5"> 404 </h1>

            <div className="text-center mt-5"> Oops! </div>

            <div className="text-center"> We can't seem to find the page you are looking for... </div>

            <div className="text-center my-5">
                <button className="btn btn-primary">
                    <Link to="/">
                        <p className="backHomeButton">Back to home</p>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Error404Mobile
export { default as Error404Mobile } from './Error404Mobile'
