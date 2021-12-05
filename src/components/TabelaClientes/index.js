import { clientes } from "../../objClientes";
import "./style.css";
import novaCobranca from "../../assets/nova-cobranca.svg";
import clienteOrdenacao from "../../assets/clientes-ordenacao.svg";
import ModalCadastrarCobranca from "../ModalCadastrarCobranca";
import BotaoNovaCobranca from "../../components/BotaoNovaCobranca"
import { useGlobal } from "../../hooks/useGlobal";
import BotaoRosa from "../BotaoRosa";

function TabelaClientes() {
  const { setAbrirPopup, setOpenCadastrarCobranca } = useGlobal();
  return (
    <table className="clientes-tabela">
      <thead>
        <tr className="clientes--tr">
          <th className="clientes--th cliente--th">
            <img src={clienteOrdenacao} alt="" />
            <span>Cliente</span>
          </th>
          <th className="clientes--th">CPF</th>
          <th className="clientes--th">E-mail</th>
          <th className="clientes--th">Telefone</th>
          <th className="clientes--th">Status</th>
          <th className="clientes--th">Criar cobrança</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => {
          return (
            <tr key={cliente.id} className="clientes--tr">
              <td className="clientes--td">{cliente.nome}</td>
              <td className="clientes--td">{cliente.cpf}</td>
              <td className="clientes--td">{cliente.email}</td>
              <td className="clientes--td">{cliente.telefone}</td>
              <td className="clientes--td">
                {cliente.inadimplencia === true ? (
                  <span className="inadimplente--td">Inadimplente</span>
                ) : (
                  <span className="emdia--td">Em dia</span>
                )}
              </td>
              <td className="clientes--td">
                <BotaoNovaCobranca
                  onClick={() => {
                    setOpenCadastrarCobranca(true);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TabelaClientes;
