import React, { createContext, useEffect, useState } from "react";
import './style.scss';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getNations } from "../../services/dataNations";
import Origin from "./origin/origin";
import calendar from '../assets/img/icons/calendar.svg';
import arrowDown from '../assets/img/icons/chevron-down.svg';
import miniAirplane from '../assets/img/icons/plane.svg';
import Destination from "./destination/Destination";
import DatesModalContainer from "./datesModalContainer/DatesModalContainer";
import Seats from "./seats/Seats";

export const FormContext = createContext({})

const Form = () => {

    const navigation = useNavigate()
    const { handleSubmit, watch } = useForm();

    const [
        modalOrigin,
        setModalOrigin
    ] = useState(false);

    const [
        modalDestination,
        setModalDestination
    ] = useState(false);

    const [
        modalDatesContainer,
        setModalDatesContainer
    ] = useState(false)

    const [
        modalSeats,
        setModalSeats
    ] = useState(false);

    const [
        validate,
        setValidate
    ] = useState(false);

    const [
        dataFlights,
        setDataFlights
    ] = useState([]);
    const [
        type,
        setType
    ] = useState('');

    const [
        data,
        setData
    ] = useState([])

    const typeTravel = [
        {
            id: 1,
            type: "simple",
            name: "Viaje sencillo"
        },
        {
            id: 2,
            type: "complete",
            name: "Viaje redondo"
        }
    ]

    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        dateOut: '',
        returnDate: '',
        seats: '',
        type: type
    })

    const selectTypeTravel = (boton) => {
        if (boton === 1) {
            setType('Simple')
            localStorage.setItem('type', JSON.stringify(type))
        } else if (boton === 2) {
            setType('Complete')
            localStorage.setItem('type', JSON.stringify(type))
        }
    };

    const getData = async () => {
        const datos = await getNations();
        setData(datos)
    }

    useEffect(() => {
        getData()
    }, [])

    const showOrigin = () => { setModalOrigin(!modalOrigin) }
    const showDestination = () => { setModalDestination(!modalDestination) }
    const showDatesContainer = () => { setModalDatesContainer(!modalDatesContainer) }
    const showModalSeats = () => { setModalSeats(!modalSeats) }

    const changeFormData = (object) => {
        setFormData({ ...formData, [object.name]: object.value })
    }

    const validation = () => {
        if (formData.origin && formData.destination && formData.dateOut  && formData.seats) {
            setValidate(true)
        }
    }

    const getDataFlights = () => {
        const data = JSON.parse(localStorage.getItem('data')) || []
        setDataFlights(data)
    }

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(formData))
        getDataFlights()
        validation()
    }, [formData])

    const onSubmit = (data) => {

        localStorage.setItem('data', JSON.stringify(data))

        if (formData.origin) {
            navigation('selectFlight/flight');
        }
    }



    return (
        <FormContext.Provider value={
            { modalOrigin, showOrigin, changeFormData, showDestination, modalDestination, modalDatesContainer, showDatesContainer, showModalSeats, modalSeats, formData, data }}>
                <Origin countries={data}/>
                <Destination countries={data}/>
                <DatesModalContainer/>
                <Seats/>
                
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h2>Busca un nuevo destino y comienza la aventura.</h2>
                <h5>Descubre vuelos al mejor precio.</h5>
                <section className="form__containers">
                    <div className='form__typeTravel-container box-border'>
                        {typeTravel.map((type, index) => (
                            <button id={type.id} key={index} value={type.name} onClick={() => selectTypeTravel(`${type.id}`)}>{type.name}</button>
                        ))

                        }
                    </div>
                    <div className='form__origin box-border' onClick={() => {
                        setModalOrigin(true)
                    }}>
                        <h3>{dataFlights.origin ? dataFlights.origin : 'Ciudad Origen'}</h3>
                        <p>origen</p>
                    </div>
                    <div className='form__destination box-border' onClick={() => { setModalDestination(true) }}>
                        <h3>{formData.destination ? formData.destination : '---'}</h3>
                        <p>Seleccione un destino</p>
                    </div>
                    <div className='form__date-out box-border'
                        onClick={() => setModalDatesContainer(true)}>
                        <img src={calendar} alt="date" />
                        <div>
                            <p>Salida</p>
                            <h3>{formData.dateOut ? formData.dateOut : '30 nov, 2023'}</h3>
                        </div>
                    </div>
                    <div className='form__return-date box-border'
                        onClick={() => setModalDatesContainer(true)}>
                        <img src={calendar} alt="date" />
                        <div>
                            <p>Regreso</p>
                            <h3>{formData.dateOut ? formData.returnDate : '31 dic, 2023'}</h3>
                        </div>
                    </div>
                    <div className='form__seats box-border' onClick={() => { setModalSeats(true) }}>
                        <div>
                            <p>Pasajeros</p>
                            <h3>{formData.seats ? formData.seats : 'Indique la cantidad'}</h3>
                        </div>
                        <img src={arrowDown} alt="arrow" />
                    </div>
                    <div className='form__discount-cupon box-border'>
                        <p>¿Tienes un codigo de descuento?</p>
                        <h3>-- -- --</h3>
                    </div>
                </section>
                <button
                    className="form__flys-btns" type="submit">
                        <img src={miniAirplane} alt="plane" />
                    <Link to={`${validate ? 'selectFlight' : ''}`}>
                         Buscar vuelos</Link>
                </button>
            </form>
        </FormContext.Provider>
    )
}
export default Form
