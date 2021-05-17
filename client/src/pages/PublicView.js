import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './PublicView.css'

const PublicView = () => {
    let first = {
        id: 0,
        name: "Bilal",
        grade: "10th",
        reason: "Needs Help"
    }

    let second = {
        id: 2,
        name: "Ron",
        grade: "10th",
        reason: "Needs More Help"
    }

    let third = {
        id: 3,
        name: "Noah",
        grade: "10th",
        reason: "Needs Even MORE Help"
    }

    let people = [first, second, third]

    return (
        <Fragment>
            <div className="top-queue-container">
                {/* Header */}
                <h1 className="queue-title text-center mt-5">Welcome to the Queue</h1>
                <div className="d-flex mt-5">
                    <button type="button" className="btn btn-secondary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Create Submission
                        </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Create Submission</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <input type="text" name="name" placeholder="Name" />
                                        <input type="text" name="grade" placeholder="Grade" />
                                        <input type="text" name="reason" placeholder="Reason" />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/admin">
                        <button type="button" className="btn btn-danger ml-2">
                            Admin Login
                        </button>
                    </Link>
                </div>
            </div>
            <div className="bottom-queue-container">
                {/* Submissions */}
                <table id="rows" className="table table-striped table-dark text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(person => (
                            <tr key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.grade}</td>
                                <td>{person.reason}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default PublicView;