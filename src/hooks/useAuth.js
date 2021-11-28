import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthProvider";

function useAuthProvider() {
  const [abrirPopup, setAbrirPopup] = useState(false);
  const [token, setToken] = useState("d");
  const [novoUsuario, setNovoUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  return {
    novoUsuario,
    setNovoUsuario,
    abrirPopup,
    setAbrirPopup,
    token,
    setToken,
  };
}

function useAuth() {
  return useContext(authContext);
}

export { useAuthProvider, useAuth };
