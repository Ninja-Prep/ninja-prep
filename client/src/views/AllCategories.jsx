import React from 'react'
import { Link } from 'react-router-dom'
import Problems from '../problemSet/arraysAndStrings'

function AllCategories() {
    return (
        <ul>
            {Problems.map((problem) => (
                <li key={problem.id}>
                    <Link to={`${process.env.PUBLIC_URL}/problem/${problem.name}`}>{problem.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default AllCategories
