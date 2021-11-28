import "./style.css";
import imagemPerfil from "../../assets/imagemPerfil.svg";
import down from "../../assets/down.svg";
import editar from "../../assets/editar.svg";
import sair from "../../assets/sair.svg";
import { useAuth } from "../../hooks/useAuth";

const paginaAtual = window.location.pathname;

const Popup = () => {
  return (
    <div className="popup">
      <img className="popup-down" src={down} alt="" />
      <img className="icone" src={editar} alt="" />
      <img className="icone" src={sair} alt="" />
    </div>
  );
};

function TituloHome() {
  if (paginaAtual === "/") {
    return <h1 className="titulo-da-home">Resumo das cobranças</h1>;
  }

  if (paginaAtual === "/clientes") {
    return (
      <ul className="tituto-cliente">
        <li>
          <a href="/clientes">Clientes</a>
        </li>
      </ul>
    );
  }

  // if (paginaAtual === "/cobrancas") {
  //   return <h1>cobranças</h1>;
  // }

  return <h1>Teste</h1>;
}

export function Header() {
  const { abrirPopup, setAbrirPopup } = useAuth();
  return (
    <div className="header">
      <TituloHome />

      <div className="perfil">
        <img className="imagem-perfil" src={imagemPerfil} alt="" />
        <span className="nome-perfil"> Nome </span>
        <img className="botao-down" src={down} alt="" />

        <img
          onClick={() => setAbrirPopup(!abrirPopup ? true : false)}
          className="botao-down"
          src={down}
          alt=""
        />

        {abrirPopup && <Popup />}
      </div>
    </div>
  );
}
