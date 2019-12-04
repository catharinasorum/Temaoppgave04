import React, {useState} from 'react'
import '../Main.css'
import services from '../../files/services'
import ServicesSub from './ServicesSub'

const Services = () => {

    const [treatments] = useState(services.list)

    return (
        <div className='pages'>
            <h2>Services</h2>
            <p>We can offer these services.</p>
            <div className='treatments'>
                {
                    treatments.map(
                        (treatment, i) => 
                            <ServicesSub treatment={treatment.treatment} price={treatment.price} />
                        
                    )
                }
            </div>
        </div>
    )
}

export default Services
