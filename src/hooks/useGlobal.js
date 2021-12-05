import { useContext, useState } from "react";
import { globalContext } from "../contexts/GlobalProvider";

function useGlobalProvider() {
  const [openModalEditar, setOpenModalEditar] = useState(false);
  const [abrirPopup, setAbrirPopup] = useState(false);
  const [openCadastrarCliente, setOpenCadastrarCliente] = useState(false);
  const [openCadastrarCobranca, setOpenCadastrarCobranca] = useState(false);
  return {
    openModalEditar,
    setOpenModalEditar,
    abrirPopup,
    setAbrirPopup,
    openCadastrarCliente,
    setOpenCadastrarCliente,
    openCadastrarCobranca,
    setOpenCadastrarCobranca,
  };
}

function useGlobal() {
  return useContext(globalContext);
}

export { useGlobalProvider, useGlobal };
