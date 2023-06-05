import { Formacao } from "./components/Formacao";
import { Experiencia } from "./components/Experienca";
import { Barra } from "./components/Barra";
import { TopoPerfil } from "./components/TopoPerfil";
import './App.css'

function App() {
  return (
    <div className="container-body">
      <header>
  
      </header>
      <Barra />
      <TopoPerfil />
      <Barra />
      <div className="meio">
        <Formacao />
        <Experiencia />
      </div>
      <Barra />
    </div>
  );
}

export default App;
