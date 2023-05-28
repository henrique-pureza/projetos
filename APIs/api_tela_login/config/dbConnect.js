const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/contas.db", (erro) => {
    if (erro) {
        console.error(erro.message);
    } else {
        console.log("Conectado ao banco de dados.")
    }
});

module.exports = db;