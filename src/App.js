import Cadastro1 from "./pages/Cadastro-1";
import Cadastro2 from "./pages/Cadastro-2";
import Cadastro3 from "./pages/Cadastro-3";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import { useAuth } from "./hooks/useAuth";

import { GlobalProvider } from "./contexts/GlobalProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  function ProtecaoAuth() {
    const { token } = useAuth();
    return token ? <Outlet /> : <Navigate to="/login" />;
  }
  function ProtecaoCadastro2() {
    const { novoUsuario } = useAuth();
    return novoUsuario.email ? <Outlet /> : <Navigate to="/cadastro-1" />;
  }
  function ProtecaoCadastro3() {
    const { novoUsuario } = useAuth();
    return novoUsuario.senha ? <Outlet /> : <Navigate to="/cadastro-1" />;
  }

  return (
    <div className="App">
      <GlobalProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro-1" element={<Cadastro1 />} />

              <Route element={<ProtecaoCadastro2 />}>
                <Route path="/cadastro-2" element={<Cadastro2 />} />
              </Route>

              <Route element={<ProtecaoCadastro3 />}>
                <Route path="/cadastro-3" element={<Cadastro3 />} />
              </Route>

              <Route element={<ProtecaoAuth />}>
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<Home />} />
                <Route path="/cobrancas" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </GlobalProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
