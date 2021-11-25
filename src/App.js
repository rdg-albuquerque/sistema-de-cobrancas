import LayoutPaginaSenha from "./pages/LayoutPaginaSenha";
import Cadastro from "./pages/conclusao-cadastro";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import { useAuth } from "./hooks/useAuth";
import LayoutLogin from "./pages/Layout-login";

function App() {
  function RotasProtegidas() {
    const { token } = useAuth();
    return token ? <Outlet /> : <Navigate to="/login" />;
  }
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/cadastro-2" element={<LayoutPaginaSenha />} />
            <Route path="/cadastro-3" element={<Cadastro />} />
            <Route path="/login" element={<LayoutLogin />} />
            <Route element={<RotasProtegidas />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
