import React, {useState, useRef} from 'react'
import '../Main.css'

const Bookings = () => {

    const myForm = useRef()

    const[treatments, setTreatments] = useState([])

    const [order, setOrder] = useState({
        customerName: "",
        customerPhone: "",
        customerTreatments: []
    })

    const placeOrder = (evt) => {
        evt.preventDefault()
        const newOrder = {
            customerName : myForm.current[0].value,
            customerPhone : myForm.current[1].value,
            customerTreatments : treatments
        }
        setOrder(newOrder)
    }

    const chooseTreatment = (evt) => {
        setTreatments([...treatments, evt.target.text])

    }

    return (
        <div className='pages'>
            <h2>Bookings</h2>
            <div className='bookings'>
                <form ref={myForm}>
                    <p>Customer name: </p><input type='text' className='inpCustomer' placeholder='Type your name, or the name of the customer' />
                    <p>Customer phone number</p> <input type="text" className='inpNumber' placeholder='Type your phonenumber, so we can contact you if its necesarry' />
                    <p>Choose treatments: </p>
                    <p className='smallText'>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>
                        <select className='selectTreatment' size='7' multiple>
                            <option onClick={chooseTreatment} value='hc-long'>Haircut, long hair</option>
                            <option onClick={chooseTreatment} value='hc-short'>Haircut, short hair</option>
                            <option onClick={chooseTreatment} value='hc-barber'>Haircut, barber</option>
                            <option onClick={chooseTreatment} value='color-foils'>Coloring, foils</option>
                            <option onClick={chooseTreatment} value='color-perm'>Coloring, permanent</option>
                            <option onClick={chooseTreatment} value='basic-style'>Basic styling</option>
                            <option onClick={chooseTreatment} value='lux-style'>Luxury Styling</option>
                        </select><br />
                        <button type='submit' onClick={placeOrder}>Place your order</button>
                </form>
                <article>
                    <h3>Your order</h3>
                    <p className='yourOrder smallText'><b>{order.customerName}</b></p>
                    <p className='yourOrder smallText'><i>{order.customerPhone}</i></p>
                    <ul>
                        {
                        Array.from(order.customerTreatments).map( t => <li className='yourOrder smallText'>{t}</li> )
                        }
                    </ul>
                </article>
            </div>
        </div>
    )
}

export default Bookings
