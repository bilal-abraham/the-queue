import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import './PublicView.css'

const AdminView = () => {

    let one = {
        index: 1,
        name: "Bilal",
        description: "off to get a 1 on the AP CSA Exam"
    }
    let two = {
        index: 2,
        name: "Noah",
        description: "i hate this"
    }
    let three = {
        index: 3,
        name: "Ron",
        description: "i hate this too"
    }
    let four = {
        index: 4,
        name: "Admin",
        description: "need more time on design poject :/"
    }

    const [submissions, setSubmissions] = useState([one, two, three, four])

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
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((subs) => (
                            <Fragment>
                                <tr key={subs.index}>
                                    <td>{subs.name}</td>
                                    <td>{subs.description}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger ml-3">
                                            <i className="fas fa-times" />
                                        </button>
                                    </td>
                                </tr>
                            </Fragment>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default AdminView;