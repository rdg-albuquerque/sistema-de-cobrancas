import LayoutPaginaSenha from './components/LayoutPaginaSenha';
import ConfirmacaoCadastro from "./pages/conclusao-cadastro";
import LayoutLogin from "./pages/Layout-login";


function App() {
  return <div className="App">
    <LayoutPaginaSenha />
    <ConfirmacaoCadastro />
    <LayoutLogin />
  </div>;
}

export default App;
