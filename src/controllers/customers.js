const CustomersModel = require("../models/customers");
const { crypto } = require("../utils/password");

const defaultTitle = "Cadastro de Clientes";
const listTitle = "Listagem de usuários";

function index(req, res) {
  res.render("register", {
    title: defaultTitle,
  });
}

async function add(req, res) {
  const { name, age, email, password } = req.body;

  const passwordCrypto = await crypto(password);

  const register = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto,
  });

  register.save();

  // ao invés de mandarmos uma msg pelo send, vamos renderizar novamente passando nova mensagem
  res.render("register", {
    title: defaultTitle,
    message: "Cadastro realizado com sucesso!",
  });
}

async function list(req, res) {
  const users = await CustomersModel.find();

  // ao invés de mandarmos uma msg pelo send, vamos renderizar novamente passando nova mensagem
  res.render("list", {
    title: listTitle,
    users,
  });
}

async function formEdit(req, res) {
  /*
    req.query para o método no formato http://localhost:8080/editStudent?id=659551dc5812118878b730f1 (o método GET, por exemplo)
  */
  const { id } = req.query;

  const user = await CustomersModel.findById(id);

  // ao invés de mandarmos uma msg pelo send, vamos renderizar novamente passando nova mensagem
  res.render("edit", {
    title: "Editar Usuário",
    user,
  });
}

async function edit(req, res) {
  const { name, age, email } = req.body;

  /*
    req.params para o método no formato http://localhost:8080/editStudent/659551dc5812118878b730f1 (o método POST, por exemplo)
  */
  const { id } = req.params;

  const user = await CustomersModel.findById(id);

  user.name = name;
  user.age = age;
  user.email = email;

  user.save();

  // ao invés de mandarmos uma msg pelo send, vamos renderizar novamente passando nova mensagem
  res.render("edit", {
    title: "Editar Usuário",
    user,
    message: "Usuário alterado com sucesso!",
  });
}

async function remove(req, res) {
  /*
    req.params para o método no formato http://localhost:8080/editStudent/659551dc5812118878b730f1 (o método POST, por exemplo)
  */
  const { id } = req.params

  const remove = await CustomersModel.deleteOne({ _id: id });

  /*
  Usar o redirect no lugar de render para não precisar passar todos os parâmetros do list:   res.render("list", { title: listTitle, users });
  */
  if (remove) {
    res.redirect("/list");
  }

}

module.exports = {
  index,
  add,
  list,
  formEdit,
  edit,
  remove,
};
