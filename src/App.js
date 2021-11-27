import Cadastro2 from "./pages/Cadastro-2";
import Cadastro3 from "./pages/Cadastro-3";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import { useAuth } from "./hooks/useAuth";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro1 from "./pages/Cadastro-1";

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
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
