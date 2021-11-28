import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import close from "../../assets/close.svg";
import BotaoRosa from "../../components/BotaoRosa";
import InputGeral from "../../components/InputGeral";
import InputSenha from "../../components/InputSenha";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import { notificacaoErro, notificacaoSucesso } from "../../utils/notificacao";
import { get, put } from "../../utils/requests";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ModalEditarUsuario() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { token } = useAuth();
  const { openModalEditar, setOpenModalEditar } = useGlobal();
  const [localInfo, setLocalInfo] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    senha: "",
    senhaConfirmacao: "",
  });
  const [isCadastrado, setIscadastrado] = useState({
    email: false,
    cpf: false,
  });

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await get("/usuario", token);
        setLocalInfo({
          ...localInfo,
          ...data,
          telefone: data.telefone ?? "",
          cpf: data.cpf ?? "",
        });
      } catch (error) {
        if (error.response.status === 401) {
          notificacaoErro("Sua sessão expirou.");
          navigate("/login");
        }
      }
    }
    getData();
    // eslint-disable-next-line
  }, []);

  function handleClose() {
    setOpenModalEditar(false);
  }

  function handleChangeNome(e) {
    setLocalInfo({ ...localInfo, nome: e.target.value });
  }
  function handleChangeEmail(e) {
    setIscadastrado({ ...isCadastrado, email: false });
    setLocalInfo({ ...localInfo, email: e.target.value });
  }
  function handleChangeCPF(e) {
    setIscadastrado({ ...isCadastrado, cpf: false });
    setLocalInfo({ ...localInfo, cpf: e.target.value });
  }
  function handleChangeTelefone(e) {
    setLocalInfo({ ...localInfo, telefone: e.target.value });
  }
  function handleChangeSenha(e) {
    setLocalInfo({ ...localInfo, senha: e.target.value });
  }
  function handleChangeSenhaConfirmacao(e) {
    setLocalInfo({ ...localInfo, senhaConfirmacao: e.target.value });
  }

  function isCamposIncorretos() {
    return (
      !localInfo.nome ||
      !localInfo.email ||
      localInfo.senha !== localInfo.senhaConfirmacao
    );
  }

  async function handleEditar() {
    if (isCamposIncorretos()) return;
    try {
      const { senhaConfirmacao, ...bodyReq } = localInfo;
      await put("/usuario", bodyReq, token);
      notificacaoSucesso("Editado com sucesso");
    } catch (error) {
      console.log(error.response);
      const { mensagem } = error.response.data;
      if (
        mensagem ===
        "O e-mail informado já está sendo utilizado por outro usuário."
      ) {
        setIscadastrado({ ...isCadastrado, email: true });
      }
      if (mensagem === "CPF já cadastrado") {
        setIscadastrado((prev) => ({ ...prev, cpf: true }));
      }
    }
  }

  return (
    <Modal
      className={classes.modal}
      open={openModalEditar}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModalEditar}>
        <div className="modal-usuario">
          <img className="editar--close" src={close} alt="" />
          <h1 className="editar--h1">Edite seu cadastro</h1>
          <div>
            <label>Nome*</label>
            <InputGeral
              required
              placeholder="Digite seu nome"
              value={localInfo.nome}
              onChange={handleChangeNome}
            />
          </div>
          <div>
            <label>Email*</label>
            <InputGeral
              required
              placeholder="Digite seu email"
              value={localInfo.email}
              onChange={handleChangeEmail}
              isEmailCadastrado={isCadastrado.email}
            />
          </div>
          <div className="modal-usuario--container">
            <div>
              <label>CPF</label>
              <InputGeral
                placeholder="Digite seu CPF"
                type="number"
                value={localInfo.cpf}
                onChange={handleChangeCPF}
                isCpfCadastrado={isCadastrado.cpf}
              />
            </div>
            <div>
              <label>Telefone</label>
              <InputGeral
                placeholder="Digite seu telefone"
                type="text"
                value={localInfo.telefone}
                onChange={handleChangeTelefone}
              />
            </div>
          </div>
          <div>
            <label>Senha</label>
            <InputSenha
              placeholder="Digite sua senha"
              value={localInfo.senha}
              onChange={handleChangeSenha}
            />
          </div>
          <div>
            <label>Confirmar senha</label>
            <InputSenha
              placeholder="Repita sua senha"
              value={localInfo.senhaConfirmacao}
              onChange={handleChangeSenhaConfirmacao}
              required
              editar
              senhaParaComparar={localInfo.senha}
            />
          </div>
          <BotaoRosa disabled={isCamposIncorretos()} onClick={handleEditar}>
            Aplicar
          </BotaoRosa>
        </div>
      </Fade>
    </Modal>
  );
}
