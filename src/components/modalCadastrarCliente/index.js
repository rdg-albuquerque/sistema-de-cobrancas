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

const conexao = require("../conexao");

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ModalCadastrarCliente() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { token, user, setUser } = useAuth();
  const { openModalEditar, setOpenModalEditar } = useGlobal();
  const [localInfo, setLocalInfo] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    endereco: "",
    complemento: "",
    cep: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const [isCadastrado, setIscadastrado] = useState({
    email: false,
    cpf: false,
  });



  async function getData() {
    try {
      const { data } = await get("/usuario", token);
      const info = {
        ...localInfo,
        ...data,
        telefone: data.telefone ?? "",
        cpf: data.cpf ?? "",
      };
      setLocalInfo(info);
      setUser({ ...user, dados_usuario: info });
    } catch (error) {
      if (error.response.status === 401) {
        notificacaoErro("Sua sessão expirou.");
        navigate("/login");
      }
    }
  }

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
  function handleChangeEndereco(e) {
    setIscadastrado({ ...isCadastrado, endereco: false });
    setLocalInfo({ ...localInfo, endereco: e.target.value });
  }
  function handleChangeComplemento(e) {
    setIscadastrado({ ...isCadastrado, complemento: false });
    setLocalInfo({ ...localInfo, complemento: e.target.value });
  }
  function handleChangeCEP(e) {
    setIscadastrado({ ...isCadastrado, cep: false });
    setLocalInfo({ ...localInfo, cep: e.target.value });
  }
  function handleChangeBairro(e) {
    setIscadastrado({ ...isCadastrado, bairro: false });
    setLocalInfo({ ...localInfo, bairro: e.target.value });
  }
  function handleChangeCidade(e) {
    setIscadastrado({ ...isCadastrado, cidade: false });
    setLocalInfo({ ...localInfo, cidade: e.target.value });
  }
  function handleChangeUF(e) {
    setIscadastrado({ ...isCadastrado, uf: false });
    setLocalInfo({ ...localInfo, uf: e.target.value });
  }

  function isCamposIncorretos() {
    return (
      !localInfo.nome ||
      !localInfo.email ||
      !localInfo.cpf ||
      !localInfo.telefone
    );
  }

  async function handleCadastrar() {
    if (isCamposIncorretos()) return;
    try {
      const { senhaConfirmacao, ...bodyReq } = localInfo;
      await put("/usuario", bodyReq, token);
      notificacaoSucesso("Editado com sucesso");
      getData();
      handleClose();
    } catch (error) {
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
          <img
            className="editar--close"
            src={close}
            alt=""
            onClick={handleClose}
          />
          <h1 className="editar--h1">Cadastro de Cliente</h1>
          <div>
            <label>Nome*</label>
            <InputGeral
              required
              placeholder="Digite o nome"
              value={localInfo.nome}
              onChange={handleChangeNome}
            />
          </div>
          <div>
            <label>Email*</label>
            <InputGeral
              required
              placeholder="Digite o email"
              value={localInfo.email}
              onChange={handleChangeEmail}
              isEmailCadastrado={isCadastrado.email}
            />
          </div>
          <div className="modal-usuario--container">
            <div>
              <label>CPF</label>
              <InputGeral
                placeholder="Digite o CPF"
                type="number"
                value={localInfo.cpf}
                onChange={handleChangeCPF}
                isCpfCadastrado={isCadastrado.cpf}
              />
              <div>
                <label>Telefone</label>
                <InputGeral
                  placeholder="Digite o telefone"
                  type="text"
                  value={localInfo.telefone}
                  onChange={handleChangeTelefone}
                />
              </div>
            </div>

          </div>
          <div>
            <label>Endereço</label>
            <InputGeral
              placeholder="Digite o endereço"
              type="text"
              value={localInfo.telefone}
              onChange={handleChangeEndereco}
            />
          </div>
          <div>
            <label>Complemento</label>
            <InputGeral
              placeholder="Digite o complemento"
              type="text"
              value={localInfo.telefone}
              onChange={handleChangeComplemento}
            />
          </div>
          <div>
            <label>CEP</label>
            <InputGeral
              placeholder="Digite o CEP"
              type="number"
              value={localInfo.cep}
              onChange={handleChangeCEP}
            />
            <label>Bairro</label>
            <InputGeral
              placeholder="Digite o bairro"
              type="text"
              value={localInfo.bairro}
              onChange={handleChangeBairro}
            />
          </div>

          <div>
            <div>
              <label>Cidade</label>
              <InputGeral
                placeholder="Digite a cidade"
                type="number"
                value={localInfo.cidade}
                onChange={handleChangeCidade}
              />

            </div>
            <div>
              <label>UF</label>
              <InputGeral
                placeholder="Digite a UF "
                type="text"
                value={localInfo.uf}
                onChange={handleChangeUF}
              />
            </div>
          </div>

          <BotaoRosa disabled={isCamposIncorretos()} onClick={handleCadastrar}>
            Aplicar
          </BotaoRosa>
        </div>
      </Fade>
    </Modal>
  );
}
