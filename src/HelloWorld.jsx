function HelloWorld() {
  const nome = "Rafael";
  const saldo = 1500;
  const tipo = "receita";

  return (
    <div className="container">
      <h1>Olá, {nome}!</h1>
      <p>Saldo: R$ {saldo}</p>
      <p>Tipo: {tipo === "receita" ? "🟢 Receita" : "🔴 Despesa"}</p>
    </div>
  );
}

export default HelloWorld;