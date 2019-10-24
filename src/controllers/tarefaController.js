const tarefa = require("../model/tarefa.json")

exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(tarefa)
}

exports.getById = (req, res) => {
  const id = req.params.id
  

  res.status(200).send(tarefa.filter(tarefa=> tarefa.id == id))
}

exports.getByTarefa= (req, res) => {
  const tarefaRealizada = tarefa.filter(item => item.concluido == "true")
  const realizadaTarefa = tarefaRealizada.map(item => item.descricao )
  
  res.status(200).send (realizadaTarefa)
}

exports.getByColaborador= (req, res) => {

  const nomeColaborador = req.params.nomeColaborador
  const buscarColaborador = tarefa.filter(item => item.nomeColaborador == nomeColaborador )
  
  res.status(200).send (buscarColaborador)
}


