const server = require('./index')

// Porta dinâmica 
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log("Servidor funcionando...")
})