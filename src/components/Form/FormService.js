import { addDoc, collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import React, { useContext } from 'react';
import ServiceContext from '../../context/serviceContext';
import './formService.css';
// firebase
import appFirestore from '../../credenciales';
import ListCardContext from '../../context/listCardContext';
const db = getFirestore(appFirestore);

const FormService = () => {

  const { getList } = useContext(ListCardContext)
  const { serviceIdDb, setServiceIdDb, service, handleChange, handleCancelar, reset } = useContext(ServiceContext);
  const { nombre, descripcion } = service;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (serviceIdDb === '') {
      try {
        await addDoc(collection(db, 'services'), { ...service });
      } catch (error) {
        console.log(error);
      }

    } else {

      try {
        await setDoc(doc(db, 'services', serviceIdDb), { ...service });
        setServiceIdDb('')

      } catch (error) {
        console.log(error)
      }
    }

    reset()
    getList()
  };

  return (
    <div className="form-content">
      <h3>Servicio</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-input">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleChange} />

          <label htmlFor="descripción">Descripción</label>
          <input type="text" id="descripción" name="descripcion" value={descripcion} onChange={handleChange} />
        </div>
        <div className="content-button">
          <input type="submit" value="Guardar" className="btn btn-outline-success " />
          <input type="button" value="Cancelar" className="btn btn-outline-danger" onClick={handleCancelar} />
        </div>
      </form>
    </div>
  );
};

export default FormService;
