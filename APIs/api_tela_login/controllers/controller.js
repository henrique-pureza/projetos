const db = require("./queries");

class Controller {
    static teste(req, res) {
        return res.json(
            {
                mensagem: "Testando..."
            }
        );
    }

    static getAllUsers(req, res) {
        db.get(`
            SELECT *
            FROM contas
        `, res);
    }

    static getUser(req, res) {
        db.get(`
            SELECT *
            FROM contas
            WHERE usuario = "${req.query.usuario}"
        `, res);
    }

    static createUser(req, res) {
        db.query(`
            INSERT
            INTO contas
            (usuario, senha)
            VALUES
            ("${req.query.usuario}", "${req.query.senha}")
        `, res);        
    }

    static deleteUser(req, res) {
        db.query(`
            DELETE
            FROM contas
            WHERE usuario = "${req.query.usuario}"
        `, res);
    }

    static changeUser(req, res) {
        db.query(`
            UPDATE contas SET
                usuario = "${req.query.novoUsuario}",
                senha = "${req.query.novaSenha}"
            WHERE usuario = "${req.query.usuario}"
        `, res);
    }
}

module.exports = Controller;