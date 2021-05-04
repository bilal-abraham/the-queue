import React, { Fragment } from 'react'
import './Submissions.css'

const Submissions = () => {
    return (
        <Fragment>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bilal</td>
                        <td>10th</td>
                    </tr>
                    <tr>
                        <td>Noah</td>
                        <td>10th</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Submissions;
