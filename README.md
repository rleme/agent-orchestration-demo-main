# Demo de Orquestração de Agentes

Este repositório demonstra **handoffs de agentes** no GitHub Copilot, mostrando como vários agentes especializados colaboram para melhorar a qualidade do código por meio de fluxos de trabalho orquestrados.

## O que são Handoffs de Agentes?

Handoffs de agentes permitem encadear vários agentes de IA especializados, em que cada agente possui conhecimentos e responsabilidades específicos. Quando você interage com um agente, ele pode transferir automaticamente tarefas para outros agentes com base em suas capacidades, criando um fluxo de trabalho colaborativo.

## Agentes desta Demonstração

Este repositório inclui quatro agentes especializados:

- **🧪 Tester**: Engenheiro(a) de QA sênior para validação de lógica e casos de borda
- **📝 Scribe**: Especialista em documentação para criar documentação abrangente
- **🚀 PR Manager**: Arquiteto(a) líder para preparar Pull Requests e revisar código
- **🛡️ Gatekeeper**: Especialista em conformidade corporativa e quality gates

## Experimente

### Pré-requisitos
- GitHub Copilot habilitado no VS Code
- Extensão Copilot Chat instalada

### Como experimentar os Handoffs de Agentes

1. **Abra o repositório** no VS Code
2. **Abra o Copilot Chat**

e selecione `pr-manager` como agente ativo.
Use o prompt: `prepare this code for a pull request`

O PR Manager irá orquestrar todos os agentes para garantir que o código tenha testes, documentação e conformidade.

O arquivo `orderProcessor.js` é intencionalmente básico — ele não possui tratamento de erros, validação, documentação nem testes. Isso dá aos agentes bastante espaço para atuar!


