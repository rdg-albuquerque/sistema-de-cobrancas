import LayoutPaginaSenha from "./pages/LayoutPaginaSenha";
import Cadastro from "./pages/conclusao-cadastro";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cadastro-2" element={<LayoutPaginaSenha />} />
          <Route path="/cadastro-3" element={<Cadastro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
