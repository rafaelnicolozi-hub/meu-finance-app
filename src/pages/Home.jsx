import TransactionCard from '../components/TransactionCard';
import useTransacoes from '../hooks/useTransacoes';

function Home() {
  const {
    filtro, setFiltro,
    descricao, setDescricao,
    valor, setValor,
    tipo, setTipo,
    transacoesFiltradas,
    totalReceitas,
    totalDespesas,
    adicionarTransacao,
    deletarTransacao,
  } = useTransacoes();

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex gap-2 mb-6">
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" className="border rounded px-2 py-1" />
        <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} className="border rounded px-2 py-1" />
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={adicionarTransacao}>
          Adicionar
        </button>
      </div>

      <div className="flex justify-between mb-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-green-600 font-bold">Receitas: R$ {totalReceitas}</p>
        <p className="text-red-600 font-bold">Despesas: R$ {totalDespesas}</p>
        <p className="font-bold">Saldo: R$ {totalReceitas - totalDespesas}</p>
      </div>

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
          onDeletar={() => deletarTransacao(t.id)}
        />
      ))}
    </div>
  );
}

export default Home;