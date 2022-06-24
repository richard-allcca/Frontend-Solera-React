import React from 'react'

const Input = ({ type, valor, myClass }) => {


  const handleChange = (e) => {
    // if (name === 'nombre') {
    //   return console.log('guardar')
    // }
    // console.log('sin evento')
    // return
  }

  return (
    <input
      type={type}
      value={valor}
      onChange={handleChange}
      className={`btn btn-service ${myClass}`}
    />
  )
}

export default Input

// ! Importante
// darle funcionalida a los botones del formulario y támbien de los cards