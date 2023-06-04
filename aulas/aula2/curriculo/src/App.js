import { Nome } from "./Nome";
import { SobreMim } from "./SobreMim";
import { EuSobre } from "./EuSobre";
import { Perfil } from "./Perfil";
import './App.css'

function App() {
  return (
    <div className="container-body">
      <header>
        <button>oi</button>
      </header>
      <div className="inicio">
        <div className="imagem">
          <Perfil />
        </div>
        <div className="titulo">
          <Nome />
          <SobreMim />
          <EuSobre />
        </div>
      </div>
    </div>
  );
}

export default App;
