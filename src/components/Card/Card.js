import './card.css'

const Card = ({ nombre, descripcion }) => {



  return (
    <div className='card-content'>
      <div className="card-details">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
      </div>

      <div className="card-footer">
        <a href="home" className="card-link">Editar</a>
        <a href="home" className="card-link" >Eliminar</a>
      </div>
    </div>

  )
}

export default Card