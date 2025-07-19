# 🎨 Frontend - Gerenciamento de Produtos

Interface web moderna desenvolvida em React para gerenciar produtos de forma intuitiva e eficiente.

## ✨ Funcionalidades

- ✅ **Formulário inteligente** com geração automática de SKU
- ✅ **Lista dinâmica** de produtos ordenada por nome
- ✅ **Remoção segura** com confirmação
- ✅ **Exibição da primeira letra ausente** do alfabeto
- ✅ **Validação em tempo real** dos campos
- ✅ **Feedback visual** para todas as ações
- ✅ **Design responsivo** e moderno
- ✅ **Tratamento robusto de erros**
- ✅ **Integração completa** com API REST

## 🛠️ Tecnologias

- **React 18** - Biblioteca para interfaces
- **JavaScript ES6+** - Linguagem moderna
- **CSS3** - Estilização avançada
- **Fetch API** - Comunicação HTTP
- **Hooks** - useState, useEffect
- **HTML5** - Estrutura semântica

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── ProductForm.js      # Formulário de cadastro
│   ├── ProductList.js      # Lista de produtos
│   └── ProductItem.js      # Item individual da lista
├── services/               # Serviços de comunicação
│   └── api.js             # Configuração da API
├── utils/                 # Funções utilitárias
│   └── letterUtils.js     # Cálculo da letra ausente
├── App.js                 # Componente principal
├── App.css               # Estilos globais
└── index.js              # Ponto de entrada
```

## 🔧 Instalação

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (vem com Node.js)
- **API Backend rodando** na porta 3001

### Passo a passo

```bash
# 1. Clone o repositório (ou baixe os arquivos)
git clone <url-repositorio>
cd produto-frontend

# 2. Instale as dependências
npm install

# 3. Inicie a aplicação
npm start

# A aplicação abrirá em http://localhost:3000
```

### 📋 ProductList  
**Responsabilidades:**
- Renderiza lista de produtos
- Ordena produtos por nome
- Exibe mensagem quando lista vazia
- Gerencia estado de carregamento

### 🏷️ ProductItem
**Responsabilidades:**
- Exibe informações de um produto
- Mostra primeira letra ausente
- Botão de remoção com confirmação
- Formatação de preço em Real

## 🎨 Interface e UX

### Design System
```css
/* Cores principais */
:root {
  --primary: #007bff;
  --success: #28a745;
  --danger: #dc3545;
  --warning: #ffc107;
  --light: #f8f9fa;
  --dark: #343a40;
}
```

### Componentes Visuais
- **Formulário**: Cards com bordas arredondadas
- **Botões**: Estados hover e disabled
- **Lista**: Items com sombra sutil
- **Alerts**: Cores contextuais para erros/sucesso
- **Loading**: Estados visuais de carregamento

### Responsividade
```css
/* Mobile First */
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    padding: 10px;
  }
  
  .form-container {
    margin-bottom: 20px;
  }
}
```

## 🔄 Fluxo de Dados

### Estado da Aplicação
```javascript
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [errors, setErrors] = useState([]);
```

### Ciclo de Vida
1. **Montagem**: Carrega produtos da API
2. **Criação**: Adiciona produto e atualiza lista
3. **Remoção**: Remove produto e atualiza estado
4. **Erro**: Exibe feedback visual ao usuário

### Comunicação com API
```javascript
// Serviço centralizado
const API_BASE = 'http://localhost:3001/api';

const productService = {
  create: (data) => fetch(`${API_BASE}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }),
  
  getAll: () => fetch(`${API_BASE}/products`),
  
  delete: (id) => fetch(`${API_BASE}/products/${id}`, {
    method: 'DELETE'
  })
};
```

## ✅ Validações e Tratamento de Erros

### Validações Frontend
- **Nome**: Campo obrigatório, não vazio
- **Preço**: Número positivo, formato decimal
- **SKU**: Preenchimento automático, editável

### Tratamento de Erros
```javascript
// Erros de validação da API
{
  "errors": ["Nome é obrigatório", "SKU já existe"]
}

// Erro de conexão
{
  "error": "Erro ao conectar com o servidor"
}

// Exibição visual
<div className="error-container">
  {errors.map((error, index) => (
    <p key={index} className="error-message">{error}</p>
  ))}
</div>
```

## 🧪 Testando a Interface

### Cenários de Teste

1. **Cadastro de Produto**
   - Preencha nome: "Notebook Gamer"
   - SKU gerado automaticamente: "NOT1234"
   - Defina preço: "2500.99"
   - Clique "Adicionar Produto"

2. **Validação de Erros**
   - Tente enviar formulário vazio
   - Digite preço negativo
   - Use SKU já existente

3. **Remoção de Produto**
   - Clique "Remover" em um item
   - Confirme na caixa de diálogo
   - Produto desaparece da lista

4. **Primeira Letra Ausente**
   - Crie produto "Mouse"
   - Observe: "Primeira letra ausente: a"

## 📱 Responsividade

### Breakpoints
```css
/* Mobile: até 768px */
.container {
  flex-direction: column;
  padding: 10px;
}

/* Tablet: 768px - 1024px */
.container {
  padding: 15px;
  gap: 15px;
}

/* Desktop: 1024px+ */
.container {
  padding: 20px;
  gap: 20px;
}
```

### Adaptações Mobile
- **Formulário**: Inputs ocupam largura total
- **Lista**: Cards empilhados verticalmente  
- **Botões**: Tamanho touch-friendly
- **Texto**: Tamanhos escaláveis


### Para Desenvolvimento
- **ESLint**: Linting de código
- **Prettier**: Formatação automática
- **Jest**: Testes unitários

## 🎯 Performance

### Otimizações Implementadas
- **useState** para estado local
- **useEffect** com dependencies array
- **Conditional rendering** para listas vazias
- **Event delegation** para botões

## 📄 Licença

Projeto desenvolvido para fins educacionais e demonstração técnica.

---

🔗 **Backend API**: Esta interface consome dados da [API de Produtos](/produto-api/README.md)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
