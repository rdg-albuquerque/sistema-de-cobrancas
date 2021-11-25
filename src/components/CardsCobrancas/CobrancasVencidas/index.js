import "../style.css";
import vencidasImg from "../../../assets/resumo-vencidas-img.svg";

function ResumoCobrancasVencidas({ valor }) {
  return (
    <div className="resumo resumo-vencidas">
      <img src={vencidasImg} alt="" className="resumo--img" />
      <div className="resumo--container">
        <h1 className="resumo--titulo">Cobranças vencidas</h1>
        <span className="resumo--valor">R$ 7.000</span>
      </div>
    </div>
  );
}

export default ResumoCobrancasVencidas;
