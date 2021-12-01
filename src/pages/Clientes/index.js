import avatar from "../../assets/cliente-section-avatar.svg";
import BotaoRosa from "../../components/BotaoRosa";
import { Header } from "../../components/Header";
import InputPesquisa from "../../components/InputPesquisa";
import MenuLateral from "../../components/MenuLateral";
import ModalCadastrarCliente from "../../components/ModalCadastrarCliente";
import ModalEditarUsuario from "../../components/ModalEditarUsuario";
import { useGlobal } from "../../hooks/useGlobal";
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
                  onClick={() => {
                    setOpenCadastrarCliente(true);
                  }}
                >
                  + Adicionar cliente
                </BotaoRosa>
              </div>
              <InputPesquisa />
            </div>
          </div>
        </section>
      </div>
      <ModalEditarUsuario />
      <ModalCadastrarCliente />
    </div>
  );
}

export default Clientes;
