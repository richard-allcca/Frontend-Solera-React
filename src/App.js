// styles
import './App.css';
// components
import Navbar from './components/NavBar/Navbar';
import Services from './page/Services';
import Header from './components/Header/Header';


function App() {



  return (
    <div className="App">

      <Header />

      <Navbar />

      <Services />

    </div>
  );
}

export default App;
