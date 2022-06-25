import { deleteDoc, doc, getDoc, getFirestore } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
// useContext
import ServiceContext from '../../context/serviceContext';
import ListCardContext from '../../context/listCardContext';
// styles
import './card.css';
// coneccion con firestore
import credentials from '../../credenciales';
const db = getFirestore(credentials);


/**
 * I'm trying to get the data from the database and set it in the state of the ServiceContext.
 * 
 * I'm using the useEffect hook to get the data from the database and set it in the state of the
 * ServiceContext.
 * 
 * I'm using the useContext hook to get the data from the ServiceContext.
 * 
 * I'm using the useContext hook to get the data from the ListCardContext.
 * 
 * @returns The component is being returned.
 */
const Card = ({ id, nombre, descripcion }) => {
  const { getList } = useContext(ListCardContext);
  const { setService, idService, setIdService } = useContext(ServiceContext);

  useEffect(() => {
    if (idService !== '') {
      getOneUser(idService);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ idService ]);

  const getOneUser = async (id) => {
    try {
      const docRef = doc(db, `services`, id);
      const docSnap = await getDoc(docRef);
      setService(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * When the Eliminar button is clicked, delete the document with the id of the button that was clicked.
   * When the Editar button is clicked, update the document with the id of the button that was clicked.
   * @param id - a modified card or a new list of cards 
   */
  const deleteService = async (id) => {
    await deleteDoc(doc(db, `services`, id));
    getList();
  };


  return (
    <div className="card-content">

      <section className="card-details">
        <h2 className='title'>{nombre}</h2>
        <p className='descripcion'>{descripcion}</p>
      </section>

      <section className="card-footer">
        <input
          type="button"
          className="card-button"
          value="Editar"
          onClick={() => setIdService(id)}
        />
        <input
          type="button"
          className="card-button"
          value="Eliminar"
          onClick={() => deleteService(id)}
        />
      </section>

    </div>
  );
};

export default Card;
