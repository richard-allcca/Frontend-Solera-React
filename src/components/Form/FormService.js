import React, { useContext, useEffect, useState } from 'react';
// useContext
import ServiceContext from '../../context/serviceContext';
// styles
import './formService.css';
// helpers
import capitalizaValueObj from '../../helpers/helperCapitalizar';
// firebase
import Input from '../Input/Input';


const initialState = {
  id: '',
  nombre: '',
  descripcion: '',
}


const FormService = () => {
  // constexto
  const { stateForm, getList, setFullCharge, createData } = useContext(ServiceContext);
  // state local
  const [ formInput, setFormInput ] = useState(initialState)

  console.log('component FormService')

  useEffect(() => {
    setFormInput(stateForm)
  }, [ stateForm ])


  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [ e.target.name ]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formInput.nombre || !formInput.descripcion) {
      return alert('Todos los campos son obligatorios')
    }

    let serviceCapitalizado = capitalizaValueObj(formInput);

    try {
      await createData(serviceCapitalizado)
      setFullCharge(false);
      getList();
    } catch (error) {
      console.log(error);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setFormInput(initialState)
  }

  return (
    <div className="form-content">

      <h3 className="form-title">Servicio</h3>

      <form onSubmit={handleSubmit} className="form">

        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formInput.nombre}
          maxLength="22"
          onChange={handleChange} />

        <label htmlFor="descripción">Descripción</label>
        <input
          type="text"
          name="descripcion"
          value={formInput.descripcion}
          maxLength="60"
          onChange={handleChange} />


        <div className="content-buttons">

          <Input type='submit' valor='Guardar' myClass='btn-outline-success' />
          <Input type='button' valor='Cancelar' myClass='btn-outline-danger' click={handleReset} />

        </div>

      </form>
    </div>
  );
};

export default FormService;
