import { useContext, useState } from "react";
import { globalContext } from "../contexts/GlobalProvider";
import { notificacaoErro } from "../utils/notificacao";
import { get } from "../utils/requests";
import { useAuth } from "./useAuth";

function useGlobalProvider() {
  const { token } = useAuth();

  const [openModalEditar, setOpenModalEditar] = useState(false);
  const [abrirPopup, setAbrirPopup] = useState(false);
  const [openModalCliente, setOpenModalCliente] = useState(false);
  const [openCadastrarCobranca, setOpenCadastrarCobranca] = useState(false);

  const [listaClientes, setListaClientes] = useState([]);
  const [clienteAtual, setClienteAtual] = useState({});
  const [listaCobrancas, setListaCobrancas] = useState([]);
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
    setListaCobrancas([]);
    try {
      const { data } = await get("/cobrancas", token);
      setListaCobrancas(data);
    } catch (error) {
      console.log(error.response.data);
      notificacaoErro("Houve um erro ao atualizar as cobrancas");
    }
  }

  async function atualizarCobrancasPorCliente(id) {
    setListaCobrancas([]);
    try {
      const { data } = await get("/cobrancas", token);
      const cobrancasDoCliente = data.filter(
        (cobranca) => cobranca.cliente_id === Number(id)
      );
      setListaCobrancas(cobrancasDoCliente);
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
    openCadastrarCobranca,
    setOpenCadastrarCobranca,
    listaClientes,
    setListaClientes,
    listaCobrancas,
    setListaCobrancas,
    atualizarClientes,
    atualizarCliente,
    atualizarCobrancas,
    atualizarCobrancasPorCliente,
    clienteAtual,
    setClienteAtual,
  };
}

function useGlobal() {
  return useContext(globalContext);
}

export { useGlobalProvider, useGlobal };
