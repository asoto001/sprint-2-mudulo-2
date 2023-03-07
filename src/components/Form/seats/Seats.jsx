import React, { useContext, useState } from "react";
import { FormContext } from "../form";
import './style.scss'

const Seats = () => {

    const { showModalSeats, modalSeats, changeFormData } = useContext(FormContext)

    const [initial, setInitial] = useState(1)
    const [childs, setChilds] = useState(1)
    const [babys, setBabys] = useState(1)

    const all = initial + childs + babys

    const handleIncrease = (name) => {

        if (name === 'initial') {
            setInitial(initial + 1)
        }
        else if (name === 'childs') {
            setChilds(childs + 1)
        }
        else if (name === 'babys') {
            setBabys(babys + 1)
        }
    }

    const handleDecrease = (name) => {
        if (name === 'initial') {
            const newValue = initial > 0 ? initial - 1 : 0;
            setInitial(newValue);

        }
        else if (name === 'childs') {
            const newValue = childs > 0 ? childs - 1 : 0;
            setChilds(newValue);
        }
        else if (name === 'babys') {
            const newValue = babys > 0 ? babys - 1 : 0;
            setBabys(newValue);
        }
    }

    const verify = () => {
        changeFormData({
            name: 'seats',
            value: all
        })
        sessionStorage.setItem('setas', JSON.stringify(all))
        showModalSeats()
    }

    return (
        <>
            <article className={`modal-seats ${modalSeats === false ? 'hidden' : ''}`}>
                <section className='modal-seats__info-container'>
                    <section className='modal-seats__adults amount-seats'>
                        <div>
                            <h4>Adultos <span>(+13 años)</span></h4>
                        </div>
                        <div>
                            <button className='plus-minus'  onClick={() => { handleDecrease('initial') }}>-</button>
                            <span>{initial}</span>
                            <button className='plus-minus'  onClick={() => { handleIncrease('initial') }}>+</button>
                        </div>
                    </section>
                    <section className='modal-seats__childs amount-seats'>
                        <div>
                            <h4>Niños <span>(2 - 12 años)</span></h4>
                        </div>
                        <div>
                            <button className='plus-minus'  onClick={() => { handleDecrease('childs') }}>-</button>
                            <span>{childs}</span>
                            <button className='plus-minus'  onClick={() => { handleIncrease('childs') }}>+</button>
                        </div></section>
                    <section className='modal-seats__babys amount-seats'>
                        <div>
                            <h4>Bebés <span>(-2)</span></h4>
                        </div>
                        <div>
                            <button className='plus-minus'  onClick={() => { handleDecrease('babys') }}>-</button>
                            <span>{babys}</span>
                            <button className='plus-minus'  onClick={() => { handleIncrease('babys') }}>+</button>
                        </div>
                    </section>
                    <input readOnly value={`${initial <= 1 ? initial + ' Adulto' : initial + ' Adultos'} ${childs <= 1 ? childs + ' Niño' : childs + ' Niños'} ${babys <= 1 ? babys + ' Bebé' : babys + ' Bebes'}`} />
                    <button className='modal-seats__button' onClick={verify}>Confirmar</button>
                </section>
            </article>
        </>
    )
}

export default Seats