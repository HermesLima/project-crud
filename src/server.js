// Módulos instalados
const express = require("express");
const path = require("path");

const client = require("./database");

// Módulos criados pelo usuário
// Não precisa colocar o nome index.js, pois ele tem o nome de index e é único na pasta
//const db = require('./database')
const routes = require("./routes");

// inicializa o express
const app = express();

///////////////////////////////////////////////////////////

const databasename = "escola";

// conexão com o BD
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect().then((client) => {
      
      const connect = client.db(databasename);
    
      // New Collection
      const collection = connect
          .createCollection("atletas");
    
          console.log("collection created", collection);
          console.log(collection);
        }).catch((err) => {
    
      // Handling the error 
      console.log(err.Message);
  })
;

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );



    // New Collection


    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

////////////////////////////////////////////////////////////

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
