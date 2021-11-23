import "./style.css";
import bolinhaVerdeComCheck from "../../assets/bolinhaVerdeComCheck.svg";
import linhaVerde from "../../assets/linhaVerdeVertical.svg";
import bolinhaBranca from "../../assets/bolinhaBranca.svg";
import bolinhaVerde from "../../assets/bolinhaVerde.svg";
import InputSenha from "../InputSenha";
import linhaBrancaHorizontal from "../../assets/linhaBrancaHorizontal.svg";
import linhaVerdeHorizontal from "../../assets/linhaVerdeHorizontal.svg";

function PaginaSenha() {
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
      <div className="background-rigth">
        <div className="container-input">
          <h1>Escolha uma senha</h1>
          <div className="senha">
            <label>Senha*</label>
            <InputSenha placeholder="Digite sua senha" />
          </div>
          <div className="repetir-senha">
            <label>Repita senha*</label>
            <InputSenha placeholder="Confirme sua senha" />
          </div>
          <button className="botao-cadastro">Cadastrar</button>
          <span>
            Já possui uma conta? Faça seu <a href="">Login</a>
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
