import { useParams } from "react-router";
import ContainerClienteDetalhe from "../../components/ContainerClienteDetalhe";
import ContainerClientes from "../../components/ContainerClientes";
import { Header } from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import ModalEditarUsuario from "../../components/ModalEditarUsuario";
import "./style.css";

function Clientes() {
  const { user_id } = useParams();
  return (
    <div className="clientes">
      <MenuLateral />
      <Header />
      <section className="clientes-section">
        {!user_id ? <ContainerClientes /> : <ContainerClienteDetalhe />}
      </section>
      <ModalEditarUsuario />
    </div>
  );
}

export default Clientes;
