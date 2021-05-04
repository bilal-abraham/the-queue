import React, { Fragment } from 'react'
import './Modal.css'

const Modal = () => {
    return (
        <Fragment>
            <container className="top-queue-container">
                <form>
                    <input className="name" placeholder="Name:"></input>
                    <br />
                    <input className="grade" placeholder="Grade:"></input>
                    <br />
                    <input className="reason" placeholder="Reason:"></input>
                    <br />
                    <button className="sumbit">Submit</button>
                </form>
            </container>
        </Fragment>
    )
}

export default Modal;