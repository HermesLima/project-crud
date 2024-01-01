// Módulos instalados
const express = require("express");
const path = require("path");

const cliente = require("./database");

// Módulos criados pelo usuário
// Não precisa colocar o nome index.js, pois ele tem o nome de index e é único na pasta
const routes = require("./routes");

// inicializa o express
const app = express();

// Criar collection
//const y = require("./y")
//y.runner()

// Inserir dados em collection
//const x = require("./x")
//x.run()


// definindo o template engine. Por padrão, a pasta views sempre será procurada na raiz do projeto
app.set("view engine", "ejs");
// a pasta padrão será procurada. Como o server.js está dentro da pasta src ele vai buscar a partir daqui
// __dirname = C:\Users\Maria\workspace\nodejs\projeto-crud\src
app.set("views", path.join(__dirname, "views"));

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, "public")));

console.log(__dirname);

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }));

// definindo as rotas
app.use("/", routes);

// 404 error (not found)
app.use((req, res) => {
  // middleware
  res.send("Página não encontrada!");
});

// executando o servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
