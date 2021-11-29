import FileCinza from "../../assets/FileCinza.svg";
import FileRosa from "../../assets/FileRosa.svg";
import HomeCinza from "../../assets/HomeCinza.svg";
import HomeRosa from "../../assets/HomeRosa.svg";
import UsersCinza from "../../assets/UsersCinza.svg";
import UsersRosa from "../../assets/UsersRosa.svg";
import "./style.css";

const paginaAtual = window.location.pathname;

function MenuLateral() {
  return (
    <div className="menu-lateral nav-bar">
      <div className="itens-nav">
        <div
          className={`${paginaAtual === "/" ? "novo-button" : "button-nav"}`}
        >
          <img
            width="29px"
            src={paginaAtual === "/" ? HomeRosa : HomeCinza}
            alt=""
          />
          <p>Home</p>
        </div>

        <div
          className={`${
            paginaAtual === "/clientes" ? "novo-button" : "button-nav"
          }`}
        >
          <img
            width="29px"
            src={paginaAtual === "/clientes" ? UsersRosa : UsersCinza}
            alt=""
          />
          <p>Clientes</p>
        </div>

        <div
          className={`${
            paginaAtual === "/cobrancas" ? "novo-button" : "button-nav"
          }`}
        >
          <img
            width="29px"
            src={paginaAtual === "/cobrancas" ? FileRosa : FileCinza}
            alt=""
          />
          <p>Cobranças</p>
        </div>
      </div>
    </div>
  );
}

export default MenuLateral;
