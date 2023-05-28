// Importar o pacote do mongoose
const mongoose = require('mongoose')

// Criar o esqueleto da entidade
const Movie = mongoose.model('Movie', {
    name: String,
    year: Number, 
    streaming: Boolean
})

// Exportar a entidade
module.exports = Movie