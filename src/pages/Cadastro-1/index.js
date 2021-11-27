import { useState } from "react";
import { Link } from "react-router-dom";
import bolinhaBranca from "../../assets/bolinhaBranca.svg";
import bolinhaVerdeComCheck from "../../assets/bolinhaVerdeComCheck.svg";
import linhaBrancaHorizontal from "../../assets/linhaBrancaHorizontal.svg";
import linhaVerdeHorizontal from "../../assets/linhaVerdeHorizontal.svg";
import linhaVerde from "../../assets/linhaVerdeVertical.svg";
import BotaoRosa from "../../components/BotaoRosa";
import InputGeral from "../../components/InputGeral";
import "../css/cadastro1e2.css";

function Cadastro1() {
  const [localInfo, setLocalInfo] = useState({
    nome: "",
    email: "",
  });

  function handleChangeNome(e) {
    setLocalInfo({ ...localInfo, nome: e.target.value });
  }

  function handleChangeEmail(e) {
    setLocalInfo({ ...localInfo, email: e.target.value });
  }

  function handleContinuar() {}

  return (
    <div className="background">
      <div className="background-left">
        <div className="check">
          <img src={bolinhaVerdeComCheck} alt="" />
          <img src={linhaVerde} alt="" />
          <img src={bolinhaBranca} alt="" />
          <img src={linhaVerde} alt="" />
          <img src={bolinhaBranca} alt="" />
        </div>
        <div className="container-info">
          <div className="info">
            <h1>Cadastre-se</h1>
            <p>Por favor, escreva seu nome e e-mail</p>
          </div>
          <div className="info">
            <h1>Escolha uma senha</h1>
            <p>Escolha uma senha segura</p>
          </div>
          <div className="info">
            <h1>Cadastro realizado com sucesso</h1>
            <p>E-mail e senha cadastrados com sucesso</p>
          </div>
        </div>
      </div>
      <div className="background-right-senha">
        <div className="container-input">
          <h1>Adicione seus dados</h1>
          <div className="senha">
            <label>Nome*</label>
            <InputGeral
              required
              placeholder="Digite seu nome"
              value={localInfo.nome}
              onChange={handleChangeNome}
            />
          </div>
          <div className="repetir-senha">
            <label>Email*</label>
            <InputGeral
              required
              placeholder="Digite seu email"
              value={localInfo.email}
              type="email"
              onChange={handleChangeEmail}
            />
          </div>
          <BotaoRosa
            onClick={handleContinuar}
            disabled={!localInfo.nome || !localInfo.email}
          >
            Continuar
          </BotaoRosa>
          <span className="faca-login">
            Já possui uma conta? Faça seu
            <Link to="/login">Login</Link>
          </span>
        </div>
        <div className="progresso">
          <img src={linhaVerdeHorizontal} alt="" />
          <img src={linhaBrancaHorizontal} alt="" />
          <img src={linhaBrancaHorizontal} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cadastro1;
