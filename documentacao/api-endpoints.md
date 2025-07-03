# Documentação dos Endpoints da API Laravel

## Visão Geral

Este documento descreve os endpoints da API Laravel utilizados pelo frontend Next.js do projeto LiveTurb. A API utiliza Laravel Sanctum para autenticação baseada em cookies e sessões.

## Configuração Base

### URL Base da API
- **Produção**: `https://liveturb.com`
- **Desenvolvimento**: Configurável via variável de ambiente `NEXT_PUBLIC_BACKEND_URL`
- **Endpoints relativos**: `/api/v1` (para endpoints do marketplace)

### Autenticação
- **Método**: Laravel Sanctum (Cookie-based authentication)
- **Middleware**: `auth:sanctum` nos endpoints protegidos
- **CSRF Protection**: Habilitado via `/sanctum/csrf-cookie`

### Headers Padrão
```javascript
{
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}
```

### Configuração do Axios
```javascript
// lib/axios.js
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://liveturb.com',
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
```

---

## Endpoints da Página Inicial (Homepage)

### 1. Buscar Anúncios
- **URL**: `/api/v1/anuncios`
- **Método**: `GET`
- **Autenticação**: Não requerida (público)
- **Finalidade**: Buscar lista paginada de anúncios para exibição no marketplace

#### Parâmetros de Query
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `page` | integer | Não | Número da página (padrão: 1) |
| `per_page` | integer | Não | Itens por página (padrão: 10) |
| `busca` | string | Não | Termo de busca para filtrar anúncios |
| `nicho` | string | Não | Filtro por nicho específico |
| `categoria` | string | Não | Filtro por categoria (escalando, low-ticket, destaque) |

#### Exemplo de Requisição
```javascript
GET /api/v1/anuncios?page=1&per_page=10&categoria=escalando&nicho=relacionamento
```

#### Formato da Resposta
```json
{
  "data": [
    {
      "id": 1,
      "titulo": "Título do Anúncio",
      "descricao": "Descrição do anúncio",
      "preco": 97.00,
      "categoria": "escalando",
      "nicho": "relacionamento",
      "imagem_url": "https://exemplo.com/imagem.jpg",
      "created_at": "2024-01-01T00:00:00.000000Z",
      "updated_at": "2024-01-01T00:00:00.000000Z"
    }
  ],
  "current_page": 1,
  "last_page": 5,
  "per_page": 10,
  "total": 50,
  "from": 1,
  "to": 10
}
```

### 2. Buscar Categorias
- **URL**: `/api/v1/categorias`
- **Método**: `GET`
- **Autenticação**: Não requerida (público)
- **Finalidade**: Obter lista de categorias disponíveis com contadores

#### Formato da Resposta
```json
{
  "data": [
    {
      "id": "escalando",
      "nome": "Escalando",
      "contador": 25,
      "gradientClass": "bg-gradient-to-r from-amber-500 to-orange-500",
      "shadowClass": "shadow-amber-500/30"
    },
    {
      "id": "low-ticket",
      "nome": "Low ticket",
      "contador": 15,
      "gradientClass": "bg-gradient-to-r from-emerald-500 to-teal-500",
      "shadowClass": "shadow-emerald-500/30"
    }
  ]
}
```

### 3. Buscar Nichos
- **URL**: `/api/v1/nichos`
- **Método**: `GET`
- **Autenticação**: Não requerida (público)
- **Finalidade**: Obter lista de nichos disponíveis para filtros

#### Formato da Resposta
```json
{
  "data": [
    {
      "id": "relacionamento",
      "nome": "Relacionamento"
    },
    {
      "id": "saude",
      "nome": "Saúde e Bem-estar"
    },
    {
      "id": "financas",
      "nome": "Finanças"
    }
  ]
}
```

---

## Endpoints de Autenticação (Login)

### 1. Obter Cookie CSRF
- **URL**: `/sanctum/csrf-cookie`
- **Método**: `GET`
- **Autenticação**: Não requerida
- **Finalidade**: Obter cookie CSRF necessário para autenticação com Sanctum

#### Exemplo de Requisição
```javascript
await axios.get('/sanctum/csrf-cookie');
```

### 2. Verificar Usuário Autenticado
- **URL**: `/api/user`
- **Método**: `GET`
- **Autenticação**: Requerida (Cookie de sessão)
- **Finalidade**: Verificar se o usuário está autenticado e obter dados do usuário

#### Formato da Resposta (Sucesso - 200)
```json
{
  "id": 1,
  "name": "Nome do Usuário",
  "email": "usuario@exemplo.com",
  "email_verified_at": "2024-01-01T00:00:00.000000Z",
  "created_at": "2024-01-01T00:00:00.000000Z",
  "updated_at": "2024-01-01T00:00:00.000000Z"
}
```

#### Resposta de Erro (401 - Não Autenticado)
```json
{
  "message": "Unauthenticated."
}
```

### 3. Login (Redirecionamento Externo)
- **URL**: `https://liveturb.com/login`
- **Método**: Redirecionamento via browser
- **Finalidade**: Página de login externa do sistema principal

#### Parâmetros de Query
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `redirect_to` | string | Não | URL para redirecionamento após login bem-sucedido |

#### Exemplo de Redirecionamento
```javascript
const loginUrl = `https://liveturb.com/login`;
const redirectTo = encodeURIComponent(`https://app.liveturb.com${currentPath}`);
window.location.href = `${loginUrl}?redirect_to=${redirectTo}`;
```

---

## Endpoints Futuros (Planejados)

### 1. Gerenciar Favoritos
- **URL**: `/api/v1/favoritos`
- **Método**: `POST`
- **Autenticação**: Requerida
- **Finalidade**: Adicionar/remover anúncios dos favoritos do usuário

#### Corpo da Requisição
```json
{
  "anuncio_id": 1,
  "action": "add" // ou "remove"
}
```

---

## Variáveis de Ambiente

### Frontend (Next.js)
```env
# URL base do backend Laravel
NEXT_PUBLIC_BACKEND_URL=https://liveturb.com

