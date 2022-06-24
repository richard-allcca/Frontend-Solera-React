import React from 'react'
// styles
import './card.css'

const Card2 = () => {

  const data = [
    {
      nombre: 'Richard',
      descripcion: 'Developer'
    },
    {
      nombre: 'Juan',
      descripcion: 'Backend'
    },
    {
      nombre: 'Juan',
      descripcion: 'Backend'
    }
  ]


  return (
    <section className='list-cards'>

      {
        data.map((item, id) => {
          return (

            <div key={id} className="card-content">

              <section className='card-details'>
                <h2 className='title'>Nombre</h2>
                <p className='descripcion'>Descripción</p>
              </section>

              <section className='card-footer'>
                <input
                  type="button"
                  className='card-button'
                  value="Editar"
                  onClick={() => { }}
                />
                <input
                  type="button"
                  className='card-button'
                  value="Eliminar"
                  onClick={() => { }}
                />

              </section>

            </div>
          )
        })
      }

    </section>
  )
}

export default Card2