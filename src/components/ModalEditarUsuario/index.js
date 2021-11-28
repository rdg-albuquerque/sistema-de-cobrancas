import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useGlobal } from "../../hooks/useGlobal";
import close from "../../assets/close.svg";
import InputGeral from "../../components/InputGeral";
import InputSenha from "../../components/InputSenha";
import BotaoRosa from "../../components/BotaoRosa";
import "./style.css";
import { get } from "../../utils/requests";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";

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
    senha: "",
    senhaConfirmacao: "",
  });

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await get("/usuario", token);
        setLocalInfo({ ...localInfo, ...data });
      } catch (error) {
        if (error.response.status === 401) {
          //disparar erro token invalido
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
            />
          </div>
          <div>
            <label>Email*</label>
            <InputGeral
              required
              placeholder="Digite seu email"
              value={localInfo.email}
            />
          </div>
          <div className="modal-usuario--container">
            <div>
              <label>CPF</label>
              <InputGeral
                placeholder="Digite seu CPF"
                type="number"
                value={localInfo.cpf}
              />
            </div>
            <div>
              <label>Telefone</label>
              <InputGeral
                placeholder="Digite seu telefone"
                type="number"
                value={localInfo.telefone}
              />
            </div>
          </div>
          <div>
            <label>Senha*</label>
            <InputSenha
              placeholder="Digite sua senha"
              value={localInfo.senha}
            />
          </div>
          <div>
            <label>Confirmar senha*</label>
            <InputSenha
              placeholder="Repita sua senha"
              value={localInfo.senhaConfirmacao}
            />
          </div>
          <BotaoRosa>Aplicar</BotaoRosa>
        </div>
      </Fade>
    </Modal>
  );
}
