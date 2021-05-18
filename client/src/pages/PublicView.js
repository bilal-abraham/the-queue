import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import './PublicView.css'


const socket = io.connect('http://localhost:4000')

const PublicView = () => {
    const [password, setPassword] = useState("")
    const [state, setState] = useState({ name: "", description: "" })
    const [submissions, setSubmissions] = useState([])
    let adminpass = "admin123"

    const renderAdminLogin = () => {
        if (password == adminpass) {
            return (
                <Link to="/admin">
                    <button type="button" className="btn btn-secondary">Sumbit</button>
                </Link>
            )
        } else {
            return (
                //Default text that appears until correct admin password is entered
                <button type="button" className="btn btn-secondary disabled" > Incorrect Password... </button >
            )
        }
    }


    return (
        <Fragment>
            <div className="top-queue-container">
                {/* Header */}
                <h1 h1 className="queue-title text-center mt-5" > Welcome to the Queue</h1>
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
                                    <h5 className="modal-title" >Create Submission</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        {/*Text inside Modal that appears when "Create Submissions" Button is Pressed*/}

                                        <input className="form-control form-control-lg" type="text" name="name" placeholder="Name" />
                                        <input className="form-control form-control-lg" type="text" name="grade" placeholder="Grade" />
                                        <input className="form-control form-control-lg" type="text" name="description" placeholder="Description" />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Admin Login Btn */}
                    <button type="button" className="btn btn-danger ml-3" data-bs-toggle="modal" data-bs-target="#adminModal">
                        <i class="fas fa-lock"></i>
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
                                <div className="modal-footer ">
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
                            <th>Grade</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((index) => (
                            <Fragment>
                                <tr key={index}>
                                    <td>{submissions.name}</td>
                                    <td>{submissions.grade}</td>
                                    <td>{submissions.description}</td>
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