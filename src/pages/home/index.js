import "./style.css";
import ResumoCobrancasPagas from "../../components/CardsCobrancas/CobrancasPagas";
import ResumoCobrancasVencidas from "../../components/CardsCobrancas/CobrancasVencidas";
import ResumoCobrancasPrevistas from "../../components/CardsCobrancas/CobrancasPrevistas";
import TabelaCobrancas from "../../components/TabelaCobrancas";
import TabelaClientes from "../../components/TabelaClientes";

export default function Home() {
  return (
    <div className="home">
      <div className="menu-lateral">Substituir pelo side-menu</div>
      <div className="header">Substituir pelo header</div>
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
    </div>
  );
}
