from tkinter import *
from tkinter import ttk
import pyttsx3

frame = Tk()

frame.title('Texto em fala')
frame.resizable(False, False)

label_titulo = ttk.Label(
    text='''
    Digite seu texto aqui e clique no botão "falar" e 
    o seu texto será lido em voz alta pelo seu computador.
    '''
).grid(
    column=0,
    columnspan=2,
    row=0,
    padx=5,
    pady=5
)

label_texto = ttk.Label(
    text='Texto'
).grid(
    column=0,
    columnspan=2,
    row=1,
    padx=[15,0],
    pady=5
)

tb_texto = Text(
    width=35,
    height=5,
    font='Arial 12'
)
tb_texto.grid(
    column=1,
    row=2,
    padx=5,
    pady=5
)


def falar():
    txt_dig = tb_texto.get('1.0','end-1c')
    engine = pyttsx3.init()
    engine.say(txt_dig)
    engine.runAndWait()

button_falar = ttk.Button(
    text='Falar',
    command=falar
).grid(
    column=0,
    columnspan=2,
    row=3,
    padx=[0,80],
    pady=5
)

button_sair = ttk.Button(
    text='Sair',
    command=exit
).grid(
    column=0,
    columnspan=2,
    row=3,
    padx=[80,0],
    pady=5
)

frame.mainloop()