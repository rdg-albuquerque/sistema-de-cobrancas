import Avatar from "@material-ui/core/Avatar";
import down from "../../assets/down.svg";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import Popup from "./Popup";
import "./style.css";
import TituloHeader from "./TituloHeader/TituloHeader";

export function Header() {
  const { abrirPopup, setAbrirPopup } = useGlobal();
  const { user } = useAuth();

  const userName = user.dados_usuario.nome;
  const firstName = userName.split(" ")[0];

  function handleOpenPopup(e) {
    e.stopPropagation();
    setAbrirPopup(!abrirPopup ? true : false);
  }
  return (
    <div className="header">
      <TituloHeader />
      <div></div>
      <div className="perfil" onClick={handleOpenPopup}>
        <Avatar />
        <span className="nome-perfil">{firstName}</span>
        <img className="botao-down" src={down} alt="" />
        {abrirPopup && <Popup />}
      </div>
    </div>
  );
}
