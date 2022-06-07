import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { createContext, useState } from 'react';
// firestore
import credentials from '../credenciales';
const db = getFirestore(credentials);

const ListCardContext = createContext();

const ListCardProvider = ({ children }) => {

  const [list, setList] = useState([])

  const getList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'services'));
      const docs = querySnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      });
      console.log(docs)
      setList(docs);
    } catch (error) {
      console.log(error)
    }
  }


  const data = {
    list,
    setList,
    getList,
  }

  return (
    <ListCardContext.Provider value={data} >{children}</ListCardContext.Provider>
  )
}

export { ListCardProvider };

export default ListCardContext;