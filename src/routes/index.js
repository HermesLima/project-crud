const router = require('express').Router()
//const CustomersController = require('../controllers/customers')
// rotas
  router.get("/", (req, res) => {
    res.render("index", {
      title: "Título teste",
    })
  })

// registro
router.get("/register", (req, res) => {
  res.render("register", {
    title: "Cadastro de clientes",
  })
})

//router.post("/register/new", CustomersController.add)   //  CONTROLLER

module.exports = router

