# Sala de Aula - Frontend

Sistema de Gestão Acadêmica - Interface do Usuário

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Zustand 5.0.8
- React Hook Form 7.63.0
- Zod 4.1.11

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── core/                  # Componentes e lógica compartilhada
│   ├── components/        # Componentes genéricos
│   └── lib/              # Bibliotecas e configurações
├── domain/               # Módulos de domínio (features)
├── pages/                # Páginas da aplicação
│   └── layouts/          # Layouts compartilhados
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

## Configuração

Crie um arquivo `.env` baseado no `.env.example`:

```env
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Arquitetura

O projeto segue uma arquitetura modular baseada em domínios:

- **app/**: Configuração central da aplicação
- **core/**: Componentes e utilitários reutilizáveis
- **domain/**: Módulos de negócio organizados por funcionalidade
- **pages/**: Componentes de página para roteamento

## Padrões de Código

- TypeScript strict mode habilitado
- Componentes funcionais com hooks
- Tailwind CSS para estilização
- TanStack Query para gerenciamento de estado do servidor
- React Hook Form + Zod para formulários e validação