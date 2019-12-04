import React, {useState} from 'react'
import '../Main.css'
import employeeFiles from '../../files/employeeFiles'
import AboutEmployee from './AboutEmployee'

const About = () => {
    const [employees] = useState(employeeFiles.persons)

    return (
        <div className='pages'>
            <h2>About Our Saloon</h2>
            <p>This is our saloon.</p>
            <div className='employees'>
                {
                    employees.map (
                        (employee, i) => 
                            <AboutEmployee name={employee.name} key={i} picture={employee.picture} position={employee.position} />
                        
                    )
                }
            </div>
        </div>
    )
}

export default About