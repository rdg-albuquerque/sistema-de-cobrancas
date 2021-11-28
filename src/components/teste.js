const paginaAtual = window.location.pathname;

function SideMenu() {
  return (
    <div className="sidemenu">
      <div
        className={`home ${paginaAtual === "/" ? "borda-lateral" : ""}`}
      ></div>
      <div
        className={`clientes ${
          paginaAtual === "/clientes" ? "borda-lateral" : ""
        }`}
      ></div>
      <div
        className={`cobrancas ${
          paginaAtual === "/cobrancas" ? "borda-lateral" : ""
        }`}
      ></div>
    </div>
  );
}
