const db = require("./../config/dbConnect");

class Queries {
    static query(query, res) {
        db.all(query, [], (error) => {
            if (error) {
                res.json(
                    {
                        erro: error
                    }
                );
                console.error(`Erro: ${error}`)
            } else {
                res.json(
                    {
                        mensagem: "Query executada com sucesso!"
                    }
                );

                console.log("Query executada com sucesso.")
            }
        });
    }

    static get(query, res) {
        db.all(query, [], (error, results) => {
            if (error) {
                res.json(
                    {
                        erro: error
                    }
                );

                console.error(`Erro: ${error}`);
            } else {
                res.json(results);

                console.log("Query executada com sucesso.");
            }
        });
    }
}

module.exports = Queries;