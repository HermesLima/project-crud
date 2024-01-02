
const mongoose = require('mongoose')

function connect() {
  
  // Replace with your MongoDB connection URL
  const url = 'mongodb+srv://hermesoficial:fefenina@bdtest.ksgevmw.mongodb.net'
  
  mongoose.connect(url, { useNewUrlParser: true });
  const db = mongoose.connection;

  db.once('open', () => {
    console.log('Connected to database!')
  })
  
  db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
  connect
}

// mongodb+srv://hermesoficial:fefenina@bdtest.ksgevmw.mongodb.net/


