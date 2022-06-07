import React, { createContext, useState } from 'react';

const ServiceContext = createContext();

const initialState = {
  nombre: '',
  descripcion: '',
}


const ServiceProvider = ({ children }) => {

  const [service, setService] = useState(initialState)

  const [serviceIdDb, setServiceIdDb] = useState('')

  const handleCancelar = (e) => {
    setService(initialState)
  }

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  }

  const reset = () => {
    setService(initialState)
  }

  const data = {
    service,
    setService,
    handleChange,
    serviceIdDb,
    setServiceIdDb,
    handleCancelar,
    reset,
  }

  return (
    <ServiceContext.Provider value={data} >{children}</ServiceContext.Provider>
  )
}

export { ServiceProvider };

export default ServiceContext;