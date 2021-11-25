import "../style.css";
import pagasImg from "../../../assets/resumo-pagas-img.svg";

function ResumoCobrancasPagas({ valor }) {
  return (
    <div className="resumo resumo-pagas">
      <img src={pagasImg} alt="" className="resumo--img" />
      <div className="resumo--container">
        <h1 className="resumo--titulo">Cobranças pagas</h1>
        <span className="resumo--valor">R$ 30.000</span>
      </div>
    </div>
  );
}

export default ResumoCobrancasPagas;
