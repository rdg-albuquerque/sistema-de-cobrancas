import { useContext, useState } from "react";
import { globalContext } from "../contexts/GlobalProvider";

function useGlobalProvider() {
  const [openModalEditar, setOpenModalEditar] = useState(false);
  const [abrirPopup, setAbrirPopup] = useState(false);
  const [openCadastrarCliente, setOpenCadastrarCliente] = useState(false);
  return {
    openModalEditar,
    setOpenModalEditar,
    abrirPopup,
    setAbrirPopup,
    openCadastrarCliente,
    setOpenCadastrarCliente,
  };
}

function useGlobal() {
  return useContext(globalContext);
}

export { useGlobalProvider, useGlobal };
