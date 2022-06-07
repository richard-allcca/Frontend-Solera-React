import './App.css';
import Card from './components/Card/Card';
import FormService from './components/Form/FormService';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><strong>Servicios</strong></h1>
      </header>

      <Navbar />

      <main className='main'>


        <section className="list-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>


        <div className="form-content">
          <h3>Servicio</h3>
          <FormService />
        </div>

      </main>
    </div>
  );
}

export default App;
