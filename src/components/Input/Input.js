import React from 'react'

const Input = ({ type, valor, myClass, click }) => {


  return (
    <input
      type={type}
      value={valor}
      className={`btn btn-service ${myClass}`}
      onClick={click}
    />
  )
}

export default Input