import React from 'react';
import './formService.css';

const FormService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <div className='form-content'>
      <h3>Servicio</h3>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-input'>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id='nombre' />

          <label htmlFor="descripción">Descripción</label>
          <input type="text" id='descripción' />
        </div>
        <div className="content-button">
          <input type="submit" value="Guardar" className='btn btn-outline-success ' />
          <input type="button" value="Cancelar" className='btn btn-outline-danger' />
        </div>
      </form>


    </div>
  )
}

export default FormService