import React, { useContext, useEffect, useState } from 'react'
// styles
import './card.css'
// context
import ServiceContext from './../../context/serviceContext';
// firebase
import Loading from './../Loading.js/Loading';



const Card2 = () => {
  const [ listCard, setlistCard ] = useState([])

  const { getList, list, fullCharge, setStateForm, deleteService } = useContext(ServiceContext)


  useEffect(() => {
    getList();
    setlistCard(list)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ fullCharge ])


  const handleDelete = async (id, listCard) => {
    try {
      const newList = await deleteService(id, listCard)
      setlistCard(newList)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <section className='list-cards'>

      {fullCharge === false ? <div className='loading'><Loading /></div>
        : listCard.map((item, id) => {
          return (

            <div key={id} className="card-content">

              <section className='card-details'>
                <h2 className='title'>{item.nombre}</h2>
                <p className='descripcion'>{item.descripcion}</p>
              </section>

              <section className='card-footer'>
                <input
                  type="button"
                  className='card-button'
                  value="Editar"
                  onClick={() => setStateForm(item)}
                />
                <input
                  type="button"
                  className='card-button'
                  value="Eliminar"
                  onClick={() => handleDelete(item.id, listCard)}
                />

              </section>

            </div>
          )
        })
      }

    </section>
  )
}

export default Card2;