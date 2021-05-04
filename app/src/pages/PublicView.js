import React, { Fragment } from 'react'
import Header from '../components/Header.js'
import Modal from '../components/Modal.js'
import Submissions from '../components/Submissions.js'
import './PublicView.css'

const PublicView = () => {
    return (
        <Fragment>
            <container className="top-queue-container">
                <Header />
            </container>
            {/* Trigger Model w/ Button */}

            <container className="bottom-queue-container">
                <Submissions />
            </container>
        </Fragment>
    )
}

export default PublicView;