import React from "react";
import './style.scss';

import eleven from '../assets/img/payMethods/7-eleven.svg';
import amex from '../assets/img/payMethods/Amex.svg';
import invex from '../assets/img/payMethods/banco.jpg';
import ahorro from '../assets/img/payMethods/farmacias.svg';
import mastercard from '../assets/img/payMethods/Mastercard.svg';
import oxxo from '../assets/img/payMethods/oxxo.svg';
import paypal from '../assets/img/payMethods/paypal.svg';
import visa from '../assets/img/payMethods/Visa.svg';
import walmart from '../assets/img/payMethods/walmart.svg';

const PaymentSec = () => {

    return (
        <>
            <h2>Pago seguro</h2>
            <section className="pay-sec">

                

                <section className="pay-sec__containers">
                    <section className="pay-sec__credit-card">
                        <p>Tarjeta de credito, tarjeta de débito y pago electrónico</p>
                        <div>
                            <img src={amex} alt="Amex" />
                            <img src={paypal} alt="paypal" />
                            <img src={invex} alt="invex" />
                            <img src={mastercard} alt="mastercard" />
                            <img src={visa} alt="visa" />
                        </div>
                    </section>
                    <section className="pay-sec__cash">
                        <p>Efectivo en cualquiera de las sucursales participantes</p>
                        <div>
                            <img src={oxxo} alt="oxxo" />
                            <img src={eleven} alt="eleven" />
                            <img src={walmart} alt="walmart" />
                            <img src={ahorro} alt="ahorro" />
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default PaymentSec