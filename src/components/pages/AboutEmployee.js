import React from 'react'
import '../Main.css'

const AboutEmployee = (props) => {
    return (
        <div className='employee'>
            <img src={props.picture} alt='The employee of Tinas beauty saloon'/>
            <h3>{props.name}</h3><br />
            <p>{props.position[0]}</p><br />
            <p>{props.position[1]}</p><br />
            <p>{props.position[2]}</p><br />
            <p>{props.position[3]}</p><br />
        </div>
    )
}

export default AboutEmployee