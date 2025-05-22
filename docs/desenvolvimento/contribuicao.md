# Guia de Contribuição

Obrigado por considerar contribuir com o projeto Mapa do Racismo! Este documento fornece diretrizes para contribuir com o projeto.

## Como Contribuir

### 1. Configurando o Ambiente

Primeiro, configure seu ambiente de desenvolvimento seguindo as instruções no [guia de instalação](../guia/instalacao.md).

### 2. Encontrando Tarefas

- Verifique as [issues abertas](https://github.com/Kelvisduank/mapa-do-racismo/issues) no GitHub
- Procure por issues marcadas como `good first issue` se você é novo no projeto
- Se você encontrou um bug ou tem uma ideia para uma nova funcionalidade, crie uma nova issue

### 3. Processo de Desenvolvimento

1. **Fork o repositório** para sua conta do GitHub
2. **Clone seu fork** para sua máquina local
3. **Crie uma branch** para sua contribuição:
   ```bash
   git checkout -b feature/nome-da-funcionalidade
   ```
4. **Faça suas alterações** seguindo as convenções de código
5. **Execute os testes** para garantir que nada foi quebrado:
   ```bash
   npm test
   ```
6. **Commit suas alterações** com mensagens claras:
   ```bash
   git commit -m "feat: adiciona funcionalidade X"
   ```
7. **Push para seu fork**:
   ```bash
   git push origin feature/nome-da-funcionalidade
   ```
8. **Crie um Pull Request** para o repositório original

### 4. Convenções de Código

- Use camelCase para variáveis e funções
- Use PascalCase para classes
- Escreva testes para novas funcionalidades
- Mantenha o código limpo e bem documentado
- Siga o estilo de código existente

### 5. Processo de Revisão

- Seu Pull Request será revisado pelos mantenedores
- Pode ser solicitado que você faça alterações
- Uma vez aprovado, seu código será mesclado ao projeto

## Reportando Bugs

Ao reportar bugs, inclua:

- Passos detalhados para reproduzir o bug
- O comportamento esperado vs. o comportamento observado
- Capturas de tela, se aplicável
- Informações sobre seu ambiente (navegador, sistema operacional, etc.)

## Sugerindo Melhorias

Para sugerir melhorias:

- Descreva claramente a melhoria
- Explique por que ela seria útil para o projeto
- Forneça exemplos de como ela funcionaria

## Código de Conduta

Este projeto segue um código de conduta que todos os contribuidores devem respeitar. Esperamos que todos os participantes:

- Sejam respeitosos e inclusivos
- Aceitem críticas construtivas
- Foquem no que é melhor para a comunidade
- Mostrem empatia com outros membros da comunidade

## Dúvidas?

Se você tiver dúvidas sobre como contribuir, sinta-se à vontade para abrir uma issue no GitHub.
