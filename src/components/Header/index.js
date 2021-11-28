import "./style.css";
import imagemPerfil from "../../assets/imagemPerfil.svg";
import down from "../../assets/down.svg";
import editar from "../../assets/editar.svg";
import sair from "../../assets/sair.svg";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import { useNavigate } from "react-router";

const paginaAtual = window.location.pathname;

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
  if (paginaAtual === "/") {
    return <h1 className="titulo-da-home">Resumo das cobranças</h1>;
  }

  if (paginaAtual === "/clientes") {
    return (
      <ul className="titulo-cliente">
        <li>
          <a href="/clientes">Clientes</a>
        </li>
      </ul>
    );
  }

  // if (paginaAtual === "/cobrancas") {
  //   return <h1>cobranças</h1>;
  // }
}

export function Header() {
  const { abrirPopup, setAbrirPopup } = useGlobal();
  const { user } = useAuth();

  const userName = user.dados_usuario.nome;
  const firstName = userName.split(" ")[0];
  console.log(firstName);
  function handleOpenPopup(e) {
    e.stopPropagation();
    setAbrirPopup(!abrirPopup ? true : false);
  }
  return (
    <div className="header">
      <TituloHome />

      <div className="perfil">
        <img className="imagem-perfil" src={imagemPerfil} alt="" />
        <span className="nome-perfil">{firstName}</span>

        <img
          onClick={handleOpenPopup}
          className="botao-down"
          src={down}
          alt=""
        />

        {abrirPopup && <Popup />}
      </div>
    </div>
  );
}
