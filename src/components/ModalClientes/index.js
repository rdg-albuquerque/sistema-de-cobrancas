import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useParams } from "react-router";
import avatarCliente from "../../assets/cadastro-cliente-avatar.svg";
import close from "../../assets/close.svg";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import { notificacaoErro, notificacaoSucesso } from "../../utils/notificacao";
import { post, put } from "../../utils/requests";
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

export default function ModalClientes() {
  const classes = useStyles();
  const { user_id } = useParams();
  const { token } = useAuth();
  const {
    openModalCliente,
    setOpenModalCliente,
    clienteAtual,
    atualizarCliente,
    atualizarClientes,
  } = useGlobal();

  const initialLocalInfo = {
    nome: !user_id ? "" : clienteAtual.nome,
    email: !user_id ? "" : clienteAtual.email,
    cpf: !user_id ? "" : clienteAtual.cpf,
    telefone: !user_id ? "" : clienteAtual.telefone,
    endereco: !user_id ? "" : clienteAtual.endereco,
    complemento: !user_id ? "" : clienteAtual.complemento,
    cep: !user_id ? "" : clienteAtual.cep,
    bairro: !user_id ? "" : clienteAtual.bairro,
    cidade: !user_id ? "" : clienteAtual.cidade,
    uf: !user_id ? "" : clienteAtual.uf,
  };

  const [localInfo, setLocalInfo] = useState({ ...initialLocalInfo });
  const [localErro, setLocalErro] = useState({
    email: "",
    cpf: "",
    telefone: "",
  });

  function handleClose() {
    setOpenModalCliente(false);
    setLocalInfo({ ...initialLocalInfo });
  }

  function handleChangeNome(e) {
    setLocalInfo({ ...localInfo, nome: e.target.value });
  }
  function handleChangeEmail(e) {
    setLocalErro({ ...localErro, email: "" });
    setLocalInfo({ ...localInfo, email: e.target.value });
  }
  function handleChangeCPF(e) {
    setLocalErro({ ...localErro, cpf: "" });
    setLocalInfo({ ...localInfo, cpf: e.target.value });
  }
  function handleChangeTelefone(e) {
    setLocalErro({ ...localErro, telefone: "" });
    setLocalInfo({ ...localInfo, telefone: e.target.value });
  }
  function handleChangeEndereco(e) {
    setLocalInfo({ ...localInfo, endereco: e.target.value });
  }
  function handleChangeComplemento(e) {
    setLocalInfo({ ...localInfo, complemento: e.target.value });
  }
  function handleChangeCEP(e) {
    setLocalInfo({ ...localInfo, cep: e.target.value });
  }
  function handleChangeBairro(e) {
    setLocalInfo({ ...localInfo, bairro: e.target.value });
  }
  function handleChangeCidade(e) {
    setLocalInfo({ ...localInfo, cidade: e.target.value });
  }
  function handleChangeUF(e) {
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

  async function handleButtonClick() {
    if (isCamposIncorretos()) return;
    try {
      if (!user_id) {
        await post("/cliente", localInfo, token);
        notificacaoSucesso("Cliente cadastrado com sucesso");
        atualizarClientes();
      } else {
        await put(`/cliente/${user_id}`, localInfo, token);
        notificacaoSucesso("Cliente editado com sucesso");
        atualizarCliente(user_id);
      }
      handleClose();
    } catch (error) {
      console.log(error.response);
      const { mensagem } = error.response.data;
      if (mensagem === "O email informado já foi cadastrado") {
        setLocalErro({ ...localErro, email: "E-mail já cadastrado" });
        return;
      }
      if (mensagem === "email deve ser um email válido") {
        setLocalErro((prev) => ({ ...prev, email: "E-mail não válido" }));
        return;
      }
      if (mensagem === "O cpf informado já foi cadastrado") {
        setLocalErro((prev) => ({ ...prev, cpf: "CPF já cadastrado" }));
        return;
      }
      !user_id
        ? notificacaoErro("Houve um erro ao cadastrar o cliente")
        : notificacaoErro("Houve um erro ao editar o cliente");
    }
  }

  return (
    <Modal
      className={classes.modal}
      open={openModalCliente}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModalCliente}>
        <div className="modal-cadastrar-cliente">
          <img
            className="editar--close"
            src={close}
            alt=""
            onClick={handleClose}
          />
          <div className="modal-cadastrar-cliente--top">
            <img src={avatarCliente} alt="" />
            <h1 className="modal-cadastrar-cliente--h1">
              {!user_id ? "Cadastro de cliente" : "Editar cliente"}
            </h1>
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
              emailErro={localErro.email}
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
                cpfErro={localErro.cpf}
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
              onClick={handleButtonClick}
            >
              Aplicar
            </BotaoRosa>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
