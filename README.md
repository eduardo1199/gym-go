# GymGo

## Projeto voltado para check-in de alunos para diferentes academias, administração de entrada e saídas de cliente para cada plano, administração de alunos para academia.

<aside>
💡 Dashboard de demandas → [https://trello.com/b/YVRGkB90/kanban-quadro-modelo](https://trello.com/b/YVRGkB90/kanban-quadro-modelo)
Fluxo do usuário → [https://miro.com/app/board/uXjVMHku6ek=/](https://miro.com/app/board/uXjVMHku6ek=/)
Figma → https://www.figma.com/file/juBBfyyQHqJj2T25RnSG0z/GymGo?type=design&node-id=0-1&mode=design&t=LmN6cf1KzlXPNARG-0

</aside>

## Criação de projeto

Create project using npm with exempla cypress setings.

```jsx
npx create-next-app@latest -e with-cypress --use-npm gym-go

What is your project named? gym-go
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use `src/` directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to customize the default import alias? Yes
What import alias would you like configured? @/*
```

<aside>
💡 Options settings create project.

</aside>

## Package ESlint

<aside>
💡 npm instal eslint @eduardo1199/eslint-config -D

</aside>

This is a package is my eslint config → ****[@eduardo1199/eslint-config](https://www.npmjs.com/package/@eduardo1199/eslint-config)****

## Depedências

```json
{
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "e2e": "start-server-and-test dev http://localhost:3000 \"cypress open --e2e\"",
    "e2e:headless": "start-server-and-test dev http://localhost:3000 \"cypress run --e2e\"",
    "component": "cypress open --component",
    "component:headless": "cypress run --component"
  },
  "dependencies": {
    "next": "latest",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@types/node": "18.0.6",
    "@types/react": "18.0.15",
    "@types/react-dom": "18.0.6",
    "cypress": "12.3.0",
    "start-server-and-test": "1.15.2",
    "typescript": "4.7.4"
  }
}
```