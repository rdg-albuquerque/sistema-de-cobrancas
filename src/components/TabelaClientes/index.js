import { useEffect } from "react";
import { Link } from "react-router-dom";
import novaCobranca from "../../assets/nova-cobranca.svg";
import clienteOrdenacao from "../../assets/ordenacao.svg";
import { useGlobal } from "../../hooks/useGlobal";
import { clientes } from "../../objClientes";
import "./style.css";

function TabelaClientes() {
  const {
    atualizarClientes,
    listaClientes,
    setClienteAtual,
    setOpenCadastrarCobranca,
  } = useGlobal();

  useEffect(() => {
    atualizarClientes();
    //eslint-disable-next-line
  }, []);

  return (
    <table className="clientes-tabela">
      <thead>
        <tr className="clientes--tr">
          <th className="clientes--th cliente--th">
            <img src={clienteOrdenacao} alt="" />
            <span>Cliente</span>
          </th>
          <th className="clientes--th">CPF</th>
          <th className="clientes--th">E-mail</th>
          <th className="clientes--th">Telefone</th>
          <th className="clientes--th">Status</th>
          <th className="clientes--th">Criar cobrança</th>
        </tr>
      </thead>
      <tbody>
        {!!listaClientes &&
          listaClientes.map((cliente, index) => {
            return (
              <tr
                style={
                  index === clientes.length - 1 ? { borderBottom: "none" } : {}
                }
                key={cliente.id}
                className="clientes--tr"
              >
                <td className="clientes--td">
                  <Link to={`/clientes/${cliente.id}`}>{cliente.nome}</Link>
                </td>
                <td className="clientes--td">{cliente.cpf}</td>
                <td className="clientes--td">{cliente.email}</td>
                <td className="clientes--td">{cliente.telefone}</td>
                <td className="clientes--td">
                  <span
                    className={
                      cliente.status === "Inadimplente"
                        ? "inadimplente--td"
                        : "emdia--td"
                    }
                  >
                    {cliente.status}
                  </span>
                </td>
                <td className="clientes--td">
                  <img
                    onClick={() => {
                      setClienteAtual(cliente);
                      setOpenCadastrarCobranca(true);
                    }}
                    style={{ display: "inline-block", cursor: "pointer" }}
                    src={novaCobranca}
                    alt=""
                  />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default TabelaClientes;
