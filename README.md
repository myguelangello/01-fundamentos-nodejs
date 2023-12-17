# Servidor Web Node.js Puro

Bem-vindo ao README do servidor web Node.js que desenvolvi durante meus estudos em busca de me aprimorar e reforçar meus fundamentos de Node.js. Este projeto foi criado sem o uso de qualquer framework ou biblioteca externa, com o objetivo de aprofundar meu entendimento sobre os conceitos fundamentais do Node.js.

## Conteúdo do Projeto

### 1. Iniciando no Node.js

O projeto começa com os princípios básicos do Node.js, onde configuro o ambiente de desenvolvimento e inicio o projeto. Este conhecimento é essencial para estabelecer uma base sólida.

### 2. Estrutura de Aplicação

A estrutura da aplicação foi organizada para promover a modularidade e a legibilidade do código. Cada componente desempenha um papel específico, seguindo práticas para facilitar a manutenção e o desenvolvimento futuro.

### 3. Conceito de Streams do Node.js

O entendimento profundo do conceito de streams no Node.js é crucial para lidar eficientemente com operações de leitura e escrita. No código-fonte, você encontrará exemplos básicos de implementações que aproveitam esse poderoso recurso para processar dados de maneira eficaz.

### 4. Expressões Regulares (RegEx)

O uso de expressões regulares é incorporado para manipulação avançada de strings e validação de entrada. Essa técnica é fundamental para garantir a segurança e a integridade dos dados manipulados nas rotas do servidor.

### 5. Rotas HTTP

A manipulação de rotas HTTP foi implementada de maneira simples e eficaz. Cada rota é mapeada para suas respectivas funções de manipulação.

## Como Executar o Servidor

1. Clone o repositório para sua máquina local.

   ```bash
   git clone https://github.com/myguelangello/01-fundamentos-nodejs.git
   ```

2. Navegue até o diretório do projeto.

   ```bash
   cd 01-fundamentos-nodejs
   ```

3. Inicie o servidor.

   ```bash
   npm run dev
   ```

O servidor estará rodando em http://localhost:3333.

# Exemplos de Rotas HTTP

#### As rotas podem ser testadas usando o HTTPie ou o cURL, assim como o Insomnia ou Postman.

## Rota GET

### 1. Listar todos os Usuários

- **Rota:** `/users`
- **Método:** GET

#### Exemplo de Requisição

```bash
http http://localhost:3333/users
```

### 2. Pesquisar Usuário por ID

- **Rota:** `/users/:id`
- **Método:** GET

#### Parâmetros

- `:id` (obrigatório): Identificador único do usuário.

#### Exemplo de Requisição

```bash
http http://localhost:3333/users/123
```

Neste exemplo, a rota GET `/users/:id` é acionada com o `:id` igual a 123, buscando informações do usuário com esse identificador.

### 3. Pesquisar Usuários por Query

- **Rota:** `/users`
- **Método:** GET

#### Query Params

- `search` (opcional): Parâmetro para realizar uma busca específica.

#### Exemplo de Requisição

```bash
http http://localhost:3333/users?search=name
```

Neste exemplo, a rota GET `/users` é acionada com o query params `search` definido como "name" buscando usuários com base nos critérios fornecidos.


## Rota POST para Criar Novo Usuário

```bash
http POST http://localhost:3333/users name="Novo Usuário" email="novo_usuario@email.com"
```

Neste exemplo, a rota POST `/users` é acionada usando `httpie`, com os parâmetros `name` e `email` fornecidos no corpo da requisição. O servidor processará a requisição e criará um novo usuário com base nos dados fornecidos. Certifique-se de ter o `httpie` instalado em sua máquina para executar este comando.



## Rota PUT para Atualizar Usuário

- **Rota:** `/users/:id`
- **Método:** PUT

#### Parâmetros

- `:id` (obrigatório): Identificador único do usuário a ser atualizado.

#### Corpo da Requisição

O corpo da requisição deve conter os dados a serem atualizados para o usuário identificado por `:id`.

#### Exemplo de Requisição

```bash
http PUT http://localhost:3333/users/123 name="Novo Nome" email="novo@email.com"
```

Neste exemplo, a rota PUT `/users/:id` é acionada com o `:id` igual a 123, e o corpo da requisição contém os novos dados a serem atribuídos ao usuário.



## Rota DELETE para Remover Usuário

- **Rota:** `/users/:id`
- **Método:** DELETE

#### Parâmetros

- `:id` (obrigatório): Identificador único do usuário a ser removido.

#### Exemplo de Requisição

```bash
http DELETE http://localhost:3333/users/123
```

Neste exemplo, a rota DELETE `/users/:id` é acionada com o `:id` igual a 123, removendo o usuário correspondente.

## Licença

Este projeto é licenciado sob a licença [MIT](LICENSE).
