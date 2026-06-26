import { useState, useEffect } from 'react';
import TransactionCard from '../TransactionCard';

  const transacoesIniciais = [
  { id: 1, descricao: "Salário", valor: 2500, tipo: "receita" },
  { id: 2, descricao: "Aluguel", valor: 900, tipo: "despesa" },
  { id: 3, descricao: "Mercado", valor: 350, tipo: "despesa" },
  { id: 4, descricao: "Transporte", valor: 230, tipo: "despesa" },
];

function Home() {
  const [filtro, setFiltro] = useState("todas");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState("receita");
const [transacoes, setTransacoes] = useState(() => {
  const salvo = localStorage.getItem("transacoes");
  return salvo ? JSON.parse(salvo) : transacoesIniciais;
});
useEffect(() => {
  if (transacoes.length > 0) {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }
}, [transacoes]);
const transacoesFiltradas = transacoes.filter((t) => {
  if (filtro === "todas") return true;
  return t.tipo === filtro;
});
  // Para receitas:
const totalReceitas = transacoes
  .filter((t) => t.tipo === "receita")
  .reduce((acc, t) => acc + t.valor, 0);

// Para despesas:
const totalDespesas = transacoes
  .filter((t) => t.tipo === "despesa")
  .reduce((acc, t) => acc + t.valor, 0);
 return (
<div className="p-6 max-w-md mx-auto">     {/* div externa - container geral */}
    
    <div className="flex gap-2 mb-6">         {/* div do formulário */}
  <input
      type="text"
      value={descricao}
      onChange={(e) => setDescricao(e.target.value)}
      placeholder="Descrição"
      className="border rounded px-2 py-1" />
    <input
      type="number"
      value={valor}
      onChange={(e) => setValor(e.target.value)}
      className="border rounded px-2 py-1"
    />
    <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
      <option value="receita">Receita</option>
      <option value="despesa">Despesa</option>
    </select>
    <button 
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={() => {
        const novaTransacao = {
        id: Date.now(),
        descricao,
        valor: parseFloat(valor),
        tipo,
      };
      setTransacoes([...transacoes, novaTransacao]);
      setDescricao("");
      setValor(0);
      setTipo("receita");
    }}>
      Adicionar
    </button>
</div> {/* area de calculo total */}
  <div className="flex justify-between mb-4 p-4 bg-gray-100 rounded-lg">
  <p className="text-green-600 font-bold">Receitas: R$ {totalReceitas}</p>
  <p className="text-red-600 font-bold">Despesas: R$ {totalDespesas}</p>
  <p className="font-bold">Saldo: R$ {totalReceitas - totalDespesas}</p>
</div> {/* area de filtro */}
<div className="flex gap-2 mb-4">
  <button onClick={() => setFiltro("todas")} className="px-3 py-1 rounded border">Todas</button>
  <button onClick={() => setFiltro("receita")} className="px-3 py-1 rounded border">Receitas</button>
  <button onClick={() => setFiltro("despesa")} className="px-3 py-1 rounded border">Despesas</button>
</div>

    {transacoesFiltradas.map((t) => (
      <TransactionCard
        key={t.id}
        descricao={t.descricao}
        valor={t.valor}
        tipo={t.tipo}
        onDeletar={() => {
          setTransacoes(transacoes.filter((transacao) => transacao.id !== t.id));
        }}
      />
    ))}
  </div>
); 
}
export default Home;