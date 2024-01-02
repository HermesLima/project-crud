/*

const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'
const listTitle = 'Listagem de usuários'

function index(req, res) {
  res.render('register', {
    title: defaultTitle
  })
}

*/

function index(req, res) {
    res.render("register", {
      title: "Cadastro de clientes",
    })
}

function add(req, res) {
  const CustomersModel = require('../x')
  const { crypto } = require('../utils/password')
  const {
    name,
    age,
    email,
    password,
  } = req.body

  const passwordCrypto = crypto(password)

  const objModel = {
    name, // não precisa name: name, pois têm o mesmo nome
    age, // não precisa age: age, pois têm o mesmo nome
    email, // não precisa email: email, pois têm o mesmo nome
    password: passwordCrypto //  precisa password: passwordCrypto, pois têm nomes diferentes
  }

  CustomersModel.run(objModel)
  res.send('cadastro realizado')
 }


function listUsers(req, res) {
    const z = require('../z')

    
    /* GET home page. */
      try {
//        const users = z.runZ();
        const users = [{name: "a", age: 10, email: "aaaa"},{name: "b", age: 100, email: "bbbb"}, {name: "c", age: 90, email: "cccc"}]
        res.render('listUsers', { title: 'Lista de Clientes', "users": users});
      } catch (err) {
        next(err);
      }
  
}


/*
  async function add(req, res) {
  const {
    name,
    age,
    email,
    password,
  } = req.body

  const passwordCrypto = await crypto(password)

  const register = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto,
  })

  register.save()

  res.render('register', {
    title: defaultTitle,
    message: 'Cadastro realizado com sucesso!'
  })
}


async function list(req, res) {
  const users = await CustomersModel.find()

  res.render('list', {
    title: listTitle,
    users,
  })
}

async function formEdit(req, res) {
  const { id } = req.params

  const user = await CustomersModel.findById(id)

  res.render('edit', {
    title: 'Editar Usuário',
    user,
  })
}

async function edit(req, res) {
  const {
    name,
    age,
    email,
  } = req.body

  const { id } = req.params

  const user = await CustomersModel.findById(id)

  user.name = name
  user.age = age
  user.email = email

  user.save()

  res.render('edit', {
    title: 'Editar Usuário',
    user,
    message: 'Usuário alterado com sucesso!'
  })
}

async function remove(req, res) {
  const { id } = req.params

  const remove = await CustomersModel.deleteOne({ _id: id })

  if (remove.ok) {
    res.redirect('/list')
  }
}

module.exports = {
  index,
  add,
  list,
  formEdit,
  edit,
  remove,
}

*/
module.exports = {
  add,
  index,
  listUsers
}
