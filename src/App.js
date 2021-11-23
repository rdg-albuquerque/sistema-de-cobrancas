import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LayoutPaginaSenha from "./components/LayoutPaginaSenha";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cadastro-2" element={<LayoutPaginaSenha />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
