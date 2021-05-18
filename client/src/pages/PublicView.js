import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import io from 'socket.io-client'
import './PublicView.css'


const PublicView = () => {
    const [password, setPassword] = useState("")
    let adminpass = "admin123"

    const [state, setState] = useState({ name: "", description: "" })
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

    const renderAdminLogin = () => {
        if (password === adminpass) {
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

    const onTextChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onMessageSubmit = e => {
        e.preventDefault()
        const [name, description] = state
        socketRef.current.emit("message", { name, description })
        setState({ message: '', name })
        console.log("gf3r")
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
                                    <h5 className="modal-title">Create Submission</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form onSubmit={onMessageSubmit}>
                                    <div className="modal-body">
                                        {/*Text inside Modal that appears when "Create Submissions" Button is Pressed*/}
                                        <input onChange={e => onTextChange(e)} value={state.name} className="form-control form-control-lg" type="text" name="name" placeholder="Name" />
                                        <input onChange={e => onTextChange(e)} value={state.grade} className="form-control form-control-lg" type="text" name="grade" placeholder="Grade" />
                                        <input onChange={e => onTextChange(e)} value={state.description} className="form-control form-control-lg" type="text" name="description" placeholder="Description" />
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary">Submit</button>
                                        </div>
                                    </div>
                                </form>
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