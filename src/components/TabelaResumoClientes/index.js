import "./style.css";
import emDiaAvatar from "../../assets/clientes-em-dia.svg";
import inadimplentesAvatar from "../../assets/clientes-inadimplentes.svg";
import { useGlobal } from "../../hooks/useGlobal";
import { useEffect, useState } from "react";

function TabelaResumoClientes({ emDia, inadimplentes }) {
  const { getClientes } = useGlobal();
  const [localClientes, setLocalClientes] = useState([]);

  function filtrarClientes(lista, status) {
    return lista.filter((cliente) => cliente.status === status);
  }

  useEffect(() => {
    async function getData() {
      const listaClientes = await getClientes();
      if (emDia) {
        const clientesEmDia = filtrarClientes(listaClientes, "Em dia");
        return setLocalClientes(clientesEmDia);
      }
      if (inadimplentes) {
        const clientesInadimplentes = filtrarClientes(
          listaClientes,
          "Inadimplente"
        );
        return setLocalClientes(clientesInadimplentes);
      }
    }
    getData();
    //eslint-disable-next-line
  }, []);

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
            {localClientes.length}
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
        {!!localClientes &&
          localClientes.map((cliente) => {
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
