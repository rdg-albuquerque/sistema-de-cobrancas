import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import avatarCliente from "../../assets/cadastro-cliente-avatar.svg";
import close from "../../assets/close.svg";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import { notificacaoErro, notificacaoSucesso } from "../../utils/notificacao";
import { post } from "../../utils/requests";
import BotaoRosa from "../BotaoRosa";
import InputGeral from "../InputGeral";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ModalCadastrarCliente() {
  const classes = useStyles();
  const { token } = useAuth();
  const { openCadastrarCliente, setOpenCadastrarCliente } = useGlobal();
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

  function handleClose() {
    setOpenCadastrarCliente(false);
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
      await post("/cliente", localInfo, token);
      notificacaoSucesso("Cliente cadastrado com sucesso");
      handleClose();
    } catch (error) {
      console.log(error.response);
      const { mensagem } = error.response.data;
      if (mensagem === "O email informado já foi cadastrado") {
        setIscadastrado({ ...isCadastrado, email: true });
        return;
      }
      if (mensagem === "O cpf informado já foi cadastrado") {
        setIscadastrado((prev) => ({ ...prev, cpf: true }));
        return;
      }
      notificacaoErro("Houve um erro ao cadastrar o cliente");
    }
  }

  return (
    <Modal
      className={classes.modal}
      open={openCadastrarCliente}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openCadastrarCliente}>
        <div className="modal-cadastrar-cliente">
          <img
            className="editar--close"
            src={close}
            alt=""
            onClick={handleClose}
          />
          <div className="modal-cadastrar-cliente--top">
            <img src={avatarCliente} alt="" />
            <h1 className="modal-cadastrar-cliente--h1">Cadastro de Cliente</h1>
          </div>
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
              placeholder="Digite o email"
              value={localInfo.email}
              onChange={handleChangeEmail}
              isEmailCadastrado={isCadastrado.email}
              required
            />
          </div>
          <div className="modal-cadastrar-cliente--container">
            <div>
              <label>CPF*</label>
              <InputGeral
                placeholder="Digite o CPF"
                type="number"
                value={localInfo.cpf}
                onChange={handleChangeCPF}
                isCpfCadastrado={isCadastrado.cpf}
                required
              />
            </div>
            <div>
              <label>Telefone*</label>
              <InputGeral
                placeholder="Digite o telefone"
                type="number"
                value={localInfo.telefone}
                onChange={handleChangeTelefone}
                required
              />
            </div>
          </div>
          <div>
            <label>Endereço</label>
            <InputGeral
              placeholder="Digite o endereço"
              type="text"
              value={localInfo.endereco}
              onChange={handleChangeEndereco}
            />
          </div>
          <div>
            <label>Complemento</label>
            <InputGeral
              placeholder="Digite o complemento"
              type="text"
              value={localInfo.complemento}
              onChange={handleChangeComplemento}
            />
          </div>
          <div className="modal-cadastrar-cliente--container">
            <div>
              <label>CEP</label>
              <InputGeral
                placeholder="Digite o CEP"
                type="number"
                value={localInfo.cep}
                onChange={handleChangeCEP}
              />
            </div>
            <div>
              <label>Bairro</label>
              <InputGeral
                placeholder="Digite o bairro"
                type="text"
                value={localInfo.bairro}
                onChange={handleChangeBairro}
              />
            </div>
          </div>
          <div className="cliente--cidade-uf">
            <div className="cidade">
              <label>Cidade</label>
              <InputGeral
                placeholder="Digite a cidade"
                type="text"
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
          <div className="btn-container">
            <button className="btn-cancelar" onClick={handleClose}>
              Cancelar
            </button>
            <BotaoRosa
              disabled={isCamposIncorretos()}
              onClick={handleCadastrar}
            >
              Aplicar
            </BotaoRosa>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
