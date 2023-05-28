from os import system

system('title Calculadora de Divisores 2.0')
system('color 0a')

class Calc:
    def __init__(self):
        self.titulo()
        self.boas_vindas()
        self.pergunta_numero()

    def titulo(self):
        system('cls')
        print('x------------------------------x')
        print('| CALCULADORA DE DIVISORES 2.0 |')
        print('x------------------------------x')
        print()

    def boas_vindas(self):
        print('Seja bem-vindo à Calculadora de Divisores 2.0, feita em Python!')
        print()

    def pergunta_numero(self):
        numero = input('Digite um número e dê enter (digite "sair" (sem aspas) para sair do programa): ')

        if numero == "sair":
            quit()
        else:
            if numero.isnumeric() == False:
                system('cls')
                self.titulo()
                print('Você não digitou um número. Tente novamente.')
                print()
                self.pergunta_numero()
            else:
                numero = int(numero)

        self.calcular_divisores(numero)
    def calcular_divisores(self, numero):
        system('cls')
        self.titulo()
        print('Os divisores de', numero,'são: ')
        print()

        for i in range(1, numero + 1):
            if numero % i == 0:
                if i < numero:
                    print(str(i) + ", " , end="")
                if i == numero:
                    print(str(i) + ".", end="")

        print()
        self.fechar_ou_continuar()

    def fechar_ou_continuar(self):
        print()
        print('O que você deseja fazer a seguir? (Digite o número correspondente a sua escolha e dê enter)')
        print()
        print('[1] Calcular os divisores de outro número')
        print('[2] Fechar o programa')
        print()
        escolha = input('Digite sua escolha aqui: ')
        if escolha == "1":
            system('cls')
            self.titulo()
            self.pergunta_numero()
        if escolha == "2":
            exit()
        if escolha != "1" or escolha != "2":
            system('cls')
            self.titulo()
            print('Você digitou um número inválido. Tente novamente.')
            self.fechar_ou_continuar()

calc = Calc()
