const StudentModel = require('../models/students')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Estudantes'
const listTitle = 'Listagem de estudantes'

function index(req, res) {
  res.render('registerStudent', {
    title: defaultTitle
  })
}

async function add(req, res) {
  const {
    name,
    serie,
    media,
  } = req.body

  const register = new StudentModel({
    name,
    serie,
    media
  })
 
  register.save()

  // ao invés de mandarmos uma msg pelo send, vamos renderizar novamente passando nova mensagem
  res.render('registerStudent', {
    title: defaultTitle,
    message: 'Cadastro realizado com sucesso!'
  })
}

async function list(req, res) {
  const users = await StudentModel.find()

  res.render('listStudent', {
    title: listTitle,
    users,
  })
}

async function formEdit(req, res) {
  const { id } = req.query

  const user = await StudentModel.findById(id)

  res.render('editStudent', {
    title: 'Editar Estudante',
    user,
  })
}

async function edit(req, res) {
  const {
    name,
    serie,
    media,
  } = req.body

  const { id } = req.params

  const user = await StudentModel.findById(id)

  user.name = name
  user.serie = serie
  user.media = media

  user.save()

  res.render('editStudent', {
    title: 'Editar Estudante',
    user,
    message: 'Estudante alterado com sucesso!'
  })
}

async function remove(req, res) {
  const { id } = req.params
//  const { id } = req.query

  const remove = await StudentModel.deleteOne({ _id: id })

  if (remove.ok) {
    res.redirect('/listStudent')
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