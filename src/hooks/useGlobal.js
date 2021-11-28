import { useContext, useState } from "react";
import { globalContext } from "../contexts/GlobalProvider";

function useGlobalProvider() {
  const [openModalEditar, setOpenModalEditar] = useState(true);
  return {
    openModalEditar,
    setOpenModalEditar,
  };
}

function useGlobal() {
  return useContext(globalContext);
}

export { useGlobalProvider, useGlobal };
