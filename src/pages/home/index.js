import "./style.css";
import ResumoCobrancasPagas from "../../components/CardsCobrancas/CobrancasPagas";
import ResumoCobrancasVencidas from "../../components/CardsCobrancas/CobrancasVencidas";
import ResumoCobrancasPrevistas from "../../components/CardsCobrancas/CobrancasPrevistas";
import TabelaCobrancas from "../../components/TabelaCobrancas";
import { Header } from "../../components/Header";
import TabelaClientes from "../../components/TabelaClientes";
import ModalEditarUsuario from "../../components/ModalEditarUsuario";
import { useGlobal } from "../../hooks/useGlobal";
import avatar from "../../assets/cliente-section-avatar.svg";
import BotaoRosa from "../../components/BotaoRosa";
import InputPesquisa from "../../components/InputPesquisa";
import MenuLateral from "../../components/MenuLateral";

export default function Home() {
  const paginaAtual = window.location.pathname;

  const { setAbrirPopup } = useGlobal();

  function handleClosePopup() {
    setAbrirPopup(false);
  }
  return (
    <div className="home" onClick={handleClosePopup}>
      <MenuLateral />
      <Header />
      <section className="section">
        {paginaAtual === "/" && (
          <section className="home-section">
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
        )}
        {paginaAtual === "/clientes" && (
          <section className="clientes-section">
            <div className="clientes-section--top">
              <div>
                <img src={avatar} alt="" />
                <h1>Clientes</h1>
              </div>
              <div>
                <div>
                  <BotaoRosa>+ Adicionar cliente</BotaoRosa>
                </div>
                <InputPesquisa />
              </div>
            </div>
          </section>
        )}
        {paginaAtual === "/cobrancas" && (
          <section className="cobrancas-section"></section>
        )}
      </section>
      <ModalEditarUsuario />
    </div>
  );
}
