import "../style.css";
import vencidasImg from "../../../assets/card-vencidas-img.svg";

function CardCobrancasVencidas({ valor }) {
  return (
    <div className="card card-vencidas">
      <img src={vencidasImg} alt="" className="card--img" />
      <div className="card--container">
        <h1 className="card--titulo">Cobranças vencidas</h1>
        <span className="card--valor">R$ 7.000</span>
      </div>
    </div>
  );
}

export default CardCobrancasVencidas;
