
// conexão com o BD
async function runZ() {
    const cliente = require("../database");
    const databasename = "escola";
    const colecao = "alunos"

      try {
        await cliente
          .connect()
          .then((client) => {
            const connect = client.db(databasename)
    
            // Listar object of Collection
            return connect
            .collection(colecao)
            .find().ToArray()


          })
          .catch((err) => {
            // Handling the error
            console.error(err.Message);
          });
    
        // Send a ping to confirm a successful connection
        await cliente.db("admin").command({ ping: 1 });
       
      } finally {
        // Ensures that the client will close when you finish/error
        await cliente.close();
      }
    }


