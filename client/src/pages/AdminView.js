import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import './PublicView.css'

const AdminView = () => {
    const [submissions, setSubmissions] = useState([])

    const socketRef = useRef()

    useEffect(
        () => {
            socketRef.current = io.connect("http://localhost:4000")
            socketRef.current.on("message", ({ name, message }) => {
                setSubmissions([...submissions, { name, message }])
            })
            return () => socketRef.current.disconnect()
        },
        [submissions]
    )

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
                        {submissions.map(person => (
                            <tr key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.grade}</td>
                                <td>{person.description}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteSubmission(person)}>
                                        <i className="fas fa-times"></i>
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