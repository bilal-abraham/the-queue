import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// import io from 'socket.io-client'
import './PublicView.css'

const AdminView = () => {



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

                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default AdminView;