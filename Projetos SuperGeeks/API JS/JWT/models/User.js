// Importar o mongoose
const mongoose = require("mongoose");

// Criar a estrutura do objeto User
const User = mongoose.model("User", {
    name: String,
    email: String,
    password: String
});

// Exportar o objeto User
module.exports = User