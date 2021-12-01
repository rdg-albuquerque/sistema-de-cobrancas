import { clientes } from "../../objClientes";
import "./style.css";
import emDiaAvatar from "../../assets/clientes-em-dia.svg";
import inadimplentesAvatar from "../../assets/clientes-inadimplentes.svg";

function TabelaResumoClientes({ emDia, inadimplentes }) {
  return (
    <table className="clientes-resumo">
      <caption className="clientes-resumo--titulo">
        <div className="clientes-resumo--container">
          <div className="clientes-resumo--container2">
            <img src={emDia ? emDiaAvatar : inadimplentesAvatar} alt="" />
            <span>
              {emDia && "Clientes em dia"}
              {inadimplentes && "Clientes inadimplentes"}
            </span>
          </div>
          <span
            className="clientes-resumo--contagem"
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
        <tr className="clientes-resumo--tr">
          <th className="clientes-resumo--th">Cliente</th>
          <th className="clientes-resumo--th">Data de venc.</th>
          <th className="clientes-resumo--th">Valor</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => {
          return (
            <tr key={cliente.id} className="clientes-resumo--tr">
              <td className="clientes-resumo--td">{cliente.nome}</td>
              <td className="clientes-resumo--td">{cliente.data_venc}</td>
              <td className="clientes-resumo--td">{`R$ ${cliente.valor},00`}</td>
            </tr>
          );
        })}
      </tbody>
      <caption className="clientes-resumo--footer">Ver todos</caption>
    </table>
  );
}

export default TabelaResumoClientes;
