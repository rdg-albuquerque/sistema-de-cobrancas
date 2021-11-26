import { clientes } from "../../objClientes";
import "./style.css";
import emDiaAvatar from "../../assets/clientes-em-dia.svg";
import inadimplentesAvatar from "../../assets/clientes-inadimplentes.svg";

function TabelaClientes({ emDia, inadimplentes }) {
  return (
    <table className="clientes-tabela">
      <caption className="clientes-titulo">
        <div className="clientes-titulo--container">
          <div className="clientes-titulo--container2">
            <img src={emDia ? emDiaAvatar : inadimplentesAvatar} alt="" />
            <span>
              {emDia && "Clientes em dia"}
              {inadimplentes && "Clientes inadimplentes"}
            </span>
          </div>
          <span
            className="clientes-titulo--contagem"
            style={
              emDia
                ? { background: "#EEF6F6", color: "#1FA7AF" }
                : { background: "#FFEFEF", color: "#971D1D" }
            }
          >
            {clientes.length}
          </span>
        </div>
      </caption>
      <thead>
        <tr className="clientes-tr">
          <th className="clientes-th">Cliente</th>
          <th className="clientes-th">Data de venc.</th>
          <th className="clientes-th">Valor</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente, index) => {
          return (
            <tr className="clientes-tr">
              <td className="clientes-td">{cliente.nome}</td>
              <td className="clientes-td">{cliente.data_venc}</td>
              <td className="clientes-td">{`R$ ${cliente.valor},00`}</td>
            </tr>
          );
        })}
      </tbody>
      <caption className="clientes--footer">Ver todos</caption>
    </table>
  );
}

export default TabelaClientes;
