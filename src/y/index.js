// conexão com o BD
async function runner() {
  const cliente = require("../database");
  const databasename = "escola";
  const newcollection = "x";

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await cliente
      .connect()
      .then((client) => {
        const connect = client.db(databasename);

        // New Collection
        const collection = connect.createCollection(newcollection)

        console.log("collection created", collection);
        console.log(collection);
      })
      .catch((err) => {
        // Handling the error
        console.error(err.Message);
      });

    // Send a ping to confirm a successful connection
    await cliente.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // New Collection
  } finally {
    // Ensures that the client will close when you finish/error
    await cliente.close();
  }
}

module.exports = {
  runner
};
