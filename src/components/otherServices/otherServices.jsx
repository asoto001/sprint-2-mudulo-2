import React from "react";
import './style.scss';

import airplane from '../assets/img/icons-services/airplane.svg';
import box from '../assets/img/icons-services/box2-fill.svg';
import car from '../assets/img/icons-services/car-front-fill.svg';
import house from '../assets/img/icons-services/house-fill.svg';
import people from '../assets/img/icons-services/people-fill.svg';



const OtherServices = () => {

    const theOtherServices = [
        {
            image: car,
            name: 'Transporte',
            description: 'Renta un auto o reserva un shuttle'
        },
        {
            image: airplane,
            name: 'Vuelos + Hoteles',
            description: 'Encuentra las mejores ofertas para tu viaje'
        },
        {
            image: people,
            name: 'Grupos',
            description: 'Obten una cotizacion para mas de 9 personas'
        },
        {
            image: house,
            name: 'Hoteles',
            description: 'Reserva cualquier habitacion en cualquier parte del mundo'
        },
        {
            image: box,
            name: 'Carga',
            description: 'Contamos con servicio de carga y mensajeria'
        }
    ]

    return (
        <>
            <section className="others">

                <h2>Servicios disponibles</h2>
                <section className="others__container">
                    {
                        theOtherServices.map((item, index) => (
                            <div className="others__div" key={index}>
                                <button><img src={item.image} alt={item.name} /></button>
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </section>
            </section>
        </>
    )

}

export default OtherServices