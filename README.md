# 📚 Sistema de Notas Escolares

Um sistema web completo para gerenciamento de notas escolares, desenvolvido com Next.js 15, que permite o lançamento de notas, cálculo automático de médias e acompanhamento do desempenho dos alunos.

## ✨ Funcionalidades

### 🎯 Principais Recursos
- **Gerenciamento de Alunos**: Cadastro, listagem e edição de informações dos estudantes
- **Lançamento de Notas**: Interface intuitiva para registro de notas por disciplina
- **Cálculo Automático**: Médias calculadas automaticamente por disciplina e geral
- **Status de Aprovação**: Determinação automática de aprovação/reprovação (média ≥ 7.0)
- **Dashboard Interativo**: Estatísticas da turma com gráficos e métricas em tempo real
- **Relatórios Detalhados**: Visualização completa do desempenho individual e da turma

### 📊 Tipos de Avaliação Suportados
- Prova
- Trabalho
- Seminário
- Atividade
- Projeto

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Linguagem**: TypeScript
- **Banco de Dados**: SQL (compatível com PostgreSQL, MySQL)
- **Icons**: Lucide React

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Banco de dados SQL (PostgreSQL recomendado)

### Passo a Passo

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/seu-usuario/sistema-notas-escolares.git
cd sistema-notas-escolares
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. **Configure o banco de dados**
\`\`\`bash
# Execute os scripts SQL na ordem:
# 1. scripts/01-create-tables.sql
# 2. scripts/02-seed-data.sql
\`\`\`

4. **Configure as variáveis de ambiente**
\`\`\`bash
# Crie um arquivo .env.local
DATABASE_URL="sua_string_de_conexao_aqui"
\`\`\`

5. **Execute o projeto**
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

6. **Acesse o sistema**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎯 Como Usar

### 1. Cadastro de Alunos
- Acesse "Gerenciar Alunos" na página inicial
- Clique em "Novo Aluno" para cadastrar
- Preencha: nome, matrícula, turma e série

### 2. Lançamento de Notas
- Acesse "Lançar Nota" na página inicial
- Selecione o aluno e a disciplina
- Escolha o tipo de avaliação
- Insira a nota (0-10) e observações opcionais
- O sistema mostra automaticamente se a nota é aprovação/reprovação

### 3. Visualização de Resultados
- Acesse "Ver Médias" para relatório completo
- Visualize médias por disciplina e geral
- Acompanhe o status de cada aluno
- Filtre por turma ou série

### 4. Dashboard
- Visão geral das estatísticas da turma
- Gráficos de desempenho
- Métricas de aprovação/reprovação
- Distribuição de notas

## 📁 Estrutura do Projeto

\`\`\`
sistema-notas-escolares/
├── app/                    # App Router do Next.js
│   ├── api/               # API Routes
│   │   ├── students/      # Endpoints de alunos
│   │   ├── grades/        # Endpoints de notas
│   │   └── averages/      # Endpoints de médias
│   ├── students/          # Páginas de gerenciamento de alunos
│   ├── grades/            # Páginas de lançamento de notas
│   ├── results/           # Páginas de resultados
│   ├── dashboard/         # Dashboard principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   └── navigation.tsx    # Navegação principal
├── lib/                  # Utilitários e configurações
│   └── grade-calculations.ts # Lógica de cálculo de médias
├── scripts/              # Scripts SQL
│   ├── 01-create-tables.sql
│   └── 02-seed-data.sql
└── README.md
\`\`\`

## 🎨 Design System

O sistema utiliza uma paleta de cores educacional profissional:

- **Verde Principal**: `#22c55e` - Transmite crescimento e sucesso
- **Verde Escuro**: `#16a34a` - Para elementos de destaque
- **Cinzas**: Tons neutros para texto e backgrounds
- **Vermelho**: `#ef4444` - Para reprovações e alertas
- **Azul**: `#3b82f6` - Para informações e links

## 📊 Regras de Negócio

### Cálculo de Médias
- **Média por Disciplina**: Soma das notas ÷ quantidade de avaliações
- **Média Geral**: Soma de todas as médias por disciplina ÷ quantidade de disciplinas
- **Critério de Aprovação**: Média ≥ 7.0

### Tipos de Status
- ✅ **Aprovado**: Média ≥ 7.0
- ❌ **Reprovado**: Média < 7.0
- ⏳ **Em Andamento**: Sem notas suficientes

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Roadmap

- [ ] Autenticação de usuários (professores/coordenadores)
- [ ] Exportação de relatórios em PDF
- [ ] Notificações por email
- [ ] Integração com sistemas acadêmicos
- [ ] App mobile
- [ ] Backup automático de dados
      
---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
