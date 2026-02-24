# Agent Orchestration Demo

This repository demonstrates **agent handoffs** in GitHub Copilot, showcasing how multiple specialized agents collaborate to improve code quality through orchestrated workflows.

## What are Agent Handoffs?

Agent handoffs allow you to chain multiple specialized AI agents together, where each agent has specific expertise and responsibilities. When you interact with one agent, it can automatically hand off tasks to other agents based on their capabilities, creating a collaborative workflow.

## Agents in This Demo

This repository includes four specialized agents:

- **🧪 Tester**: Senior QA Engineer for logic and edge-case validation
- **📝 Scribe**: Documentation specialist for creating comprehensive docs
- **🚀 PR Manager**: Lead Architect for PR readiness and code review
- **🛡️ Gatekeeper**: Enterprise Compliance and Quality Gate expert

## Try It Out

### Prerequisites
- GitHub Copilot enabled in VS Code
- Copilot Chat extension installed

### How to Experience Agent Handoffs

1. **Open the repository** in VS Code
2. **Open Copilot Chat** 
  
and select pr-manager as the active agent.
Give prompt as 'prepare this code for a pull request'

The PR manager will orchestrate all agents to ensure the code is test-covered, documented, and compliant.



The `orderProcessor.js` file is intentionally basic - it's missing error handling, validation, documentation, and tests. This gives the agents plenty to work with!


