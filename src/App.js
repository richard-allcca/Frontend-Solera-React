import { useContext, useEffect } from 'react';
// firebase
import { deleteDoc, doc, getDoc, getFirestore } from 'firebase/firestore';
// styles
import './App.css';
// context
import ListCardContext from './context/listCardContext';
import ServiceContext from './context/serviceContext';
// components
import FormService from './components/Form/FormService';
import Card from './components/Card/Card';
import Navbar from './components/NavBar/Navbar';
// conecxion con firebase
import credentials from './credenciales'
const db = getFirestore(credentials);

function App() {

  const { list, getList } = useContext(ListCardContext)
  const { setService, serviceIdDb } = useContext(ServiceContext)


  useEffect(() => {
    getList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    if (serviceIdDb !== '') {
      console.log('boton de actualizar');
      getOneUser(serviceIdDb)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceIdDb])


  // TODO: ver donde va esta funcion
  const getOneUser = async (id) => {
    try {
      const docRef = doc(db, `services`, id)
      const docSnap = await getDoc(docRef)
      console.log(docSnap.data())
      // ? pintar los datos en formuario para actualizar
      setService(docSnap.data())

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1><strong>Servicios</strong></h1>
      </header>

      <Navbar />

      <main className='main'>

        <section className="list-cards">
          {list.map(item => {
            return <Card key={item.id} nombre={item.nombre} descripcion={item.descripcion} />
          })}
        </section>


        <FormService />

      </main>

    </div>
  );
}

export default App;
