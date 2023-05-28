import tkinter as tk
from tkinter import messagebox, ttk

class App:
    def __init__(self, master):
        self.frame = tk.Frame(master).grid(column=0, row=0)

        self.label_boas_vindas = ttk.Label(
            text="Bem-vindo à versão gráfica da Calculadora de Divisores!"
        ).grid(
            column=0,
            columnspan=4,
            row=0,
            padx=10,
            pady=5
        )

        self.label_digite_numero = ttk.Label(
            text="Digite um número:"
        ).grid(
            column=0,
            row=1,
            padx=5,
            pady=5
        )

        self.getNumero = tk.StringVar()
        self.textbox_numero = ttk.Entry(
            width=20,
            textvariable=self.getNumero
        ).grid(
            column=1,
            row=1,
            padx=(3, 3),
            pady=5
        )

        self.botao_calcular = ttk.Button(
            text="Calcular",
            width=8,
            command=self.calcular_divisores
        ).grid(
            column=2,
            row=1,
            padx=(3, 2),
            pady=5
        )

        self.botao_limpar = ttk.Button(
            text="Limpar",
            width=8,
            command=self.limpar_texto
        ).grid(
            column=3,
            row=1,
            padx=(2, 5),
            pady=5
        )

    def calcular_divisores(self):
        numeros = []
        texto_digitado = self.getNumero.get()
        if texto_digitado.isnumeric() == False:
            messagebox.showerror(title="Erro", message="Você não digitou um número válido. Não é possível haver letras ou números negativos digitados.")
        else:
            texto_digitado = int(texto_digitado)
            for i in range(1, texto_digitado + 1):
                if texto_digitado % i == 0:
                    numeros += [str(i)]
            divisores = ', '.join(numeros) + '.'
            messagebox.showinfo(title="Resultado", message="Os divisores de " + str(texto_digitado) + " são: " + divisores)

    def limpar_texto(self):
        self.getNumero.set("")

janela = tk.Tk()
janela.resizable(False, False)
janela.title("Calculadora de Divisores Gráfica v1.0")
App(janela)
janela.mainloop()
