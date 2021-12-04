import avatar from "../../assets/cliente-section-avatar.svg";
import BotaoCinza from "../BotaoCinza";
import BotaoRosa from "../BotaoRosa";
import TabelaCobrancas from "../TabelaCobrancas";
import "./style.css";

function ContainerClienteDetalhe() {
  return (
    <div className="cliente-detalhe--container">
      <div className="cliente-detalhe--top">
        <div>
          <img src={avatar} alt="" />
          <h1 className="cliente-detalhe--h1">Clientes</h1>
        </div>
        <div></div>
      </div>
      <div className="cliente-detalhe--dados">
        <div className="cliente-detalhe--container2">
          <h2 className="cliente-detalhe--h2">Dados do cliente</h2>
          <BotaoCinza isEdit>Editar cliente</BotaoCinza>
        </div>
        <table className="cliente-detalhe--t1">
          <tr>
            <th>Email</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>dwdqwd</td>
            <td>qwdqwd</td>
            <td>wefwefwef</td>
          </tr>
        </table>
        <table className="cliente-detalhe--t2">
          <tr>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Complemento</th>
            <th>CEP</th>
            <th>Cidade</th>
            <th>UF</th>
          </tr>
          <tr>
            <td>dwdqwd</td>
            <td>qwdqwd</td>
            <td>wefwefwef</td>
          </tr>
        </table>
      </div>
      <div className="cliente-detalhe--tabela-container">
        <div>
          <h2 className="cliente-detalhe--h2">Cobranças do cliente</h2>
          <BotaoRosa comprido>+ Nova Cobrança</BotaoRosa>
        </div>
        <TabelaCobrancas />
      </div>
    </div>
  );
}
export default ContainerClienteDetalhe;
