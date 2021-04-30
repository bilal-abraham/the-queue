import React, { Fragment, useState } from 'react'
import './Count.css'

const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <Fragment>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </Fragment>
    )
}

export default Count;
