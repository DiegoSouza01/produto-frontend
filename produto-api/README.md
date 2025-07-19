# 🚀 API de Gerenciamento de Produtos

API REST desenvolvida em Node.js + Express para gerenciamento completo de produtos com funcionalidades avançadas.

## ⚡ Funcionalidades

- ✅ **CRUD completo** de produtos
- ✅ **Validações robustas** de dados
- ✅ **Ordenação automática** por nome
- ✅ **Cálculo inteligente** da primeira letra ausente do alfabeto
- ✅ **Persistência em SQLite**
- ✅ **Tratamento de erros** personalizado
- ✅ **Arquitetura MVC** bem estruturada
- ✅ **CORS habilitado** para integração frontend

## 🛠️ Tecnologias

- **Node.js** (v14+) - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **SQLite3** - Banco de dados relacional leve
- **CORS** - Middleware para requisições cross-origin
- **Nodemon** - Auto-reload durante desenvolvimento

## 📁 Arquitetura do Projeto

```
src/
├── controllers/           # Lógica de negócio e validações
│   └── productController.js
├── models/               # Interação com banco de dados
│   └── productModel.js
├── routes/               # Definição das rotas da API
│   └── productRoute.js
├── database/            # Configuração e conexão SQLite
│   └── database.js
├── utils/               # Funções utilitárias
│   └── letra-ausente.js
└── app.js               # Configuração do Express
server.js                # Servidor principal
package.json
products.db              # Banco SQLite (gerado automaticamente)
```

## 🔧 Instalação

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (vem com Node.js)

## 🌐 Endpoints da API

Base URL: `http://localhost:3001/api`

| Método | Endpoint | Descrição | Parâmetros |
|--------|----------|-----------|------------|
| `POST` | `/products` | Criar produto | Body: `{name, price, sku}` |
| `GET` | `/products` | Listar produtos | Nenhum |
| `GET` | `/products/:id` | Buscar por ID | Param: `id` |
| `PUT` | `/products/:id` | Atualizar produto | Param: `id`, Body: `{name, price, sku}` |
| `DELETE` | `/products/:id` | Deletar produto | Param: `id` |

## 🧮 Algoritmo da Primeira Letra Ausente

Funcionalidade única que calcula a primeira letra do alfabeto (a-z) que não está presente no nome do produto.

### Exemplos:
- **"Notebook"** → `a` (primeira letra ausente)
- **"Mouse"** → `a` (primeira letra ausente)  
- **"Teclado"** → `b` (primeira letra ausente)
- **"Fone de ouvido"** → `a` (primeira letra ausente)
- **"abcdefghijklmnopqrstuvwxyz"** → `_` (todas presentes)

### Regras de Negócio
- **Nome**: Obrigatório, não pode ser vazio
- **Preço**: Obrigatório, deve ser maior que zero
- **SKU**: Obrigatório, deve ser único no sistema

## 🔍 Logs e Monitoramento

O servidor registra:
- ✅ Inicialização na porta 3001
- ✅ Criação automática da tabela produtos
- ❌ Erros de SQL e validação
- 📝 Requisições recebidas (via middleware)

## 📄 Licença

Projeto desenvolvido para fins educacionais e de demonstração técnica.

---

🔗 **Integração**: Esta API foi desenvolvida para funcionar com o Frontend React.
