import { useContext, useState } from "react";
import { globalContext } from "../contexts/GlobalProvider";

function useGlobalProvider() {
  const [openModalEditar, setOpenModalEditar] = useState(false);
  const [abrirPopup, setAbrirPopup] = useState(false);

  return {
    openModalEditar,
    setOpenModalEditar,
    abrirPopup,
    setAbrirPopup,
  };
}

function useGlobal() {
  return useContext(globalContext);
}

export { useGlobalProvider, useGlobal };
