import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import close from "../../assets/close.svg";
import fileCinza from "../../assets/FileCinza.svg";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import { notificacaoErro, notificacaoSucesso } from "../../utils/notificacao";
import { post } from "../../utils/requests";
import BotaoRosa from "../BotaoRosa";
import InputGeral from "../InputGeral";
import InputStatus from "../InputStatus";
import "./style.css";

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
  const { openCadastrarCobranca, setOpenCadastrarCobranca, clienteAtual } =
    useGlobal();

  const initialLocalInfo = {
    descricao: "",
    data_vencimento: "",
    valor: "",
    paga: null,
  };
  const [localInfo, setLocalInfo] = useState({ ...initialLocalInfo });

  function handleClose() {
    setOpenCadastrarCobranca(false);
    setLocalInfo(initialLocalInfo);
  }

  function handleChangeDesc(e) {
    setLocalInfo({ ...localInfo, descricao: e.target.value });
  }
  function handleChangeVencimento(e) {
    setLocalInfo({ ...localInfo, data_vencimento: e.target.value });
  }
  function handleChangeValor(e) {
    setLocalInfo({ ...localInfo, valor: e.target.value });
  }

  function isCamposIncorretos() {
    return (
      !localInfo.descricao ||
      !localInfo.data_vencimento ||
      !localInfo.valor ||
      localInfo.paga === null
    );
  }

  async function handleCadastrar() {
    if (isCamposIncorretos()) return;
    try {
      const body = { ...localInfo, cliente_id: clienteAtual.id };
      await post(`/cobrancas/${clienteAtual.id}`, body, token);
      handleClose();
      notificacaoSucesso("Cobrança cadastrada com sucesso");
      setLocalInfo(initialLocalInfo);
    } catch (error) {
      console.log(error.response);
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
            <h1 className="modal-cadastrar-cobranca--h1">
              Cadastro de Cobrança
            </h1>
          </div>
          <div>
            <label>Nome*</label>
            <InputGeral value={clienteAtual.nome} isStatic />
          </div>
          <div className="desc">
            <label>Descrição*</label>
            <textarea
              className="text-desc"
              placeholder="Digite a descrição"
              value={localInfo.descricao}
              onChange={handleChangeDesc}
            ></textarea>
          </div>
          <div className="modal-cadastrar-cobranca--container">
            <div>
              <label>Vencimento*</label>
              <InputGeral
                placeholder="Data de vencimento"
                type="date"
                value={localInfo.data_vencimento}
                onChange={handleChangeVencimento}
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
            <div>
              <InputStatus localInfo={localInfo} setLocalInfo={setLocalInfo} />
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
