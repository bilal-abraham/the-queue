import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import './PublicView.css'


const PublicView = () => {
    const socket = io.connect('http://localhost:3000');
    const [password, setPassword] = useState("")
    let adminpass = "admin123"

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


    socket.on("messages", (message) => {
        console.log(socket.id)
        console.log(message)
    });

    /**
     * If the admin password entered is correct, admin access will be granted, and the login button will become available
     */
    const renderAdminLogin = () => {
        if (password === adminpass) {
            return (
                <Link to="/admin">
                    <button type="button" className="btn btn-secondary" >Login</button>
                </Link>
            )
        } else {
            return (
                //Default text that appears until correct admin password is entered
                <button type="button" className="btn btn-secondary disabled" > Incorrect Password... </button >
            )
        }
    }
    // const onMessagesSubmit = () => {
    //     socket.emit("message", submissions)
    //     console.log("emitted")
    //     console.log(submissions)
    // }

    return (
        <Fragment>
            <div className="top-queue-container">
                {/* Header */}
                <h1 className="queue-title text-center mt-5" > Welcome to the Queue</h1>
                <div className="d-flex mt-5">
                    {/* Create Submission Btn */}
                    <button type="button" className="btn btn-secondary mx-3" data-bs-toggle="modal" data-bs-target="#submissionsModal">
                        Create Submission
                    </button>
                    {/* Submissions Modal */}
                    <div className="modal fade" id="submissionsModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Create Submission</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form>
                                    <div className="modal-body">
                                        {/*Text inside Modal that appears when "Create Submissions" Button is Pressed*/}
                                        <input className="form-control form-control-lg" type="text" name="name" placeholder="Name" />
                                        <input className="form-control form-control-lg" type="text" name="desc" placeholder="Description" />
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" >Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Admin Login Btn */}
                    <button type="button" className="btn btn-danger ml-3" data-bs-toggle="modal" data-bs-target="#adminModal">
                        <i className="fas fa-lock" />
                    </button>
                    {/* Admin Login Modal */}
                    <div className="modal fade" id="adminModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Log Into Admin Space: </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <input className="form-control form-control-default" onChange={e => setPassword(e.target.value)} type="password" placeholder="Admin Password" />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    {renderAdminLogin()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="bottom-queue-container">
                {/* Submissions */}
                <table id="rows" className="table table-striped table-dark text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((subs) => (
                            <Fragment>
                                <tr key={subs.index}>
                                    <td>{subs.name}</td>
                                    <td>{subs.description}</td>
                                </tr>
                            </Fragment>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment >
    )
}

export default PublicView;