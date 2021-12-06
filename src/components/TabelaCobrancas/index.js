import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import editar from "../../assets/editar.svg";
import excluir from "../../assets/excluir.svg";
import clienteOrdenacao from "../../assets/ordenacao.svg";
import { useGlobal } from "../../hooks/useGlobal";
import formatarData from "../../utils/formatar-data";
import "./style.css";

function TabelaCobrancas() {
  const { user_id } = useParams();
  const { listaCobrancas, atualizarCobrancas, atualizarCobrancasPorCliente } =
    useGlobal();

  useEffect(() => {
    !user_id ? atualizarCobrancas() : atualizarCobrancasPorCliente(user_id);
    //eslint-disable-next-line
  }, []);

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
        {!!listaCobrancas &&
          listaCobrancas.map((cobranca, index) => {
            return (
              <tr
                style={
                  index === listaCobrancas.length - 1
                    ? { borderBottom: "none" }
                    : {}
                }
                key={index}
                className="cobrancas--tr"
              >
                {!user_id && (
                  <td className="cobrancas--td nome">
                    <Link to="">{cobranca.cliente_nome}</Link>
                  </td>
                )}
                <td className="cobrancas--td">{cobranca.id}</td>
                <td className="cobrancas--td">{cobranca.valor}</td>
                <td className="cobrancas--td">
                  {formatarData(cobranca.data_vencimento)}
                </td>
                <td className="cobrancas--td">
                  {cobranca.status === "Vencida" ? (
                    <span className="vencida--td">Vencida</span>
                  ) : cobranca.status === "Paga" ? (
                    <span className="cobrancas--td-emdia">Paga</span>
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
