import React, { useContext } from "react";
import { FormContext } from "../form";
import DateOutReturn from "./dates/Dates";
import './style.scss'
import calendar from '../../assets/img/icons/calendar.svg'
const DatesModalContainer = () => {

    const { showDatesContainer, modalDatesContainer } = useContext(FormContext);

    const showUp = () => { showDatesContainer() }

    return (
        <>
            <article className={`dates ${modalDatesContainer === false ? 'hidden' : ''}`} >
                <section className='dates__container'>
                    <div>
                        <img src={calendar} alt="calendar" />
                        <h1>Selecciona tus fechas</h1>
                    </div>

                    <DateOutReturn />
                    <div className='dates__btn-div' >
                        <p>Exelentes Precios</p>
                        <button onClick={showUp}>Confirmar</button>
                    </div>
                </section>
            </article>
        </>
    )
}

export default DatesModalContainer