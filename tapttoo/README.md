# Teste FrontEnd EVOB

Desafio frontend construído para participação de processo seletivo da empresa EVOB

## Requisitos do projeto:

---

- Crie o seu projeto utilizando Next.js e Typescript
- Componha a tela de login seguindo o design descrito em:
  Figma: https://www.figma.com/file/sP4N5PeWWkd3jJuYNdJU36/Teste-Frontend-EVOB?node-id=0%3A1
- Preencha os elementos visuais (textos e logotipo) recebidos através do endpoint:
  get - https://front.evob.dev.marcomapa.com/front_challenge/info
- Envie os campos [email] e [password] preenchidos como form-data p/ o endpoint:
  post - https://front.evob.dev.marcomapa.com/front_challenge/login
- Exiba os retornos da API ao usuário
  Dados p/ teste:
  E-mail: testfront@evob.com.br Senha: 123456
  Qualquer outro usuário ou senha retornará: "Usuário/Senha inválidos"

---

O que será avaliado:

- Clean Code;
- Organização;
- Pixel Perfect;
- Boas Práticas;
- Responsividade

---

## Implementação final:

### Ajustes e melhorias

Como melhorias para o projeto tomei a decisão de implementar:

- [x] Loader Spinner ao fazer requisição de login;
- [x] Avisos com a biblioteca de toast para feedback ao usuário;
- [ ] Ajuste de navegação entre páginas no deploy vercel;

### :robot: Tecnologias:

Para desenvolvimento da aplicação foi utlizada Next juntamente Typescript e styled-components, e uma API própria foi fornecida pela EVOB para fazer a requisição dos dados. Usando a url base `https://front.evob.dev.marcomapa.com/front_challenge` consultando os método [`GET /info`] para acessarmos os elementos visuais da aplicação, e o método [`POST /login/`] para autenticar um usuário.

### :books: Bibliotecas utilizadas

  <li>React Icons</li>
  <li>React Loader Spinner</li>
  <li>React Toastify</li>
  <li>Styled Components</li>

## Getting Started

Para rodar o projeto localmente, siga estas etapas:

Faça o clone desse repositório em seu computador e execute o comando:

```bash
npm install
# e
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado!

## Deploy on Vercel

https://tapttoo.vercel.app/
