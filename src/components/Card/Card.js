import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className='card-content'>
      <div className="card-details">
        <h2>Electricidad</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At</p>
      </div>

      <div className="card-footer">
        <a href="home" className="card-link">Editar</a>
        <a href="home" className="card-link">Eliminar</a>
      </div>
    </div>

  )
}

export default Card