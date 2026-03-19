# FIAP App Mobile

Aplicativo mobile da FIAP desenvolvido em **React Native + NativeWind**, como projeto acadêmico da disciplina **Mobile Development & IoT** — turma 3ESPW (2026).

---

## Descrição do Projeto

Neste primeiro Checkpoint, o objetivo foi desenvolver a **tela de Login** do aplicativo FIAP, utilizando React Native com estilização em NativeWind (Tailwind CSS), aplicando componentização e boas práticas de organização de código.

Para as entregas futuras, o objetivo principal do aplicativo é centralizar as informações acadêmicas do aluno em um único lugar, oferecendo acesso rápido e prático às aulas do dia, avisos importantes, disciplinas do semestre e boletim escolar — facilitando o dia a dia do estudante e eliminando a necessidade de acessar múltiplas plataformas.

---

## Requisitos Implementados — CP1

**RF01 — Configuração do Ambiente e Projeto React Native**
Criação do projeto utilizando o template base React Native + NativeWind, com estrutura de pastas organizada seguindo o padrão adotado em aula.

**RF02 — Tela de Login**
Desenvolvimento da tela de login do APP FIAP, contendo logo institucional, campos de entrada de RM e senha, switch de "Manter-me conectado", botão de acesso e rodapé informativo. A tela é não funcional neste checkpoint, representando a interface visual do fluxo de autenticação.

**RF03 — Componentização**
Os elementos da tela foram modularizados em componentes reutilizáveis e personalizados:
- `LoginHeader` — logo e título institucional
- `LoginInput` — campo de entrada reutilizável com suporte a label, placeholder, máscara de senha e link auxiliar
- `KeepSignedSwitch` — switch com label "Manter-me conectado"
- `LoginButton` — botão de ação principal

**RF04 — Estilização com NativeWind**
Toda a estilização foi realizada com NativeWind (Tailwind CSS para React Native), sem uso de StyleSheet tradicional, aplicando a identidade visual da FIAP com fundo preto e destaque na cor `#ED145B`.

---

## Requisitos a serem implementados nos próximos CPs

| # | Requisito | Descrição |
|---|-----------|-----------|
| RF05 | Autenticação de Usuário | Login funcional com RM e senha, acesso restrito a usuários cadastrados |
| RF06 | Tela Principal (Dashboard) | Tela inicial personalizada com nome, turma, curso, RM e resumo do dia |
| RF07 | Aulas do Dia | Exibição das aulas do dia com horário, disciplina e sala |
| RF08 | Avisos | Comunicados institucionais com possibilidade de visualizar conteúdo completo |
| RF09 | Disciplinas do Semestre | Listagem das disciplinas matriculadas com turma, curso e ano |
| RF10 | Navegação por Abas | Barra inferior com acesso às seções: Início, Aulas, Calendário, Boletim e Perfil |
| RF11 | Menu Hambúrguer | Menu lateral com perfil, configurações, conteúdo programático, suporte e logout |

---

## Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [NativeWind](https://www.nativewind.dev/) (Tailwind CSS para React Native)
- [TypeScript](https://www.typescriptlang.org/)

---

## Estrutura do Projeto

```
fiap-app-mobile/
├── assets/               # Imagens e ícones do app
├── components/           # Componentes reutilizáveis
│   ├── KeepSignedSwitch.tsx
│   ├── LoginButton.tsx
│   ├── LoginHeader.tsx
│   └── LoginInput.tsx
├── styles/               # Estilos globais e tokens
│   ├── colors.ts
│   ├── fontFamily.ts
│   └── global.css
├── types/                # Tipagens globais
│   └── nativewind-env.d.ts
├── App.tsx               # Entrada principal do app
├── babel.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/fiap-app-mobile.git

# Entre na pasta do projeto
cd fiap-app-mobile

# Instale as dependências
npm i

# Inicie o projeto
npm start

# Abra no emulador Android
# Pressione A

# Abra no emulador iOS
# Pressione I
```

---

## Prints da tela de Login do APP FIAP

### Manter-me Conectado ativo e Sem máscara de senha

![WhatsApp Image 2026-03-19 at 16 30 45](https://github.com/user-attachments/assets/050f5681-644e-4da2-a428-feed3c0b5923)

### Manter-me conectado inativo e Com Máscara de senha

![WhatsApp Image 2026-03-19 at 16 30 46](https://github.com/user-attachments/assets/a40727c9-4a9f-43c8-8b48-f6535e2015ba)

## Integrantes Icers— 3ESPW

| Nome | RM |
|------|----|
| Camila Pedroza da Cunha | RM 558768 |
| Isabelle Dallabeneta Carlesso | RM 554592 |
| Nicoli Amy Kassa | RM 559104 |
| Pedro Almeida e Camacho | RM 556831 |
| Renan Dias Utida | RM 558540 |

---

> Disciplina: Mobile Development & IoT — Prof. Adeilton Meneses  
> FIAP — Engenharia de Software · 2026
