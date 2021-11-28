import "./style.css";
import ResumoCobrancasPagas from "../../components/CardsCobrancas/CobrancasPagas";
import ResumoCobrancasVencidas from "../../components/CardsCobrancas/CobrancasVencidas";
import ResumoCobrancasPrevistas from "../../components/CardsCobrancas/CobrancasPrevistas";
import TabelaCobrancas from "../../components/TabelaCobrancas";
import { Header } from "../../components/Header";
import TabelaClientes from "../../components/TabelaClientes";
import ModalEditarUsuario from "../../components/ModalEditarUsuario";
import { useGlobal } from "../../hooks/useGlobal";

export default function Home() {
  const { setAbrirPopup } = useGlobal();

  function handleClosePopup() {
    setAbrirPopup(false);
  }
  return (
    <div className="home" onClick={handleClosePopup}>
      <div className="menu-lateral">Substituir pelo side-menu</div>
      {/* <div className="header">Substituir pelo header</div> */}
      <Header />
      <section className="section">
        <section className="section--1">
          <div className="container-pagas">
            <ResumoCobrancasPagas />
            <TabelaCobrancas pagas />
          </div>
          <div className="container-vencidas">
            <ResumoCobrancasVencidas />
            <TabelaCobrancas vencidas />
          </div>
          <div className="container-previstas">
            <ResumoCobrancasPrevistas />
            <TabelaCobrancas previstas />
          </div>
        </section>
        <section className="section--2">
          <TabelaClientes emDia />
          <TabelaClientes inadimplentes />
        </section>
      </section>
      <ModalEditarUsuario />
    </div>
  );
}
