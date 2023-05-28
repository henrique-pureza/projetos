from tkinter import *
from tkinter import ttk, messagebox
from translate import Translator

root = Tk()

root.resizable(False, False)
root.title('Translator')

label_original = ttk.Label(
    text='Idioma original'
).grid(
    column=0, 
    row=0, 
    padx=5, 
    pady=5
)

get_idioma_original = StringVar()
combobox_original = ttk.Combobox(
    textvariable=get_idioma_original, 
    values=['Português', 'Inglês'], 
    state='readonly'
).grid(
    column=1, 
    row=0, 
    padx=5, 
    pady=5
)

label_traducao = ttk.Label(
    text='Idioma de destino'
).grid(
    column=0, 
    row=1, 
    padx=5, 
    pady=5
)

get_idioma_destino = StringVar()
combobox_destino = ttk.Combobox(
    textvariable=get_idioma_destino, 
    values=['Português', 'Inglês'], 
    state='readonly'
).grid(
    column=1, 
    row=1, 
    padx=5, 
    pady=5
)

label_translate = ttk.Label(
    text='Texto a ser traduzido'
).grid(
    column=0,
    row=2,
    padx=5,
    pady=5
)

textbox_texto_variable = StringVar()
textbox_texto = ttk.Entry(
    width=23,
    textvariable=textbox_texto_variable
).grid(
    column=1,
    row=2,
    padx=5,
    pady=5
)

def translate():
    idioma_original = get_idioma_original.get()
    idioma_destino = get_idioma_destino.get()
    texto_digitado = textbox_texto_variable.get()
    if idioma_original == idioma_destino:
        messagebox.showerror(
            title='Erro',
            message='Os dois idiomas são iguais ou você não definiu um idioma de origem e/ou de destino.'
        )
    elif idioma_original == 'Português' and idioma_destino == 'Inglês':
        translator = Translator(
            from_lang='pt-br',
            to_lang='english'
        )
        traducao = translator.translate(texto_digitado)
        messagebox.showinfo(
            title='Texto traduzido',
            message=f'''
                Português: {texto_digitado}
                Inglês: {traducao}
            '''
        )
    elif idioma_original == 'Inglês' and idioma_destino == 'Português':
        translator = Translator(
            from_lang='english',
            to_lang='pt-br'
        )
        traducao = translator.translate(texto_digitado)
        messagebox.showinfo(
            title='Texto traduzido',
            message=f'''
                Inglês: {texto_digitado}
                Português: {traducao}
            '''
        )

        

button_translate = ttk.Button(
    text='Traduzir',
    command=translate
).grid(
    column=0,
    columnspan=2,
    row=3,
    padx=[0,85],
    pady=5
)

button_sair = ttk.Button(
    text='Sair',
    command=exit
).grid(
    column=0,
    columnspan=2,
    row=3,
    padx=[85,0],
    pady=5
)

root.mainloop()