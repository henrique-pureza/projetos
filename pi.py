from decimal import Decimal, getcontext

def calcular_pi(num_casas_decimais):
    getcontext().prec = num_casas_decimais + 2
    pi = Decimal(0)
    for k in range(num_casas_decimais):
        termo = (-1) ** k / (2 * k + 1)
        pi += Decimal(termo)
    pi *= 4
    return pi

# Obter o número de casas decimais do usuário
num_casas = int(input("Informe o número de casas decimais para o cálculo de pi: "))

# Calcular pi
valor_pi = calcular_pi(num_casas)
print(f"O valor de pi com {num_casas} casas decimais é: {valor_pi}")
