const express = require('express')
const path = require('path')

//const db = require('./database')
//const routes = require('./routes')
const mongoose = require('mongoose')


// inicializa o express
const app = express()


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hermesoficial:fefenina@bdtest.ksgevmw.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);












// definindo o template engine. Por padrão, a pasta views sempre será procurada na raiz do projeto
app.set('view engine', 'ejs')
// a pasta padrão será procurada. Como o server.js está dentro da pasta src ele vai buscar a partir daqui
// __dirname = C:\Users\Maria\workspace\nodejs\projeto-crud\src
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

console.log(__dirname)

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

// definindo as rotas
//app.use('/', routes)

// rotas  
app.get('/', (req, res) => {
    res.render('index', { 
        title: "Título teste"
    })
})

// 404 error (not found)
app.use((req, res) => { // middleware
  res.send('Página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))