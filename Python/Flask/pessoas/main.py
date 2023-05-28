from flask import Flask, render_template, request, redirect, jsonify
from sql import Pessoa

app = Flask(__name__)
pessoa = Pessoa("pessoas.sqlite")

@app.route("/", methods=["GET"])
def index():
    pessoas = pessoa.obterTodasAsPessoas()

    return render_template("index.html", pessoas=pessoas)

@app.route("/new", methods=["GET", "POST"])
def new():
    if request.method == "POST":
        nome = request.form["nome"]
        sobrenome = request.form["sobrenome"]
        idade = int(request.form["idade"])
        sexo = request.form["sexo"]

        pessoa.criarPessoa(nome=nome, sobrenome=sobrenome, idade=idade, sexo=sexo)

        return redirect("/")

    return render_template("new.html")

@app.route("/edit", methods=["PUT"])
def edit():
    nomeAntigo = request.args.get("nomeAntigo")
    sobrenomeAntigo = request.args.get("sobrenomeAntigo")
    novoNome = request.args.get("novoNome")
    novoSobrenome = request.args.get("novoSobrenome")
    novaIdade = int(request.args.get("novaIdade"))
    novoSexo = request.args.get("novoSexo")

    pessoa.atualizarPessoa(
        nomeAntigo=nomeAntigo,
        sobrenomeAntigo=sobrenomeAntigo,
        novoNome=novoNome,
        novoSobrenome=novoSobrenome,
        novaIdade=novaIdade,
        novoSexo=novoSexo
    )

    return jsonify({"status": "200 OK"})

@app.route("/delete", methods=["DELETE"])
def delete():
    nome = request.args.get("nome")
    sobrenome = request.args.get("sobrenome")

    pessoa.deletarPessoa(nome=nome, sobrenome=sobrenome)

    return jsonify({"status": "200 OK"})

if __name__ == "__main__":
    app.run(debug=True)
