import Avatar from "@material-ui/core/Avatar";
import { useNavigate } from "react-router";
import down from "../../assets/down.svg";
import editar from "../../assets/editar.svg";
import sair from "../../assets/sair.svg";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import "./style.css";

const Popup = () => {
  const { removeUser } = useAuth();
  const { setOpenModalEditar, setAbrirPopup } = useGlobal();
  const navigate = useNavigate();
  function handleEditar() {
    setOpenModalEditar(true);
    setAbrirPopup(false);
  }
  function handleSair() {
    removeUser();
    navigate("/login");
  }

  return (
    <div className="popup" onClick={(e) => e.stopPropagation()}>
      <img className="icone" src={editar} alt="" onClick={handleEditar} />
      <img className="icone" src={sair} alt="" onClick={handleSair} />
    </div>
  );
};

function TituloHome() {
  const paginaAtual = window.location.pathname;
  if (paginaAtual === "/") {
    return <h1 className="header--titulo">Resumo das cobranças</h1>;
  }

  if (paginaAtual === "/clientes") {
    return <h1 className="header--titulo">Clientes</h1>;
  }

  return <h1 className="header--titulo">Cobranças</h1>;
}

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
      <TituloHome />

      <div className="perfil" onClick={handleOpenPopup}>
        <Avatar />
        <span className="nome-perfil">{firstName}</span>

        <img className="botao-down" src={down} alt="" />

        {abrirPopup && <Popup />}
      </div>
    </div>
  );
}
