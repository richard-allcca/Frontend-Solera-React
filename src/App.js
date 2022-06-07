import { useContext, useEffect } from 'react';
// styles
import './App.css';
// context
import ListCardContext from './context/listCardContext';
// components
import FormService from './components/Form/FormService';
import Card from './components/Card/Card';
import Navbar from './components/NavBar/Navbar';


/**
 * It's a function that returns a div that contains a header, a navbar, a main section that contains a
 * section with a list of cards and a form Service component.
 */
function App() {

  const { list, getList } = useContext(ListCardContext)

  useEffect(() => {
    getList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="App">

      <header className="App-header">
        <h1><strong>Servicios</strong></h1>
      </header>

      <Navbar />

      <main className='App-main'>

        <section className="list-cards">
          {list.map(item => {
            return <Card key={item.id} id={item.id} nombre={item.nombre} descripcion={item.descripcion} />
          })}
        </section>

        <FormService />

      </main>

    </div>
  );
}

export default App;
