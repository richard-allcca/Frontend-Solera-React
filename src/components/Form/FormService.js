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
  const { service, createData } = useContext(ServiceContext);

  // ==========================================================
  // ? nuevo servicio
  // ==========================================================

  // * guarda servicio en estado local
  const [ formInput, setFormInput ] = useState(service)
  //* data de firabase o initialState
  const [ dataToEdit, setDataToEdit ] = useState(null)

  useEffect(() => {
    if (dataToEdit) {
      setFormInput(dataToEdit)
    } else {
      setFormInput(initialState)
    }
  }, [ dataToEdit ])

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
    // helpers

    let serviceCapitalizado = capitalizaValueObj(formInput);

    if (!formInput.id) {
      try {
        // await addDoc(collection(db, 'services'), { ...serviceCapitalizado });
        await createData(serviceCapitalizado)
        // alert('guardar servicio')
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        // await setDoc(doc(db, 'services', isServiceDb), { ...serviceCapitalizado });
        alert('actualizar servicio' + serviceCapitalizado)
      } catch (error) {
        console.log(error);
      }
    }
    handleReset();
  };

  const handleReset = () => {
    setFormInput(initialState)
    setDataToEdit(null)
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
          <Input type='button' valor='Cancelar' myClass='btn-outline-danger' />

        </div>

      </form>
    </div>
  );
};

export default FormService;
