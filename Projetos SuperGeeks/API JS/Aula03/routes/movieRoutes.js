// Importar o pacote do express
const express = require('express')

// Importar os métodos do movieController
const MovieController = require("./../controllers/movieController")

// Importar o router
const router = express.Router()

// Rota de boas-vindas
router.get("/", MovieController.giveWelcome)

// Rota de registrar filme > POST
router.post("/movie", MovieController.registerMovie)

// Rota de obter filmes > GET
router.get("/movies", MovieController.getAllMovies)

// Rota de atualizar filme > PUT
router.put("/movie/:id", MovieController.updateMovie)

// Rota de deletar UM filme > DELETE
router.delete("/movie/:id", MovieController.deleteMovie)

// Rota para buscar um filme pelo ID > GET
router.get("/movie/:id", MovieController.getMovieByID)

// Rota para deletar todos os dados do banco > DELETE
router.delete("/movies/deleteall", MovieController.deleteAllMovies)

module.exports = router