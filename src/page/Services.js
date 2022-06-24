import React from 'react'
import FormService from '../components/Form/FormService';
import Card2 from './../components/Card/Card2';

const Services = () => {



  return (
    <div className='App-main'>
      <Card2 />
      <FormService />
    </div>
  )
}

export default Services

// ! Importante
// validar que no esten vacios los campos del formulario(les quite el required)