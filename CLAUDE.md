# Contexto

Estou aprendendo React vindo do Salesforce/LWC.
Estou construindo um app de financas pessoais em React como projeto de estudo.
O objetivo final e contribuir no px-motor frontend (React + Vite + TanStack Router/Query + @px-center design system).

## Stack do meu projeto
- React + Vite
- React Router
- Tailwind CSS
- TanStack Query (futuro)

## Como me ajudar
- EU escrevo o codigo. Voce me ENSINA.
- Explique conceitos comparando com Salesforce/LWC quando possivel
- Prefira exemplos praticos e curtos
- Se eu colar codigo, revise e sugira melhorias
- Se eu travar, me ajude a debugar passo a passo — nao resolva por mim
- Quando eu pedir ajuda, me guie ate eu entender. Nao entregue a resposta pronta.

## Stack do px-motor frontend (referencia futura)
- React + Vite + TanStack Router/Query
- Design system: @px-center/* (button, input, modal, etc)
- Monorepo: apps/web, apps/api, apps/workers, packages/contracts
- Colocation: pages//components/ para componentes locais
- Conventional commits: feat(web): descricao

## Progresso

### Sprint 01 — concluído
- Projeto criado com Vite
- Estrutura de pastas entendida
- Componente HelloWorld criado
- JSX praticado: className, {}, tags fechadas, elemento raiz único
- Projeto rodando no localhost

### Sprint 02 — concluído
- TransactionCard com props
- Destructuring: entendi as duas formas (props.x e { x })
- .map() renderizando lista de transações
- onClick logando id no console
- Renderização condicional com ternário
- Inspecionado no DevTools — árvore de componentes visível

### Sprint 03 — concluído
- useState declarado dentro da função App
- Botão Remover funcionando com .filter() — remove pelo id
- Formulário com 3 campos: descrição, valor, tipo
- Inputs controlados com value + onChange
- Adicionando transações com spread operator [...transacoes, novaTransacao]
- Aprendido: nunca mutar o estado diretamente, sempre criar cópia nova

### Sprint 04 — concluído
- useEffect com [transacoes] — salva no localStorage toda vez que o estado muda
- useState com função lazy — lê do localStorage na inicialização
- localStorage.setItem + JSON.stringify para salvar
- localStorage.getItem + JSON.parse para carregar
- Dados persistem entre recarregamentos da página
- Aprendido: inicializar useState com função lazy é mais elegante que dois useEffect separados
- Aprendido: nunca salvar array vazio no localStorage

### Sprint 05 — em andamento
- Tailwind CSS instalado e configurado (@tailwindcss/vite)
- App estilizado: container centralizado, formulário em linha, cards com cores (verde/vermelho)
- Botões estilizados (Adicionar azul, Remover vermelho)
- Inputs e select com borda e padding
- Filtros implementados: Todas / Receitas / Despesas (useState + .filter())
- README.md criado documentando o projeto

### Pendente para retomar
- Praticar roteiro de demo (Parte 3 - decisões técnicas, Parte 4 - resumo dos sprints)
- Simular perguntas do Kalb para praticar respostas
- Falta no app: exibir saldo total (receitas - despesas)

### Sprint 06 — concluído
- React Router instalado (react-router-dom)
- BrowserRouter, Routes, Route configurados no App.jsx
- Páginas criadas em src/pages/ (Home.jsx e Sobre.jsx)
- Componente Navbar criado em src/components/Navbar.jsx
- Link do React Router — navegação client-side sem recarregar a página

### Sprint 07 — concluído
- Custom hook useTransacoes criado em src/hooks/
- Lógica extraída do Home.jsx: estados, useEffect, filtros, cálculos, funções
- Home.jsx ficou só com JSX — mais limpo e profissional
- Aprendido: custom hooks encapsulam lógica reutilizável, componente fica só com visual