import "../style.css";
import previstasImg from "../../../assets/resumo-previstas-img.svg";

function ResumoCobrancasPrevistas({ valor }) {
  return (
    <div className="resumo resumo-previstas">
      <img src={previstasImg} alt="" className="resumo--img" />
      <div className="resumo--container">
        <h1 className="resumo--titulo">Cobranças previstas</h1>
        <span className="resumo--valor">R$ 10.000</span>
      </div>
    </div>
  );
}

export default ResumoCobrancasPrevistas;
