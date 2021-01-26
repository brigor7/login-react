<h1 align="center">
    Login React
</h1>

<p align="center">
  <a href="#rocket-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#collision-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tela-app">Tela</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-rodando-o-projeto">Rodando o Projeto</a>
</p>

<h2>
<strong>Projeto</strong> Login React.
</h2>

## 🚀 Sobre a aplicação

Aplicação criada para a realização de Login, guardando e utilizando o estado do usuario e token em contexto e localstorage. Foi criado uma api fake para acesso aos dados assim como foi realizada a gravação do token no request.headers utilizando o axios. O desenvolvimento dessa aplicação foi feita na camada de frontend, utilizando o react-native, podendo esta lógica ser utilizada no react, com alteração da gravação do storage (asyncStorage/localStorage) destes ambientes.

A fonte de inspiração para esta implementação foi através de [masterclass](https://www.youtube.com/watch?v=KISMYYXSIX8) realizada pelo Diego da Rocketseat.

## :collision: Funcionalidades

- Criar e chamar uma API fake
- Determinar stack de rotas quando o usuário estiver logado ou não logado
- Resgatar usuario e token da api
- Criar contexto para deixar informações disponibilizadas por toda a aplicação
- Gravação e resgate de dados em localStorage
- Controle de estado de loading enquanto informações não foram carregadas.
- Manter a seção disponivel enquanto usuario não realizar logout
- Passar o token para o request.headers.authorization
- Criação de hook proprio
- Realização de login e logout com inclusão/remoção de dados do context/storage

## :tela: Tela App

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://github.com/brigor7/login-react/blob/main/assets/video.mp4)]

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

## :zap: Rodando o projeto

Para criar o ambiente é necessário ter o expo instalado no ambiente e criar o projeto:
`npx react-native init <nome projeto> --template react-native-template-typescript`

Importação das bibliotecas:
`yarn add @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack @react-native-community/async-storage axios`

\* Para mais detalhes, veja o <kbd>[package.json](./package.json)</kbd>

Para rodar o projeto, acessa a pasta <nomedoprojeto> e execute:

`yarn start`

No caso do react-native é necessário um emulador ou uso do celular para visualizar o app.

---
