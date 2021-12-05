import { useContext, useRef, useState } from "react";
import { globalContext } from "../contexts/GlobalProvider";
import { useAuth } from "./useAuth";
import { get } from "../utils/requests";
import { notificacaoErro } from "../utils/notificacao";

function useGlobalProvider() {
  const { token } = useAuth();

  const [openModalEditar, setOpenModalEditar] = useState(false);
  const [abrirPopup, setAbrirPopup] = useState(false);
  const [openModalCliente, setOpenModalCliente] = useState(false);
  const [listaClientes, setListaClientes] = useState([]);
  const [listaCobrancas, setListaCobrancas] = useState([]);
  const [clienteAtual, setClienteAtual] = useState({});
  async function atualizarClientes() {
    try {
      const { data } = await get("/cliente", token);
      setListaClientes(data);
    } catch (error) {
      console.log(error.response.data);
      notificacaoErro("Houve um erro ao atualizar os clientes");
    }
  }
  async function atualizarCliente(id) {
    try {
      const { data } = await get(`/cliente/${id}`, token);
      setClienteAtual(data);
    } catch (error) {
      console.log(error.response.data);
      notificacaoErro("Houve um erro ao atualizar o cliente");
    }
  }
  async function atualizarCobrancas() {
    try {
      const { data } = await get("/cobrancas", token);
      setListaCobrancas(data);
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
    openModalCliente,
    setOpenModalCliente,
    listaClientes,
    setListaClientes,
    listaCobrancas,
    setListaCobrancas,
    atualizarClientes,
    atualizarCliente,
    atualizarCobrancas,
    clienteAtual,
    setClienteAtual,
  };
}

function useGlobal() {
  return useContext(globalContext);
}

export { useGlobalProvider, useGlobal };
