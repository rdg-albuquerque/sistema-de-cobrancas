import avatar from "../../assets/cliente-section-avatar.svg";
import BotaoRosa from "../../components/BotaoRosa";
import { Header } from "../../components/Header";
import InputPesquisa from "../../components/InputPesquisa";
import MenuLateral from "../../components/MenuLateral";
import ModalCadastrarCliente from "../../components/ModalCadastrarCliente";
import ModalEditarUsuario from "../../components/ModalEditarUsuario";
import TabelaClientes from "../../components/TabelaClientes";
import { useGlobal } from "../../hooks/useGlobal";
import filtro from "D:/Workspace/jscubos/modulo05-desafio/front-integral-m05-desafio/src/assets/filtro-pesquisa.svg";
import "./style.css";

function Clientes() {
  const { setAbrirPopup, setOpenCadastrarCliente } = useGlobal();

  return (
    <div className="clientes">
      <MenuLateral />
      <Header />
      <div className="clientes-section">
        <section className="clientes-section--container">
          <div className="clientes-section--top">
            <div>
              <img src={avatar} alt="" />
              <h1 className="clientes-section--h1">Clientes</h1>
            </div>
            <div>
              <div>
                <BotaoRosa
                  comprido
                  onClick={() => {
                    setOpenCadastrarCliente(true);
                  }}
                >
                  + Adicionar cliente
                </BotaoRosa>
              </div>
              <div className="filtro-input">
                <img src={filtro} alt="" />
              </div>
              <InputPesquisa />
            </div>
          </div>
          <TabelaClientes />
        </section>
      </div>
      <ModalEditarUsuario />
      <ModalCadastrarCliente />
    </div>
  );
}

export default Clientes;
