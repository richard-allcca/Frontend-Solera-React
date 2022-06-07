import { deleteDoc, doc, getDoc, getFirestore } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import ServiceContext from '../../context/serviceContext';
import './card.css'
// coneccion con firebase
import credentials from '../../credenciales'
import ListCardContext from '../../context/listCardContext';
const db = getFirestore(credentials);

const Card = ({ id, nombre, descripcion }) => {

  const { getList } = useContext(ListCardContext)
  const { setService, serviceIdDb, setServiceIdDb } = useContext(ServiceContext)

  useEffect(() => {
    if (serviceIdDb !== '') {
      getOneUser(serviceIdDb)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceIdDb])


  const getOneUser = async (id) => {
    try {
      const docRef = doc(db, `services`, id)
      const docSnap = await getDoc(docRef)
      setService(docSnap.data())

    } catch (error) {
      console.log(error)
    }
  }

  const deleteService = async (id) => {
    console.log(id);
    await deleteDoc(doc(db, `services`, id))
    getList()
  }

  return (
    <div className='card-content'>
      <div className="card-details">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
      </div>

      <div className="card-footer">
        <input type="button" href="home" className="card-button" onClick={() => setServiceIdDb(id)} value="Editar" />
        <input type="button" className="card-button" onClick={() => deleteService(id)} value="Eliminar" />
      </div>
    </div>

  )
}

export default Card