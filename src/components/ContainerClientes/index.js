import avatar from "../../assets/cliente-section-avatar.svg";
import BotaoRosa from "../../components/BotaoRosa";
import InputPesquisa from "../../components/InputPesquisa";
import TabelaClientes from "../../components/TabelaClientes";
import { useGlobal } from "../../hooks/useGlobal";
import "./style.css";
import filtro from "../../../src/assets/filtro-pesquisa.svg";
import ModalClientes from "../ModalClientes";

function ContainerClientes() {
  const { setOpenModalCliente } = useGlobal();
  return (
    <div className="clientes--container">
      <div className="clientes--top">
        <div>
          <img src={avatar} alt="" />
          <h1 className="clientes--h1">Clientes</h1>
        </div>
        <div>
          <div>
            <BotaoRosa
              comprido
              onClick={() => {
                setOpenModalCliente(true);
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
      <ModalClientes />
    </div>
  );
}
export default ContainerClientes;
