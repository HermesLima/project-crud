function index(req, res) {
    res.render("index", {
      title: "Página Incial",
    })
}

module.exports = {
    index
}