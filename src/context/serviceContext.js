import React, { createContext, useState } from 'react';
// Firebase
import { addDoc, collection, setDoc, doc, getFirestore, deleteDoc, getDocs } from 'firebase/firestore';
import appFirestore from '../../src/credenciales'
const db = getFirestore(appFirestore)

const ServiceContext = createContext();

const initialState = {
  nombre: '',
  descripcion: '',
}


const ServiceProvider = ({ children }) => {

  // confirmación de carga de servicios desde firebase
  const [ fullCharge, setFullCharge ] = useState(false)
  // lista de servicios descargados
  const [ list, setList ] = useState([])
  // contenido de inputs en formulario
  const [ stateForm, setStateForm ] = useState(initialState)


  //* =========================================================
  const getList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'services'));
      const docs = querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });
      setList(docs);
      setFullCharge(true)
    } catch (error) {
      console.log(error)
    }
  }

//* =========================================================
  const createData = async (form) => {

    const { nombre, descripcion } = form;

    try {
      await addDoc(collection(db, 'services'), { nombre, descripcion });
      getList();
    } catch (error) {
      console.log(error);
    }
  }


  //TODO =========================================================
  const editService = async (service) => {

    const { nombre, descripcion, id } = service;

    setStateForm({ nombre, descripcion })

    try {

      // await setDoc(doc(db, 'services', id), { nombre, descripcion });
      // eslint-disable-next-line array-callback-return
      const newList = list.map(item => {
        if (item.id === id) {
          item.nombre = nombre;
          item.descripcion = descripcion;
        }

      })
      console.log(newList)
      setList(newList)
    } catch (error) {
      console.log(error);
    }
  }

  //* =========================================================
  const deleteService = async (id, listCard) => {
    let confirm = window.confirm('¿Estás seguro de que quieres eliminar este servicio?')

    if (confirm) {
      try {
        await deleteDoc(doc(db, `services`, id));
        const newList = listCard.filter(item => item.id !== id)
        setFullCharge(false)
        setList(newList)
      } catch (error) {
        console.log(error);
      }
    }
    return;
  };

  const data = {
    stateForm,//
    setStateForm,
    list,//
    getList,//
    fullCharge,//
    setFullCharge,//
    createData,//
    editService,//
    deleteService,//
  }

  return (
    <ServiceContext.Provider value={data} >{children}</ServiceContext.Provider>
  )
}

export { ServiceProvider };

export default ServiceContext;