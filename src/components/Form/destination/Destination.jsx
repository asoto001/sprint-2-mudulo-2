import React, { useContext, useState } from "react";
import './style.scss'
import { FormContext } from '../form';
import x from '../../assets/img/icons/x.svg';

const Destination = ({ countries }) => {

    const { showDestination, modalDestination, changeFormData } = useContext(FormContext)

    const [option, setOption] = useState('')
    const [searchInput, setSearchInput] = useState([])
    const [input, setInput] = useState('')

    const handleClick = ({ target }) => { setOption(target.value) }

    const verify = () => {
        changeFormData({ name: 'destination', value: option })
        showDestination()
    }
    return (
        <>
            <article className={`modal-destination ${modalDestination === false ? 'hidden' : ''}`}>
                <section className="modal-destination__container">
                    <div className="modal-destination__title">
                        <h5>Selecciona tu destino</h5>
                        <img src={x} alt="close" onClick={showDestination} />
                    </div>
                    <select className="modal-destination__list-countries" onClick={(e) => { handleClick(e) }}>
                        {input ? <>
                            {searchInput.map((countries, index) => (
                                <option
                                    value={countries.name}
                                    key={index}>
                                    {`${countries.place}`}
                                </option>

                            ))}</> : <>
                            {countries.map((countries, index) => (
                                <option
                                    value={countries.name}
                                    key={index}>
                                    {`${countries.place}`}
                                </option>
                            ))}
                        </>}
                    </select>
                    <button onClick={verify}>Confirm</button>
                </section>

            </article>
        </>
    )
}

export default Destination