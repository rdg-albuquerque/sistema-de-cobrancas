import { cobrancas } from "../../obj";
import "./style.css";

function TabelaCobrancas({ pagas, vencidas, previstas }) {
  return (
    <table>
      <caption className="cobrancas-titulo">
        <div className="cobrancas-titulo--container">
          <span>
            {pagas && "Cobranças pagas"}
            {vencidas && "Cobranças vencidas"}
            {previstas && "Cobranças previstas"}
          </span>
          <span
            className="cobrancas-titulo--contagem"
            style={
              pagas
                ? { background: "#EEF6F6", color: "#1FA7AF" }
                : vencidas
                ? { background: "#FFEFEF", color: "#971D1D" }
                : { background: "#FCF6DC", color: "#C5A605" }
            }
          >
            {cobrancas.length}
          </span>
        </div>
      </caption>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>ID da cob</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {cobrancas.map((cobranca, index) => {
          return (
            <tr>
              <td>{cobranca.nome}</td>
              <td>{cobranca.id_cobranca}</td>
              <td>{`R$ ${cobranca.valor},00`}</td>
            </tr>
          );
        })}
      </tbody>
      <caption className="cobrancas--footer">Ver todos</caption>
    </table>
  );
}

export default TabelaCobrancas;
