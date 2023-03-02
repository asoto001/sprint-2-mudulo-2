import React from "react";
import './style.scss';

import calendar from '../assets/img/icons/calendar.svg';
import arrowDown from '../assets/img/icons/chevron-down.svg';
import miniAirplane from '../assets/img/icons/plane.svg';

const Form = () => {

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

    return (
        <section className='form'>
            <h2>Busca un nuevo destino y comienza la aventura.</h2>
            <h5>Descubre vuelos al mejor precio.</h5>
            <section className="form__containers">
                <div className='form__typeTravel-container box-border'>
                    {typeTravel.map((type, index) => (
                            <button id={type.id} key={index} value={type.name}>{type.name}</button>
                    ))

                    }
                </div>
                <div className='form__origin box-border'>
                    <h3>Ciudad de México</h3>
                    <p>origen</p>
                </div>
                <div className='form__destination box-border'>
                    <h3>---</h3>
                    <p>Seleccione un destino</p>
                </div>
                <div className='form__going-date box-border'>
                    <img src={calendar} alt="date" />
                    <div>
                        <p>Salida</p>
                        <h3>mar, 30 nov, 2020</h3>
                    </div>
                </div>
                <div className='form__arrival-date box-border'>
                    <img src={calendar} alt="date" />
                    <div>
                        <p>Regreso</p>
                        <h3>mar, 31 dic, 2020</h3>
                    </div>
                </div>
                <div className='form__passengers box-border'>
                    <div>
                        <p>Pasajeros</p>
                        <h3>1 dulto</h3>
                    </div>
                    <img src={arrowDown} alt="arrow" />
                </div>
                <div className='form__discount-cupon box-border'>
                    <p>¿Tienes un codigo de descuento?</p>
                    <h3>-- -- --</h3>
                </div>
            </section>
            <button className="form__flys-btns"><img src={miniAirplane} alt="date" /> Buscar vuelos</button>
        </section>
    )
}
export default Form