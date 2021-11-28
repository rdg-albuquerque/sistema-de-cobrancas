import "./style.css";
import InputSenha from "../../components/InputSenha";
import InputGeral from "../../components/InputGeral";
import BotaoRosa from "../../components/BotaoRosa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { post } from "../../utils/requests";
import { useAuth } from "../../hooks/useAuth";
import { notificacaoErro } from "../../utils/notificacao";

function Login() {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth();
  const [localInfo, setLocalInfo] = useState({
    email: "",
    senha: "",
  });
  function handleChangeEmail(e) {
    setLocalInfo({ ...localInfo, email: e.target.value });
  }
  function handleChangeSenha(e) {
    setLocalInfo({ ...localInfo, senha: e.target.value });
  }

  function isCamposIncorretos() {
    return !localInfo.email || !localInfo.senha;
  }

  async function handleContinuar() {
    if (isCamposIncorretos()) return;
    try {
      const { data } = await post("/login", localInfo);
      setUser(data);
      setToken(data.token);
      navigate("/");
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 404) {
        return notificacaoErro(error.response.data.mensagem);
      }
      console.log(error.response.data.mensagem);
    }
  }
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
            <InputGeral
              required
              placeholder="Digite seu e-mail"
              onChange={handleChangeEmail}
            />
          </div>
          <div className="repetir-senha">
            <div className="a">
              <label>Senha</label>
              <Link to="#">Esqueceu a senha?</Link>
            </div>
            <InputSenha
              required
              placeholder="Digite sua senha"
              onChange={handleChangeSenha}
            />
          </div>
          <BotaoRosa disabled={isCamposIncorretos()} onClick={handleContinuar}>
            Entrar
          </BotaoRosa>
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
