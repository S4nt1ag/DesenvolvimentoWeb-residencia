import { Nome } from "./Nome";
import { EuSobre } from "./EuSobre";
import { SobreMim } from "./SobreMim";
import { Perfil } from "./Perfil";

export function TopoPerfil() {
    return (
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
    )
}