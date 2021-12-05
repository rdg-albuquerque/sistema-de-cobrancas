import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import close from "../../assets/close.svg";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import { notificacaoErro, notificacaoSucesso } from "../../utils/notificacao";
import { post } from "../../utils/requests";
import BotaoRosa from "../BotaoRosa";
import InputGeral from "../InputGeral";
import fileCinza from "../../assets/FileCinza.svg";
import "./style.css";
import InputStatus from "../InputStatus";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function ModalCadastrarCobranca() {
  const classes = useStyles();
  const { token } = useAuth();
  const { openCadastrarCobranca, openCadastrarCobranca } = useGlobal();
  const initialLocalInfo = {
    nome: "",
    vencimento: "",
    valor: "",

  };
  const [localInfo, setLocalInfo] = useState(initialLocalInfo);
  const [localErro, setLocalErro] = useState({

  });

  function handleClose() {
    openCadastrarCobranca(false);
    setLocalInfo(initialLocalInfo);
  }

  function handleChangeNome(e) {
    setLocalInfo({ ...localInfo, nome: e.target.value });
  }
  function handleChangeVencimento(e) {
    setLocalErro({ ...localErro, vencimento: "" });
    setLocalInfo({ ...localInfo, vencimento: e.target.value });
  }
  function handleChangeValor(e) {
    setLocalErro({ ...localErro, valor: "" });
    setLocalInfo({ ...localInfo, valor: e.target.value });
  }


  function isCamposIncorretos() {
    return (
      !localInfo.nome ||
      !localInfo.vencimento ||
      !localInfo.valor
    );
  }

  async function handleCadastrar() {
    if (isCamposIncorretos()) return;
    try {
      await post("/cobranca", localInfo, token);
      notificacaoSucesso("Cobrança cadastrada com sucesso");
      handleClose();
      setLocalInfo(initialLocalInfo);
    } catch (error) {
      console.log(error.response);
      const { mensagem } = error.response.data;
      notificacaoErro("Houve um erro ao cadastrar a Cobrança");
    }
  }

  return (
    <Modal
      className={classes.modal}
      open={openCadastrarCobranca}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openCadastrarCobranca}>
        <div className="modal-cadastrar-cobranca">
          <img
            className="editar--close"
            src={close}
            alt=""
            onClick={handleClose}
          />
          <div className="modal-cadastrar-cobranca--top">
            <img src={fileCinza} alt="" />
            <h1 className="modal-cadastrar-cobranca--h1">Cadastro de Cobrança</h1>
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
          <div className="desc">
            <label>Descrição*</label>   {/** Está estático, não guarda dados */}
            <textarea className="text-desc" placeholder="Digite a descrição"></textarea>
          </div>
          <div className="modal-cadastrar-cobranca--container">
            <div>
              <label>Vencimento*</label>
              <InputGeral
                placeholder="Data de vencimento"
                type="number"
                value={localInfo.vencimento}
                onChange={handleChangeVencimento}
                vencimentoErro={localErro.vencimento} /** Não existe no input geral ainda */
                required
              />
            </div>
            <div>
              <label>Valor*</label>
              <InputGeral
                placeholder="Digite o valor"
                type="number"
                value={localInfo.valor}
                onChange={handleChangeValor}
                required
              />
            </div>

          </div>
          <div className="status">
            <label>Status*</label>
            <div> <InputStatus /></div>

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
