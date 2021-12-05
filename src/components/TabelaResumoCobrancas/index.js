import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { get } from "../../utils/requests";
import "./style.css";

function TabelaCobrancas({ pagas, vencidas, previstas }) {
  const { token } = useAuth();
  const [localCobrancas, setLocalCobrancas] = useState([]);

  function filtrarCobrancas(lista, status) {
    return lista.filter((cobranca) => cobranca.status === status);
  }

  useEffect(() => {
    async function getData() {
      try {
        const { data: cobrancasAtualizadas } = await get("/cobrancas", token);
        if (pagas) {
          const cobrancasPagas = filtrarCobrancas(cobrancasAtualizadas, "Paga");
          return setLocalCobrancas(cobrancasPagas);
        }
        if (vencidas) {
          const cobrancasVencidas = filtrarCobrancas(
            cobrancasAtualizadas,
            "Vencida"
          );
          return setLocalCobrancas(cobrancasVencidas);
        }
        if (previstas) {
          const cobrancasPrevistas = filtrarCobrancas(
            cobrancasAtualizadas,
            "Pendente"
          );
          return setLocalCobrancas(cobrancasPrevistas);
        }
      } catch (error) {}
    }
    getData();

    //eslint-disable-next-line
  }, []);

  return (
    <table className="cobrancas-resumo">
      <caption className="cobrancas-resumo--titulo">
        <div className="cobrancas-resumo--container">
          <span>
            {pagas && "Cobranças pagas"}
            {vencidas && "Cobranças vencidas"}
            {previstas && "Cobranças previstas"}
          </span>
          <span
            className="cobrancas-resumo--contagem"
            style={
              pagas
                ? { background: "#EEF6F6", color: "#1FA7AF" }
                : vencidas
                ? { background: "#FFEFEF", color: "#971D1D" }
                : { background: "#FCF6DC", color: "#C5A605" }
            }
          >
            {localCobrancas.length}
          </span>
        </div>
      </caption>
      <thead>
        <tr className="cobrancas-resumo--tr">
          <th className="cobrancas-resumo--th">Cliente</th>
          <th className="cobrancas-resumo--th">ID da cob.</th>
          <th className="cobrancas-resumo--th">Valor</th>
        </tr>
      </thead>
      <tbody>
        {localCobrancas.map((cobranca, index) => {
          return (
            <tr key={index} className="cobrancas-resumo--tr">
              <td className="cobrancas-resumo--td">{cobranca.cliente_nome}</td>
              <td className="cobrancas-resumo--td">{cobranca.id}</td>
              <td className="cobrancas-resumo--td">{`R$ ${cobranca.valor},00`}</td>
            </tr>
          );
        })}
      </tbody>
      <caption className="cobrancas-resumo--footer">Ver todos</caption>
    </table>
  );
}

export default TabelaCobrancas;
