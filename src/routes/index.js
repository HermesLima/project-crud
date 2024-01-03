const router = require('express').Router()

const CustomersController = require('../controllers/customers')
const StudentsController = require('../controllers/students')
const IndexController = require('../controllers/index')

// rotas
router.get('/', IndexController.index)

// registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// listar
router.get('/list', CustomersController.list)

// editar
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

// remover
router.get('/remove/:id', CustomersController.remove)

///////////////

// registro
router.get('/registerStudent', StudentsController.index)
router.post('/registerStudent/add', StudentsController.add)

// listar
router.get('/listStudent', StudentsController.list)

// editar
router.get('/editStudent', StudentsController.formEdit)
router.post('/editStudent/:id', StudentsController.edit)

// remover
router.get('/removeStudent/:id', StudentsController.remove)

///////////////////
module.exports = router
