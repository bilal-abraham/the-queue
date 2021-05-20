//we were developing an admin side however we didn't get to finish it
//however we didn't want to delete the code in case we return to this project in the future

import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
import './PublicView.css'

const AdminView = () => {
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
        }, [])

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
                </table>
                <div id='rows'>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminView;