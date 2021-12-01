import { Header } from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import "./style.css";

function Cobrancas() {
  return (
    <div className="cobrancas">
      <MenuLateral />
      <Header />
      <section className="cobrancas-section"></section>;
    </div>
  );
}

export default Cobrancas;
