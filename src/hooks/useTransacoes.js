import { useState, useEffect } from 'react';

function useTransacoes() {
  const transacoesIniciais = [
    { id: 1, descricao: "Salário", valor: 2500, tipo: "receita" },
    { id: 2, descricao: "Aluguel", valor: 900, tipo: "despesa" },
    { id: 3, descricao: "Mercado", valor: 350, tipo: "despesa" },
    { id: 4, descricao: "Transporte", valor: 230, tipo: "despesa" },
  ];

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

  const totalReceitas = transacoes
    .filter((t) => t.tipo === "receita")
    .reduce((acc, t) => acc + t.valor, 0);

  const totalDespesas = transacoes
    .filter((t) => t.tipo === "despesa")
    .reduce((acc, t) => acc + t.valor, 0);

  function adicionarTransacao() {
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
  }

  function deletarTransacao(id) {
    setTransacoes(transacoes.filter((t) => t.id !== id));
  }

  return {
    filtro, setFiltro,
    descricao, setDescricao,
    valor, setValor,
    tipo, setTipo,
    transacoesFiltradas,
    totalReceitas,
    totalDespesas,
    adicionarTransacao,
    deletarTransacao,
  };
}

export default useTransacoes;