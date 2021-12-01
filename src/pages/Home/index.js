import ResumoCobrancasPagas from "../../components/CardsCobrancas/CobrancasPagas";
import ResumoCobrancasPrevistas from "../../components/CardsCobrancas/CobrancasPrevistas";
import ResumoCobrancasVencidas from "../../components/CardsCobrancas/CobrancasVencidas";
import { Header } from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import ModalEditarUsuario from "../../components/ModalEditarUsuario";
import TabelaClientes from "../../components/TabelaClientes";
import TabelaCobrancas from "../../components/TabelaCobrancas";
import { useGlobal } from "../../hooks/useGlobal";
import "./style.css";

export default function Home() {
  const { setAbrirPopup, setOpenCadastrarCliente } = useGlobal();

  function handleClosePopup() {
    setAbrirPopup(false);
  }
  return (
    <div className="home" onClick={handleClosePopup}>
      <MenuLateral />
      <Header />
      <section className="home-section">
        <section className="home-section--container">
          <section className="home-section--1">
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
          <section className="home-section--2">
            <TabelaClientes emDia />
            <TabelaClientes inadimplentes />
          </section>
        </section>
      </section>
      <ModalEditarUsuario />
    </div>
  );
}
