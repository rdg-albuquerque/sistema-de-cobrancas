import { useParams } from "react-router";
import editar from "../../assets/editar.svg";
import excluir from "../../assets/excluir.svg";
import clienteOrdenacao from "../../assets/ordenacao.svg";
import { cobrancas } from "../../objCobrancas";
import "./style.css";

function TabelaCobrancas() {
  const { user_id } = useParams();
  return (
    <table className="cobrancas-tabela">
      <thead>
        <tr className="cobrancas--tr">
          {!user_id && (
            <th className="cobrancas--th">
              <div>
                <img src={clienteOrdenacao} alt="" />
                <span>Cliente</span>
              </div>
            </th>
          )}
          <th className="cobrancas--th">ID Cob.</th>
          <th className="cobrancas--th">
            <div>
              <img src={clienteOrdenacao} alt="" />
              <span>Valor</span>
            </div>
          </th>
          <th className="cobrancas--th">
            <div>
              <img src={clienteOrdenacao} alt="" />
              <span>Data de venc.</span>
            </div>
          </th>
          <th className="cobrancas--th">Status</th>
          <th className="cobrancas--th">Descrição</th>
          <th className="cobrancas--th"></th>
        </tr>
      </thead>
      <tbody>
        {cobrancas.map((cobranca, index) => {
          return (
            <tr
              style={
                index === cobrancas.length - 1 ? { borderBottom: "none" } : {}
              }
              key={cobranca.id}
              className="cobrancas--tr"
            >
              {!user_id && (
                <td className="cobrancas--td">{cobranca.cliente_nome}</td>
              )}
              <td className="cobrancas--td">{cobranca.id}</td>
              <td className="cobrancas--td">{cobranca.valor}</td>
              <td className="cobrancas--td">{cobranca.data_vencimento}</td>
              <td className="cobrancas--td">
                {cobranca.status === "vencida" ? (
                  <span className="vencida--td">Vencida</span>
                ) : cobranca.status === "emdia" ? (
                  <span className="cobrancas--td-emdia">Em dia</span>
                ) : (
                  <span className="pendente--td">Pendente</span>
                )}
              </td>
              <td className="cobrancas--td">{cobranca.descricao}</td>
              <td className="cobrancas--td-imgs">
                <div>
                  <img src={editar} alt="" />
                  <img src={excluir} alt="" />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TabelaCobrancas;
