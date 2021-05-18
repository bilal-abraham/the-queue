import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './PublicView.css'

const AdminView = () => {
    let first = {
        id: 1,
        name: "Bilal",
        grade: "10th",
        description: "Needs Help"
    }

    let second = {
        id: 2,
        name: "Ron",
        grade: "10th",
        description: "Needs More Help"
    }

    let third = {
        id: 3,
        name: "Noah",
        grade: "10th",
        description: "Needs Even MORE Help"
    }

    let people = [first, second, third]

    const deleteSubmission = id => {

    }

    return (
        <Fragment>
            <div className="top-queue-container">
                {/* Header */}
                <h1 className="queue-title text-center mt-5">Welcome to the Queue</h1>
                <div className="d-flex mt-5">
                    {/* Sign Out Button */}
                    <Link to="/">
                        <button type="button" className="btn btn-danger ml-2">
                            Sign Out
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bottom-queue-container">
                <table className="table table-striped table-dark text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(person => (
                            <tr key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.grade}</td>
                                <td>{person.description}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteSubmission(person)}>
                                        <i class="fas fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default AdminView;