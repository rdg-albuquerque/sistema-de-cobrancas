import avatar from "../../assets/cliente-section-avatar.svg";
import BotaoRosa from "../../components/BotaoRosa";
import InputPesquisa from "../../components/InputPesquisa";
import TabelaClientes from "../../components/TabelaClientes";
import { useGlobal } from "../../hooks/useGlobal";
import "./style.css";
import filtro from "../../../src/assets/filtro-pesquisa.svg";

function ContainerClientes() {
  const { setOpenCadastrarCliente } = useGlobal();
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
    </div>
  );
}
export default ContainerClientes;
