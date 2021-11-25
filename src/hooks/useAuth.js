import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthProvider";

function useAuthProvider() {
  const [token, setToken] = useState("d");
  const [novoUsuario, setNovoUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  return {
    novoUsuario,
    setNovoUsuario,
    token,
    setToken,
  };
}

function useAuth() {
  return useContext(authContext);
}

export { useAuthProvider, useAuth };
