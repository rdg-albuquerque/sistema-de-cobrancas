import ResumoCobrancasPagas from "../../components/CardsCobrancas/CobrancasPagas";
import ResumoCobrancasPrevistas from "../../components/CardsCobrancas/CobrancasPrevistas";
import ResumoCobrancasVencidas from "../../components/CardsCobrancas/CobrancasVencidas";
import { Header } from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import ModalEditarUsuario from "../../components/ModalEditarUsuario";
import TabelaResumoClientes from "../../components/TabelaResumoClientes";
import TabelaResumoCobrancas from "../../components/TabelaResumoCobrancas";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <MenuLateral />
      <Header />
      <section className="home-section">
        <section className="home-section--container">
          <section className="home-section--1">
            <div className="container-pagas">
              <ResumoCobrancasPagas />
              <TabelaResumoCobrancas pagas />
            </div>
            <div className="container-vencidas">
              <ResumoCobrancasVencidas />
              <TabelaResumoCobrancas vencidas />
            </div>
            <div className="container-previstas">
              <ResumoCobrancasPrevistas />
              <TabelaResumoCobrancas previstas />
            </div>
          </section>
          <section className="home-section--2">
            <TabelaResumoClientes emDia />
            <TabelaResumoClientes inadimplentes />
          </section>
        </section>
      </section>
      <ModalEditarUsuario />
    </div>
  );
}
