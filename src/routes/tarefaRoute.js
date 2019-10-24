const express = require("express")
const router = express.Router()
const controller = require('../controllers/tarefaController')

router.get("/", controller.get)
router.get('/realizado',controller.getByTarefa)
router.get("/:nomeColaborador/buscar",controller.getByColaborador)
router.get('/:id',controller.getById)



module.exports = router


