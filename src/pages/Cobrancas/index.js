import { Header } from "../../components/Header";
import InputPesquisa from "../../components/InputPesquisa";
import MenuLateral from "../../components/MenuLateral";
import "./style.css";
import filtro from "../../../src/assets/filtro-pesquisa.svg";
import avatar from "../../../src/assets/cobranca-avatar.svg";
import TabelaCobrancas from "../../components/TabelaCobrancas";

function Cobrancas() {
  return (
    <div className="cobrancas">
      <MenuLateral />
      <Header />
      <section className="cobrancas-section">
        <div className="cobrancas--top">
          <div>
            <img src={avatar} alt="" />
            <h1 className="cobrancas--h1">Cobranças</h1>
          </div>
          <div>
            <div className="filtro-input">
              <img src={filtro} alt="" />
            </div>
            <InputPesquisa />
          </div>
        </div>
        <TabelaCobrancas />
      </section>
      ;
    </div>
  );
}

export default Cobrancas;
