// Importar o pacote do express
const express = require("express")

// Importar a conexão com o banco
const db = require("./config/dbConnect")

// Importar a entidade Movie
const Movie = require('./models/Movie')

// Importar as rotas
const movieRoutes = require("./routes/movieRoutes")

// Inicializar o pacote do express
const server = express()

// Importar o pacote CORS
const cors = require('cors')

// Verificar se deu certo a conexão e abre um caminho de comunicação
db.on("error", console.log.bind(console, "Erro de conexão."))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso.")
})

// Habilita a leitura e recebimento de json > Middleware (use); Dizer ao JS que só pode aceitar JSON e que as rotas estão em "movieRoutes"
// Usar o pacote cors
server.use(
    express.urlencoded({
        extended: true,
    }),
    cors(),
    express.json(),
    movieRoutes
)

module.exports = server