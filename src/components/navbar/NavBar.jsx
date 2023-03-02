import React from 'react';
import './style.scss';
import Form from '../Form/form';

const NavBar = () => {



  return (
    <>
      <section className='navbar-sec'>
        <div className='navbar-sec__form-container'>
          <Form />
        </div>
        <div className='navbar-sec__fly'></div>
      </section>
    </>
  )
}

export default NavBar
