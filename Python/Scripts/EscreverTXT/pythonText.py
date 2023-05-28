produtos = ['Notebook', 'Smartphone', 'Monitor', 'Mouse']

with open('produtos.txt', 'w') as writer:
    for produto in produtos:
        writer.write(produto + '\n')