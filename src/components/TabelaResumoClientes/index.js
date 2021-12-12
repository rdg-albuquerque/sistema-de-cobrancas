import "./style.css";
import emDiaAvatar from "../../assets/clientes-em-dia.svg";
import inadimplentesAvatar from "../../assets/clientes-inadimplentes.svg";
import { useEffect, useState } from "react";
import { get } from "../../utils/requests";
import { notificacaoErro } from "../../utils/notificacao";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import { useNavigate } from "react-router-dom";

function TabelaResumoClientes({ emDia, inadimplentes }) {
  const { token } = useAuth();
  const { setListaClientesFiltrados } = useGlobal();
  const [localClientes, setLocalClientes] = useState([]);
  const navigate = useNavigate();

  function filtrarClientes(lista, status) {
    return lista.filter((cliente) => cliente.status === status);
  }

  useEffect(() => {
    async function getData() {
      try {
        const { data: listaClientes } = await get("/cliente", token);
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
      } catch (error) {
        console.log(error.response.data);
        notificacaoErro("Houve um erro ao atualizar as cobrancas");
      }
    }
    getData();
    //eslint-disable-next-line
  }, []);

  function handleVerTodos() {
    setListaClientesFiltrados(localClientes);
    navigate("/clientes");
  }

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
                <td className="clientes-resumo--td"></td>
                <td className="clientes-resumo--td"></td>
              </tr>
            );
          })}
      </tbody>
      <caption onClick={handleVerTodos} className="clientes-resumo--footer">
        Ver todos
      </caption>
    </table>
  );
}

export default TabelaResumoClientes;
