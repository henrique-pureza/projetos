const Movie = require("./../models/Movie")

class MovieController {
    static giveWelcome = (req,res) => {
        res.json({
            message: "Bem-vindo a nossa API com MongoDB Atlas."
        })
    }
    static registerMovie = async(req,res) => {
        // Obter as informações do corpo da requisição
        const {name, year, streaming} = req.body

        // Colocar as informações num objeto
        const movie = {
            name, 
            year,
            streaming
        }

        try{
            // Esperar para garantir que os dados foram cadastrados
            await Movie.create(movie)

            // Enviar uma resposta com sucesso
            res.status(201).json({message: 'Filme cadastrado no banco de dados com sucesso!'})
        } catch (erro) {
            // Enviar uma resposta com erro
            res.status(500).json({message: erro})
        }
    }
    static getAllMovies = async(req,res) => {
        // Buscar os filmes > Operação que pode falhar
        try {
            // Método .find() - lista todos os filmes do banco e retorna em uma variável
            const movies = await Movie.find()
            // Mostrar para o usuário os filmes
            res.status(200).json(movies)
        } catch (erro) {
            // Retorna a mensagem de erro
            res.status(500).json({message: erro})
        }
    }
    static updateMovie = async(req,res) => {
        // Coletar ID informado
        const id = req.params.id
        // Coletar as informações do Body
        const {name, year, streaming} = req.body
        // Armazenar as infos coletadas no objeto movie
        const movie = {
            name,
            year,
            streaming
        }

        // Pesquisar no banco e atualizar > operação que pode dar erro
        try {
            const updatedMovie = await Movie.updateOne({_id:id}, movie)
            res.status(200).json(updatedMovie)
        } catch (erro) {
            res.status(500).json({message: erro})
        }        
    }
    static deleteMovie = async(req,res) => {
        // Obter ID dos parâmetros
        const id = req.params.id

        try {
            const movie = await Movie.findById(id)
            await Movie.deleteOne({_id: id})
            res.status(200).json({message: "O filme foi removido com sucesso."})
        } catch (erro) {
            res.status(500).json({message: erro})
        }    
    }
    static getMovieByID = async(req,res) => {
        const id = req.params.id

        try {
            // const movie = await Movie.findOne({_id:id})
            const movie = await Movie.findById(id)
            res.status(200).json(movie)
        } catch (erro) {
            res.status(500).json({message: erro})
        }        
    }
    static deleteAllMovies = async(req,res) => {
        // Operação no banco: precisamos usar try/catch
        try {
            await Movie.deleteMany()
            res.status(200).json({message: "Parabéns! Você deletou tudo! Só tome cuidado pro chefe não ver!"})
        } catch (erro) {
            res.status(500).json({message: erro})
        }        
    }
}

module.exports = MovieController