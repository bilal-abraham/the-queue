import { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from "socket.io-client"
import './PublicView.css'

const PublicView = () => {
    let socket = null
    useEffect(
        () => {
            socket = socketIOClient("http://localhost:3001")
            socket.on("submission:add", (message) => {
                let row = document.createElement('div');
                row.classList.add('row');
                let order = ['name', 'grade', 'desc']
                //Always guarentees entries into the Hashmap are in the order 'name', 'grade', 'description'
                for (let field of order) {
                    let div = document.createElement('div');
                    div.classList.add(field);
                    div.innerHTML = message[field]
                    row.appendChild(div);
                }
                //Adds row to the rows
                document.getElementById('rows').appendChild(row);
            })
            return () => socket.disconnect()
        }, []
    )

    //COMMENTED CODE FOR ADMIN FUNCTIONALITY
    // const [password, setPassword] = useState("")

    // let adminpass = "admin123"

    // const [submissions, setSubmissions] = useState([one, two, three, four])

    /**
     * If the admin password entered is correct, admin access will be granted, and the login button will become available
     * COMMENTED OUT FOR NOW
     */
    // const renderAdminLogin = () => {
    //     if (password === adminpass) {
    //         return (
    //             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
    //         )
    //     } else {
    //         return (
    //             //Default text that appears until correct admin password is entered
    //             <button type="button" className="btn btn-secondary disabled">Incorrect Password... </button >
    //         )
    //     }
    // }

    // const renderAdminBtn = () => {
    //     if (password === adminpass) {
    //         return (
    //             <Link to="/admin">
    //                 <button type="button" className="btn btn-danger ml-3">
    //                     <i className="fas fa-unlock"></i>
    //                 </button>
    //             </Link>
    //         )
    //     }
    //     else {
    //         return (
    //             <button type="button" className="btn btn-danger ml-3" data-bs-toggle="modal" data-bs-target="#adminModal">
    //                 <i className="fas fa-lock" />
    //             </button>
    //         )
    //     }
    // }

    //onChange={e => setPassword(e.target.value)} 

    //emits submission to server 
    const submitTicket = (event) => {
        let submissionTicket = document.getElementById('submissionTicket');
        let inputs = submissionTicket.querySelectorAll('input');
        let ticket = {}
        for (let input of inputs) {
            ticket[input.name] = input.value;
        }
        socket.emit("submission:add", ticket, function (data) {
            console.log("SERVER GOT MESSAGE")
            // Add submission to local client
        })
    }

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
                                <div id='submissionTicket' className="modal-body">
                                    {/*Text inside Modal that appears when "Create Submissions" Button is Pressed*/}
                                    <input className="form-control form-control-lg" type="text" name="name" placeholder="Name" />
                                    <input className="form-control form-control-lg" type="text" name="grade" placeholder="Grade" />
                                    <input className="form-control form-control-lg" type="text" name="desc" placeholder="Description" />
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={submitTicket}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Admin Login Btn */}
                    {/*COMMENTED FOR ADMIN
                        renderAdminBtn()*/}
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
                                        <input className="form-control form-control-default" type="password" placeholder="Admin Password" />
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    {/*COMMENTED FOR ADMIN
                                    renderAdminLogin()*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="bottom-queue-container">
                <table className="table table-striped table-dark text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                </table>
                <div id='rows'>
                </div>
            </div>
        </Fragment >
    )
}

export default PublicView;

