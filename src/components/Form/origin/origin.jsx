import React, { useContext, useState } from "react";
import './style.scss';
import { FormContext } from '../form';
import x from '../../assets/img/icons/x.svg';

const Origin = ({ countries }) => {

    const { showOrigin, modalOrigin, changeFormData } = useContext(FormContext)

    const [option, setOption] = useState('')
    const [searchInput, setSearchInput] = useState([])
    const [input, setInput] = useState('')

    const handleClick = ({ target }) => { setOption(target.value) }

    const verify = () => {
        changeFormData({ name: 'origin', value: option })
        showOrigin()
    }

    return (
        <>
            <article className={`modal-place ${modalOrigin === false ? 'hidden' : ''}`}>
                <section className="modal-place__container">
                    <div className="modal-place__title">
                        <h5>Selecciona tu destino</h5>
                        <img src={x} alt="close" onClick={showOrigin} />
                    </div>
                    <select className="modal-place__list-countries" onClick={(e) => { handleClick(e) }}>
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

export default Origin