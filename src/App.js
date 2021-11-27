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
  function RotasProtegidas() {
    const { token } = useAuth();
    return token ? <Outlet /> : <Navigate to="/login" />;
  }
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/cadastro-1" element={<Cadastro1 />} />
            <Route path="/cadastro-2" element={<Cadastro2 />} />
            <Route path="/cadastro-3" element={<Cadastro3 />} />
            <Route path="/login" element={<Login />} />
            <Route element={<RotasProtegidas />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
