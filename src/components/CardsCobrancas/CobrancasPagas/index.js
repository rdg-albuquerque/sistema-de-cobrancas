import "../style.css";
import pagasImg from "../../../assets/card-pagas-img.svg";

function CardCobrancasPagas({ valor }) {
  return (
    <div className="card card-pagas">
      <img src={pagasImg} alt="" className="card--img" />
      <div className="card--container">
        <h1 className="card--titulo">Cobranças pagas</h1>
        <span className="card--valor">R$ 30.000</span>
      </div>
    </div>
  );
}

export default CardCobrancasPagas;
