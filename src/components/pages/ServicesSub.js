import React from 'react'
import '../Main.css'

const ServicesSub = (props) => {
    return (
        <div className='treatment'>
            <p>{props.treatment}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default ServicesSub