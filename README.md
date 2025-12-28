# Eliam Portfolio

Um portfólio pessoal moderno construído com React, TypeScript e Vite. O projeto demonstra boas práticas de desenvolvimento front-end com componentes reutilizáveis, responsividade adaptativa e gerenciamento de tema.

## Estrutura básica do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar/         # Barra de navegação com menu mobile
│   ├── Hero/           # Seção principal com apresentação
│   ├── Timeline/       # Timeline de educação
│   ├── Projects/       # Grid de projetos
│   ├── Footer/         # Rodapé com contato
│   ├── SocialLinks/    # Links de redes sociais (reutilizado no header e footer)
│   ├── GradientButton/ # Botão com gradiente
│   ├── ThemeSwitch/    # Toggle tema claro/escuro
│   └── icons/          # Ícones customizados
├── context/            # Context API para estado global
├── pages/              # Páginas da aplicação
│   └── Home.tsx        # Página principal
├── styles/             # Estilos globais
├── App.tsx
└── main.tsx
```

## Funcionalidades Principais

### Responsividade com Material-UI
Todos os componentes utilizam o sistema de breakpoints do Material-UI para garantir adaptação perfeita em diferentes tamanhos de tela:
- **Mobile-first approach** com `xs`, `md`, `lg` breakpoints
- Flexbox responsivo para layouts dinâmicos
- Tipografia escalonada de acordo com o viewport

### Estado com useState
- **Menu Mobile** (Navbar): `useState` controla abertura/fechamento do drawer
- **Tema** (ThemeContext): `useState` mantém o estado light/dark, localStorage persistindo a escolha

## Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

## Notes

- Todos os componentes são funcionais
- Tipagem TypeScript rigorosa em todo o projeto
- CSS Modules para evitar conflitos de estilos
- Acessibilidade considerada em elementos interativos
- Material-UI Box e Container para layout responsivo
