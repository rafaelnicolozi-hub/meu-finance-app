function TransactionCard({descricao, tipo, valor, onDeletar}) {
  return (
<div className={`border rounded-lg p-4 mb-2 flex justify-between items-center ${tipo === "receita" ? "bg-green-50" : "bg-red-50"}`}>      
  <p>{descricao}</p>
      <p>{tipo === "receita" ? "🟢" : "🔴"} R$ {valor}</p>
<button onClick={onDeletar} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Remover</button>   
 </div>
  );
}

export default TransactionCard;