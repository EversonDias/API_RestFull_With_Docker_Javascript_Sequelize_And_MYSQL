# Blogs API
![apresentação](/readme/cardProject/main.png)

# Tecnologias utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

# Índice

* [Título e Imagens Home](#blogs-api)
* [tecnologias utilizadas](#tecnologias-utilizadas)
* [Índice](#índice)
* [Descrição do projeto](#descrição-do-projeto)
* [Status do Projeto](#status-do-projeto)
* [Funcionalidade do projeto](#🔨-funcionalidade-do-projeto)
* [Acesso ao Projeto](#acesso-ao-projeto)

# Descrição do Projeto

O projeto Blogs-API foi desenvolvido como parte do curso de Desenvolvimento Web da escola Trybe, utilizando uma variedade de tecnologias modernas para construir uma plataforma interativa de compartilhamento de conteúdo. O foco principal deste projeto é a criação de uma API robusta e segura, permitindo aos usuários realizar diversas operações relacionadas a posts, usuários e categorias.

Tecnologias Utilizadas:

- Node.js: O projeto é construído utilizando o ambiente de tempo de execução Node.js, permitindo a construção de uma aplicação backend eficiente e escalável.
- JavaScript: A linguagem principal para a lógica de programação e interação com o servidor.
- Docker: A tecnologia Docker é utilizada para criar e gerenciar containers, garantindo a portabilidade e a consistência do ambiente de desenvolvimento.
- Sequelize: O Sequelize é um ORM (Object-Relational Mapping) que simplifica a interação com o banco de dados MySQL, permitindo a definição de modelos e consultas de forma mais intuitiva.
- MySQL: Um sistema de gerenciamento de banco de dados relacional utilizado para armazenar dados como informações de usuários, posts e categorias.
- Express.js: Um framework para Node.js que simplifica o roteamento e a criação de APIs, tornando o desenvolvimento mais ágil.
- JWT (JSON Web Token): Utilizado para implementar autenticação segura, permitindo que os usuários se autentiquem e acessem recursos de maneira controlada.

## Funcionalidades Principais:

- Login: Os usuários podem realizar login utilizando suas credenciais, recebendo um token JWT para autenticação em futuras requisições.
- Criação de Usuário: Os usuários têm a capacidade de se cadastrar na plataforma, fornecendo informações como nome, email e senha.
- Criação de Post: Os usuários autenticados podem criar e compartilhar posts, incluindo título, conteúdo e categorias.
 -Edição e Exclusão de Post: Os autores dos posts podem editar ou excluir seus próprios posts.
- Busca de Posts: Os usuários podem buscar posts com base em diferentes critérios, incluindo título, conteúdo ou autor.
- Busca de Usuários: A busca por usuários permite encontrar perfis específicos com base no ID do usuário ou outros critérios.
- Deleção de Usuário: Os usuários podem solicitar a exclusão de suas contas, o que resultará na remoção de seus dados da plataforma.
- Criação e Busca de Categorias: Os usuários podem criar novas categorias para seus posts e também buscar posts por categoria.
- Sistema de Criptografia JWT: A segurança é mantida através da geração e verificação de tokens JWT, garantindo que apenas usuários autenticados tenham acesso às funcionalidades restritas.

O projeto Blogs-API demonstra o domínio dos alunos sobre as tecnologias de desenvolvimento web e suas capacidades de criar uma aplicação completa e funcional. Ao combinar conhecimentos em backend, banco de dados e segurança, os alunos da Trybe são capazes de construir soluções robustas e prontas para o mundo real.

## fazendo login

![rota Login](/readme/images/rotaLogin.png)

## adicionando o token

![token](/readme/images/headersToken.png)

## listando todos os usuários

![listando users](/readme/images/getAll.png)

# Status do Projeto

> 💹 Alpha 💹

# 🔨 Funcionalidade do projeto

<details>
<summary><strong>Fazer login</strong></summary>

faça login com user test para obter o Token para testa as demais rotas.

Rota

```bash
http://localhost:3001/login
```

method ```POST```

corpo da requisição
```json
{
  "email": "admin@admin.com",
  "password": "123456"
}
```
só é possível fazer login com usuário cadastrado
A resposta vai ser um token com validade de 10 minutos
</details>

<details>
<summary><strong>Criar um usuário</strong></summary>

method ```POST```

Rota

```bash
http://localhost:3001/user
```

corpo da requisição
```json
{
  "displayName": "SeuNomeAqui",
  "email": "seuEmailAqui@gmail.com",
  "password": "suaSenhaAqui",
  "image": "url da imagem"
}
```
A resposta vai ser um token com validade de 10 minutos
</details>
<details>
<summary><strong>Criar um post</strong></summary>

method ```POST``` 

Rota

```bash
http://localhost:3001/post
```

corpo da requisição
```json
{
  "title": "Titulo do post",
  "content": "Conteúdo do post",
  "categoryIds": [1, 2] // id das categorias que tem ou foram criadas na tabela categories
}
```
só é possível se informa o token no headers da requisição e ele for valido.
</details>
<details>
<summary><strong>Editar um post</strong></summary>

method ```PUT``` 

Rota

substitua <id_do_post> pelo id ex: 1

```bash
http://localhost:3001/post/<id_do_post>
```

corpo da requisição
```json
{
  "title": "Novo titulo do post ou não",
  "content": "Novo Conteúdo do post ou não"
}
```
só é possível se informa o token no headers da requisição ele for valido e o post se do seu usuário,
</details>
<details>
<summary><strong>Deletar um post</strong></summary>

method ```DELETE``` 

Rota

substitua <id_do_post> pelo id ex: 1

```bash
http://localhost:3001/post/<id_Do_Post>
```

só é possível se informa o token no headers da requisição ele for valido e o post se do seu usuário,
</details>
<details>
<summary><strong>Buscar Todos Post</strong></summary>

method ```GET```

Rota

```bash
http://localhost:3001/post
``` 

só é possível se informa o token no headers da requisição ele for valido.
</details>
<details>
<summary><strong>Buscar post pelo id</strong></summary>

method ```GET```

Rota

substitua <id_do_post> pelo id ex: 1

```bash
http://localhost:3001/post/<id_do_post>
```


só é possível se informa o token no headers da requisição ele for valido
</details>
<details>
<summary><strong>Buscar post pelo titulo ou conteúdo</strong></summary>

method ```GET```

Rota

substitua <titulo_ou_conteúdo_buscado> pelo titulo ex: Vamos

```bash
http://localhost:3001/post/search?q=<titulo_ou_conteúdo_buscado>
```

só é possível se informa o token no headers da requisição ele for valido
</details>
<details>
<summary><strong>Buscar todos Usuários cadastrados</strong></summary>

method ```GET```

Rota

```bash
http://localhost:3001/user
```


só é possível se informa o token no headers da requisição ele for valido
</details>
<details>
<summary><strong>Buscar usuária pelo id</strong></summary>

method ```GET``` 

Rota

substitua <id_do_post> pelo id ex: 1

```bash
http://localhost:3001/user/<id_Do_Usuário>
```

só é possível se informa o token no headers da requisição ele for valido
</details>
<details>
<summary><strong>Deleta usuária</strong></summary>

method ```DELETE```

Rota

```bash
http://localhost:3001/user/me
``` 
 

só é possível se informa o token no headers da requisição ele for valido.

OBS: essa rota vai deleta o usuário que fez login.
</details>
<details>
<summary><strong>Criar categorias</strong></summary>

method ```POST```

Rota

```bash
http://localhost:3001/categories
```
 

```json
{
  "name": "Nome da categoria"
}
```
só é possível se informa o token no headers da requisição ele for valido.
</details>
<details>
<summary><strong>Busca por todas categorias</strong></summary>

method ```GET```

Rota

```bash
http://localhost:3001/categories
``` 
 

só é possível se informa o token no headers da requisição ele for valido.
</details>

# Acesso ao projeto

você precisa ter npm, node.js, docker e git instalados.

recomendo utilizar a extensão do VSCode thunder Client.

1° Clone o Projeto

```bash
git clone https://github.com/EversonDias/API_RestFull_With_Docker_Javascript_Sequelize_And_MYSQL.git blogs-api
```

2° Entre no projeto

```bash
cd blogs-api
```

3° Instale as dependências

```bash
npm install
```

4° Iniciar o Docker e o Servidor

```bash
docker-compose up -d
```
OBS: o docker-compose tem estar na versão 1.29, a porta 3001 deve esta disponível, o servidor já vai ser iniciado assim que o componente for montado.
