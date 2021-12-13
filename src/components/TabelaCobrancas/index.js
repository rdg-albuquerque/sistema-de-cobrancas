import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import editar from "../../assets/editar.svg";
import excluir from "../../assets/excluir.svg";
import clienteOrdenacao from "../../assets/ordenacao.svg";
import { useGlobal } from "../../hooks/useGlobal";
import { formatarData } from "../../utils/formatarCampos";
import "./style.css";

function TabelaCobrancas() {
  const { user_id } = useParams();
  const {
    listaCobrancas,
    setListaCobrancas,
    atualizarCobrancas,
    atualizarCobrancasPorCliente,
    listaCobrancasFiltradas,
    setListaCobrancasFiltradas,
    setListaCobrancasBase,
  } = useGlobal();
  const [ordenacao, setOrdenacao] = useState({
    nome: null,
    id: null,
  });

  useEffect(() => {
    if (!user_id && listaCobrancasFiltradas) {
      setListaCobrancas([...listaCobrancasFiltradas]);
      setListaCobrancasBase([...listaCobrancasFiltradas]);
      setListaCobrancasFiltradas();
      return;
    }
    if (!user_id) {
      atualizarCobrancas();
      return;
    }
    atualizarCobrancasPorCliente(user_id);
    //eslint-disable-next-line
  }, []);

  function handleOrdenacaoPorNome() {
    const ordenacaoAtual = { ...ordenacao, nome: !ordenacao.nome };
    if (ordenacaoAtual.nome === true) {
      const menorParaMaior = listaCobrancas.sort((a, b) =>
        a.cliente_nome.localeCompare(b.cliente_nome)
      );
      setListaCobrancas(menorParaMaior);
    } else {
      const maiorParamenor = listaCobrancas.sort((a, b) =>
        b.cliente_nome.localeCompare(a.cliente_nome)
      );
      setListaCobrancas(maiorParamenor);
    }
    setOrdenacao(ordenacaoAtual);
  }

  function handleOrdenacaoPorID() {
    const ordenacaoAtual = { ...ordenacao, id: !ordenacao.id };
    if (ordenacaoAtual.id === true) {
      const menorParaMaior = listaCobrancas.sort((a, b) => a.id - b.id);
      setListaCobrancas(menorParaMaior);
    } else {
      const maiorParamenor = listaCobrancas.sort((a, b) => b.id - a.id);
      setListaCobrancas(maiorParamenor);
    }
    setOrdenacao(ordenacaoAtual);
  }

  return (
    <table className="cobrancas-tabela">
      <thead>
        <tr className="cobrancas--tr">
          {!user_id && (
            <th
              className="cobrancas--th"
              onClick={handleOrdenacaoPorNome}
              style={{ cursor: "pointer" }}
            >
              <div>
                <img src={clienteOrdenacao} alt="" />
                <span>Cliente</span>
              </div>
            </th>
          )}
          <th
            className="cobrancas--th"
            onClick={handleOrdenacaoPorID}
            style={{ cursor: "pointer" }}
          >
            <div>
              <img src={clienteOrdenacao} alt="" />
              <span>ID Cob.</span>
            </div>
          </th>
          <th className="cobrancas--th">Valor</th>
          <th className="cobrancas--th">
            <div>
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
