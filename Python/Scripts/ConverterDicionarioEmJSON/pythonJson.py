import json

dados = {
    "nome": "Pycodebr",
    "instagram": "@pycodebr",
    "linguagem": "python",
    "conteudos": [
        {"conteudo": "Codigos"},
        {"conteudo": "Curiosidades"}
    ]
}

with open(r'.\dados.json', 'w') as json_file:
    json.dump(dados, json_file, indent=4)