import "./style.css";

function BotaoRosa({ className, children, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default BotaoRosa;
