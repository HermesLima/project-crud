const databasename = "escola";


// conexão com o BD
async function run() {
  try {
    await cliente
      .connect()
      .then((client) => {
        const connect = client.db(databasename);

        // insert object in the Collection
        const collection = connect
          .collection("alunos")
          .insertOne({ name: "bigodao", age: 51 });

        console.log("collection created", collection);
        console.log(collection);
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