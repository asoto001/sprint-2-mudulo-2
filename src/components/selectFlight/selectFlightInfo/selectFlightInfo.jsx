import React from "react";
import { Link } from "react-router-dom";


const SelectFlightInfo = () => {

    const data = JSON.parse(sessionStorage.getItem('data')) || []

    return (
        <>
            <section className="select-flight">
                <h2>Vuelo de salida</h2>
                <Link className="select-flight__link">Cambiar Vuelo</Link>
            </section>
            <section className="flight-info">
                <h4>{data.dateOut}</h4>
                <p>{data.origin} a {data.destination}</p>
            </section>
        </>
    )
}

export default SelectFlightInfo