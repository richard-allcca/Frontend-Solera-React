import React, { createContext, useState } from 'react';
import { addDoc } from 'firebase/firestore';

const ServiceContext = createContext();

const initialState = {
  nombre: '',
  descripcion: '',
}


/**
 * It's a function that returns a ServiceContext.Provider component that has a value prop that is an
 * object that contains the state of the service, a function to set the state of the service, a
 * function to handle the change of the state of the service, a function to reset the state of the
 * service, and a function to cancel the state of the service.
 * @returns The data object is being returned.
 */
const ServiceProvider = ({ children }) => {

  const [service, setService] = useState(initialState)

  // const [serviceIdDb, setServiceIdDb] = useState('')
  const [ idService, setIdService ] = useState('')


  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  }

  const createData = async (form) => {
    console.log(form)
    // try {
    //   await addDoc('services', { ...form })
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const reset = () => {
    // TODO: resolviendo
    console.log(service)
    console.log(idService)
  }

  const data = {
    service,
    setService,
    handleChange,
    reset,
    idService,
    setIdService,
    createData
  }

  return (
    <ServiceContext.Provider value={data} >{children}</ServiceContext.Provider>
  )
}

export { ServiceProvider };

export default ServiceContext;