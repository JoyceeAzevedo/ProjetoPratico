const tarefa = require("../model/tarefa.json")

exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(tarefa)
}

exports.getById = (req, res) => {
  const id = req.params.id
  

  res.status(200).send(tarefa.filter(tarefa=> tarefa.id == id))
}


exports.getColabTarefa = (req, res) => {
  const RealizouTarefa = tarefa.filter(tarefa => {
    console.log(aluna)
    return aluna.nasceuEmSp == "true"
  })
  const meninasSp = nasceuSp.map(aluna => aluna.nome)

  res.status(200).send(meninasSp)
}
