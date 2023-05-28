import sqlite3

class Pessoa:
    def __init__(self, database: str):
        self.database = database

    def criarPessoa(self, nome: str, sobrenome: str, idade: int, sexo: str) -> None:
        conn = sqlite3.connect(self.database)
        cur = conn.cursor()

        cur.execute(f"""
            INSERT
            INTO pessoas
            (nome, sobrenome, idade, sexo)
            VALUES
            ("{nome}", "{sobrenome}", {idade}, "{sexo}")
        """)
        conn.commit()

        conn.close()

    def obterPessoa(self, nome: str, sobrenome: str) -> tuple:
        conn = sqlite3.connect(self.database)
        cur = conn.cursor()

        cur.execute(f"""
            SELECT *
            FROM pessoas
            WHERE nome = "{nome}" AND sobrenome = "{sobrenome}"
        """)

        rows = cur.fetchall()
        conn.close()

        return rows[0]

    def obterTodasAsPessoas(self) -> list:
        conn = sqlite3.connect(self.database)
        cur = conn.cursor()

        cur.execute(f"""
            SELECT *
            FROM pessoas
        """)

        rows = cur.fetchall()
        conn.close()

        return rows

    def deletarPessoa(self, nome: str, sobrenome: str) -> None:
        conn = sqlite3.connect(self.database)
        cur = conn.cursor()

        cur.execute(f"""
            DELETE
            FROM pessoas
            WHERE nome = "{nome}" AND sobrenome = "{sobrenome}"
        """)
        conn.commit()

        conn.close()

    def atualizarPessoa(self, nomeAntigo: str, sobrenomeAntigo: str, novoNome: str, novoSobrenome: str, novaIdade: int, novoSexo: str) -> None:
        conn = sqlite3.connect(self.database)
        cur = conn.cursor()

        cur.execute(f"""
            UPDATE pessoas SET
            nome = "{novoNome}",
            sobrenome = "{novoSobrenome}",
            idade = {novaIdade},
            sexo = "{novoSexo}"
            WHERE nome = "{nomeAntigo}" AND sobrenome = "{sobrenomeAntigo}"
        """)
        conn.commit()

        conn.close()
