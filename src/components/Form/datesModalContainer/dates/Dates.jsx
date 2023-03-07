import React, { useContext, useState } from 'react';
import { Calendar } from 'react-date-range';
import { format } from 'date-fns';
import { FormContext } from '../../form';
import './style.scss';


const DateOutReturn = () => {

    const { changeFormData } = useContext(FormContext)
    const [calendarOut, setCalendarOut] = useState('')
    const [calendarReturn, setCalendarReturn] = useState('')

    const handleSelectOut = (date) => {

        setCalendarOut(format(date, 'MM/dd/yyyy'))
        changeFormData({ name: 'dateOut', value: calendarOut })

    }

    const handleSelectReturn = (date) => {

        setCalendarReturn(format(date, 'MM/dd/yyyy'))
        changeFormData({ name: 'dateReturn', value: calendarReturn })

    }

    return (
        <>
            <article className='modalDates'>
                <section>
                    <h4>Salida</h4>
                    <input readOnly value={calendarOut} />
                    <Calendar date={new Date()}
                        className='calendar'
                        onChange={handleSelectOut} size='sñ'/>
                </section>
                <section>
                    <h4>Retorno</h4>
                    <input readOnly value={calendarReturn} />
                    <Calendar date={new Date()}
                        className='calendar'
                        onChange={handleSelectReturn} />
                </section>
            </article>
        </>
    )
}

export default DateOutReturn