# Criação do projeto

`expo init nomeProjeto`

# Importando bibliotecas

`yarn add @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack @react-native-community/async-storage axios`

# Criação de estrutura de pastas

### SRC > pages

#### Criação de page Signin para usuario se logar na aplicação

#### Criação de page Dashboard para usuario visualizar conteudo após logado na aplicação

### SRC > routes

#### Criaçao de pages app.routes, em formato tsx, para apresentar rotas depois de logado

#### Criaçao de pages auth.routes, em formato tsx, para rotas que ainda não foram logadas

### Criando uma API fake para consumo de dados

#### Criação de pasta src/service a arquivo auth.ts

### Criação de context com dados que serão passados para toda a aplicação

### Gravação de dados de token com uso de context

### Implementando a logica de login no Context/Provider e não no App.ts

### Construindo as funções de login e logout e chamando-as nas pages Signin e Dashboard respectivamente.

### Armazenando o token no storage.

### Criação de loading

### Usando o axios para guardar o token no header da requisição passando-se esta para o backend

### Criando hook de autenticação

Para usar o contexto é necessário que:

- import useContext
- import AuthContext
- passe AuthContext como argumento para useContext.
  Ex: const {user} = useContext(AuthContext)

# O que foi feito:

- Criar e chamar uma API fake
- Determinar stack de rotas quando o usuário estiver logado ou não logado
- Resgatar usuario e token da api
- Criar contexto para deixar informações disponibilizadas por toda a aplicação
- Gravação e resgate de dados no localStorage
- Controle de estado de loading enquanto informações não foram carregadas.
- Manter a seção disponivel enquanto usuario não realizar logout
- Passar o token para o request.headers.authorization
- Criação de hook proprio
- Realização de login e logout com inclusão/remoção de dados do context/storage
