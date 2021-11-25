import "./style.css";
import bolinhaVerdeComCheck from "../../assets/bolinhaVerdeComCheck.svg";
import linhaVerde from "../../assets/linhaVerdeVertical.svg";
import bolinhaBranca from "../../assets/bolinhaBranca.svg";
import bolinhaVerde from "../../assets/bolinhaVerde.svg";
import InputSenha from "../../components/InputSenha";
import linhaBrancaHorizontal from "../../assets/linhaBrancaHorizontal.svg";
import linhaVerdeHorizontal from "../../assets/linhaVerdeHorizontal.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import BotaoRosa from "../../components/BotaoRosa";

function PaginaSenha() {
  const [localSenha, setLocalSenha] = useState({
    senha: "",
    senhaConfirmacao: "",
  });

  function handleChangeSenha(e) {
    setLocalSenha({ ...localSenha, senha: e.target.value });
  }

  function handleChangeSenhaConfirmacao(e) {
    setLocalSenha({ ...localSenha, senhaConfirmacao: e.target.value });
  }

  function handleCadastrar() {
    if (!localSenha.senha && !localSenha.senhaConfirmacao) return;
    if (localSenha.senha !== localSenha.senhaConfirmacao) {
      // Disparar toastify de erro aqui
      // Ex. Senhas não coincidem
      return;
    }

    //Requisição de cadastro
  }

  return (
    <div className="background">
      <div className="background-left">
        <div className="check">
          <img src={bolinhaVerdeComCheck} alt="" />
          <img src={linhaVerde} alt="" />
          <img src={bolinhaVerde} alt="" />
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
          <h1>Escolha uma senha</h1>
          <div className="senha">
            <label>Senha*</label>
            <InputSenha
              placeholder="Digite sua senha"
              value={localSenha.senha}
              onChange={handleChangeSenha}
            />
          </div>
          <div className="repetir-senha">
            <label>Repita senha*</label>
            <InputSenha
              placeholder="Confirme sua senha"
              value={localSenha.senhaConfirmacao}
              onChange={handleChangeSenhaConfirmacao}
            />
          </div>
          <BotaoRosa className="botao-cadastro" onClick={handleCadastrar}>
            Cadastrar
          </BotaoRosa>
          <span className="faca-login">
            Já possui uma conta? Faça seu <Link to="/login">Login</Link>
          </span>
        </div>
        <div className="progresso">
          <img src={linhaBrancaHorizontal} alt="" />
          <img src={linhaVerdeHorizontal} alt="" />
          <img src={linhaBrancaHorizontal} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PaginaSenha;
