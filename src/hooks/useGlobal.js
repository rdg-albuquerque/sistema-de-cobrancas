import { useContext, useState } from "react";
import { globalContext } from "../contexts/GlobalProvider";
import { useAuth } from "./useAuth";
import { get } from "../utils/requests";
import { notificacaoErro } from "../utils/notificacao";

function useGlobalProvider() {
  const { token } = useAuth();

  const [openModalEditar, setOpenModalEditar] = useState(false);
  const [abrirPopup, setAbrirPopup] = useState(false);
  const [openCadastrarCliente, setOpenCadastrarCliente] = useState(false);
  const [listaClientes, setListaClientes] = useState([]);
  const [listaCobrancas, setListaCobrancas] = useState([]);

  async function getClientes() {
    try {
      const { data } = await get("/cliente", token);
      return data;
    } catch (error) {
      console.log(error.response.data);
      notificacaoErro("Houve um erro ao atualizar os clientes");
    }
  }
  async function getCobrancas() {
    try {
      const { data } = await get("/cobrancas", token);
      return data;
    } catch (error) {
      console.log(error.response.data);
      notificacaoErro("Houve um erro ao atualizar as cobrancas");
    }
  }

  return {
    openModalEditar,
    setOpenModalEditar,
    abrirPopup,
    setAbrirPopup,
    openCadastrarCliente,
    setOpenCadastrarCliente,
    listaClientes,
    setListaClientes,
    listaCobrancas,
    setListaCobrancas,
    getClientes,
    getCobrancas,
  };
}

function useGlobal() {
  return useContext(globalContext);
}

export { useGlobalProvider, useGlobal };
