import "../style.css";
import previstasImg from "../../../assets/card-previstas-img.svg";

function CardCobrancasPrevistas({ valor }) {
  return (
    <div className="card card-previstas">
      <img src={previstasImg} alt="" className="card--img" />
      <div className="card--container">
        <h1 className="card--titulo">Cobranças previstas</h1>
        <span className="card--valor">R$ 10.000</span>
      </div>
    </div>
  );
}

export default CardCobrancasPrevistas;
