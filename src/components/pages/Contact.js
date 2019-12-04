import React from 'react'
import '../Main.css'

const Contact = () => {
    const contactUs = ['+1-602-555-0162', 'post@tinasaloon.com', '1374 Boone Crockett Lane, Armadillo']
    return (
        <div className='pages'>
            <h2>Contact</h2>
            <div className='contact space'>
                <p><b>Phone number:</b> {contactUs[0]}</p>
                <p><b>Mail adress:</b> {contactUs[1]}</p>
                <p><b>Address:</b> {contactUs[2]}</p>
            </div>
        </div>
    )
}

export default Contact