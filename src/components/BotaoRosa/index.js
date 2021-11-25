import "./style.css";

function BotaoRosa({ children, onClick }) {
  return (
    <button className="botao_rosa" onClick={onClick}>
      {children}
    </button>
  );
}

export default BotaoRosa;