# Outras configurações específicas do projeto
NEXT_PUBLIC_APP_URL=https://app.liveturb.com
```

### Backend (Laravel)
```env
# Configurações do Sanctum
SANCTUM_STATEFUL_DOMAINS=app.liveturb.com,localhost:3000
SESSION_DOMAIN=.liveturb.com

# CORS
CORS_ALLOWED_ORIGINS=https://app.liveturb.com,http://localhost:3000
```

---

## Dependências do Frontend

### Principais Bibliotecas
- **axios**: `^1.8.4` - Cliente HTTP para requisições à API
- **next**: Framework React
- **react**: Biblioteca principal

### Configuração no package.json
```json
{
  "dependencies": {
    "axios": "^1.8.4",
    "next": "latest",
    "react": "latest"
  }
}
```

---

## Instruções para Validação

### 1. Usando Postman

#### Configurar Ambiente
1. Criar nova coleção "LiveTurb API"
2. Configurar variável de ambiente:
   - `base_url`: `https://liveturb.com`

#### Testar Endpoints Públicos
```bash
# 1. Buscar anúncios
GET {{base_url}}/api/v1/anuncios

# 2. Buscar categorias
GET {{base_url}}/api/v1/categorias

# 3. Buscar nichos
GET {{base_url}}/api/v1/nichos
```

#### Testar Autenticação
```bash
# 1. Obter CSRF cookie
GET {{base_url}}/sanctum/csrf-cookie

# 2. Verificar usuário (deve retornar 401 se não autenticado)
GET {{base_url}}/api/user
```

### 2. Testes Locais no Frontend

#### Verificar Conexão com API
```javascript
// No console do navegador ou em um componente de teste
const testAPI = async () => {
  try {
    const response = await fetch('/api/v1/anuncios');
    const data = await response.json();
    console.log('API funcionando:', data);
  } catch (error) {
    console.error('Erro na API:', error);
  }
};

testAPI();
```

#### Verificar Autenticação
```javascript
// Testar contexto de autenticação
import { useAuth } from '../context/AuthContext';

const TestAuth = () => {
  const { user, isLoading, error } = useAuth();
  
  console.log('Usuário:', user);
  console.log('Carregando:', isLoading);
  console.log('Erro:', error);
  
  return <div>Verificar console</div>;
};
```

### 3. Comandos cURL para Teste

```bash
# Testar endpoint de anúncios
curl -X GET "https://liveturb.com/api/v1/anuncios?page=1&per_page=5" \
  -H "Accept: application/json"

# Testar endpoint de categorias
curl -X GET "https://liveturb.com/api/v1/categorias" \
  -H "Accept: application/json"

# Testar autenticação (deve retornar 401)
curl -X GET "https://liveturb.com/api/user" \
  -H "Accept: application/json"
```

---

## Mapeamento Manual de Endpoints

### Como Identificar Novos Endpoints

1. **Análise do Código Frontend**:
   ```bash
   # Buscar por chamadas fetch ou axios
   grep -r "fetch\|axios" components/ app/ --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx"
   ```

2. **Verificar Network Tab**:
   - Abrir DevTools do navegador
   - Ir para aba Network
   - Filtrar por XHR/Fetch
   - Navegar pela aplicação e observar requisições

3. **Análise de Logs**:
   - Verificar console do navegador para logs de requisições
   - Procurar por `console.log` relacionados a API calls

4. **Documentação do Backend**:
   - Verificar rotas em `routes/api.php` do Laravel
   - Usar comando `php artisan route:list` no backend

### Endpoints Não Documentados

Se encontrar endpoints não listados nesta documentação:

1. **Documentar o endpoint encontrado**:
   - URL completa
   - Método HTTP
   - Parâmetros necessários
   - Formato da resposta
   - Finalidade

2. **Testar o endpoint**:
   - Usar Postman ou cURL
   - Verificar diferentes cenários (sucesso, erro, autenticação)

3. **Atualizar esta documentação**:
   - Adicionar o novo endpoint na seção apropriada
   - Incluir exemplos de uso

---

## Troubleshooting

### Problemas Comuns

1. **CORS Error**:
   - Verificar configuração CORS no backend
   - Confirmar domínios permitidos em `SANCTUM_STATEFUL_DOMAINS`

2. **401 Unauthorized**:
   - Verificar se o cookie CSRF foi obtido
   - Confirmar configuração de sessão no Laravel
   - Verificar se `withCredentials: true` está configurado no axios

3. **404 Not Found**:
   - Verificar se a rota existe no backend
   - Confirmar URL base da API
   - Verificar se o servidor está rodando

4. **500 Internal Server Error**:
   - Verificar logs do servidor Laravel
   - Confirmar configuração do banco de dados
   - Verificar se todas as migrações foram executadas

### Logs Úteis

```javascript
// Habilitar logs detalhados no frontend
console.log('Requisitando API:', apiUrl);
console.log('Resposta da API:', response);
console.log('Dados recebidos:', data);
```

---

## Conclusão

Esta documentação cobre os principais endpoints utilizados pelo frontend Next.js do projeto LiveTurb. Para endpoints adicionais ou mudanças na API, consulte o código fonte do backend Laravel ou entre em contato com a equipe de desenvolvimento.

**Última atualização**: Janeiro 2025
**Versão da API**: v1
**Versão do Frontend**: Next.js 14+
