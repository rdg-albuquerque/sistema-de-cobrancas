import { Button } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useParams } from "react-router";
import close from "../../assets/close.svg";
import excluirAlert from "../../assets/excluirCobrancaAlert.svg";
import { useAuth } from "../../hooks/useAuth";
import { useGlobal } from "../../hooks/useGlobal";
import { notificacaoErro, notificacaoSucesso } from "../../utils/notificacao";
import { del } from "../../utils/requests";
import avatar from "../../assets/cobranca-avatar.svg";
import "./style.css";
import { formatarData } from "../../utils/formatarCampos";
import { formatCurrency } from "../../utils/formatCurrency";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function ModalDetalhesCobranca() {
  const classes = useStyles();
  const {
    openModalDetalheCobranca,
    setOpenModalDetalheCobranca,
    cobrancaAtual,
  } = useGlobal();

  function handleClose() {
    setOpenModalDetalheCobranca(false);
  }

  return (
    <Modal
      className={classes.modal}
      open={openModalDetalheCobranca}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModalDetalheCobranca}>
        <div className="modal-detalhes-cobranca">
          <img
            className="detalhes--close"
            src={close}
            alt=""
            onClick={handleClose}
          />
          <div className="detalhes-cobranca--header">
            <img src={avatar} alt="" />
            <h1>Detalhe da cobrança</h1>
          </div>
          <div className="detalhes-cobranca--campo">
            <h2>Nome</h2>
            <span>{cobrancaAtual.cliente_nome}</span>
          </div>
          <div className="detalhes-cobranca--campo">
            <h2>Descrição</h2>
            <span>{cobrancaAtual.descricao}</span>
          </div>
          <div className="detalhes-cobranca--container">
            <div className="detalhes-cobranca--campo">
              <h2>Vencimento</h2>
              <span>{formatarData(cobrancaAtual.data_vencimento)}</span>
            </div>
            <div className="detalhes-cobranca--campo">
              <h2>Valor</h2>
              <span>{formatCurrency(cobrancaAtual.valor)}</span>
            </div>
          </div>
          <div className="detalhes-cobranca--container">
            <div className="detalhes-cobranca--campo">
              <h2>ID Cobrança</h2>
              <span>{cobrancaAtual.id}</span>
            </div>
            <div className="detalhes-cobranca--campo">
              <h2>Status</h2>
              <span>{cobrancaAtual.status}</span>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
