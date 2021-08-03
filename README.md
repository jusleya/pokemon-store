## Solução
Este projeto é relacionado ao desafio técnico do processo seletivo de front-end da empresa B2W. No qual era necessário fazer uma aplicação client-side, para criar lojas de venda de Pokemon's.

Para a implementação foi utilizado: ReactJs, Redux, Styled-components, Redux-saga, Redux-sauce, Duck Pattern, JavaScript, HTML e CSS. NPM e YARN foram utilizados para execução e instalação das bibliotecas.

Esse projeto está dividido em 10 pastas:
- assets, imagens e fontes utilizadas;
- components, components está dividido em 3 outras pastas: contexts (components das pages), form (components utilizados em forms) e structure (components para a estrutura do sistema);
- constants, as constantes do sistema;
- lib e providers, configurações de execução do projeto;
- locales, JSON com os principais textos;
- pages, codígos de cada tela;
- services, configurações de conexão da API;
- store, requisições da API;
- styles,style glogal e theme do sistema.

## Organização
```
├── src
│   ├── assets
│   │   └── fonts
│   │   └── icons
│   ├── components
│   │   └── contexts
│   │   └── form
│   │   └── structure
│   ├── constants
│   ├── lib
│   │   └── core
│   │   └── pages
│   ├── locales
│   │   └── core
│   │   └── pages
│   ├── pages
│   │   └── Store
│   ├── providers
│   ├── services
│   ├── store
│   │   └── pokemon
│   ├── styles
│   │   └── tokens

```

## Execução

``` bash
# Install dependencies
yarn

# Execution [http://localhost:3000](http://localhost:3000)
yarn start

```

## Execução - Troca de cliente

Para a troca de loja, siga os passos abaixo. Depois refaça os passos mencionados anteriormente para garantir que todas as bibliotecas foram instaladas e executar de forma correta.

``` bash
# Install gulp
npm install --global gulp-cli

# Install gulp na pasta do projeto
npm install --save-dev gulp

# Execution [Fairy]
gulp --profile fairy

# Execution [Fire]
gulp --profile fire

# Execution [Bug]
gulp --profile Bug

```

## Bibliotecas
- ReactJs;
- Redux;
- redux-saga;
- reduxsauce;
- react-router-dom;
- PropTypes;
- Styled-components;
- Axios;
- gulp;

## Referências
- Cores: https://pokemon-palettes.tumblr.com/
  - Fairy: https://pokemon-palettes.tumblr.com/post/43105248807/ninfia-sylveon-is-just-the-perfect-v-day-pokemon
  - Fire: https://pokemon-palettes.tumblr.com/post/75865135307
  - Bug: https://pokemon-palettes.tumblr.com/post/83970998743
- Ícones: https://www.figma.com/
  -  Plugin: https://iconify.design/
- Gulp: https://gulpjs.com/docs/en/getting-started/quick-start
