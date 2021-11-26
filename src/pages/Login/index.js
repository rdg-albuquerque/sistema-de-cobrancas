import "./style.css";
import InputSenha from "../../components/InputSenha";
import InputGeral from "../../components/InputGeral";
import BotaoRosa from "../../components/BotaoRosa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="background">
      <div className="background-login-img">
        <div className="background-left-conteudo">
          <h1>Gerencie todos os pagamentos da sua empresa em um só lugar.</h1>
        </div>
      </div>
      <div className="background-right-login">
        <div className="container-input">
          <h1>Faça seu login!</h1>
          <div className="senha">
            <label>E-mail*</label>
            <InputGeral placeholder="Digite seu e-mail" />
          </div>
          <div className="repetir-senha">
            <div className="a">
              <label>Senha</label>
              <Link to="#">Esqueceu a senha?</Link>
            </div>
            <InputSenha placeholder="Digite sua senha" />
          </div>
          <BotaoRosa>Entrar</BotaoRosa>
          <span className="cadastrar-text">
            Ainda não possui uma conta?
            <Link to="/cadastro-1">Cadastre-se</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
