from tkinter import *
from tkinter import filedialog, ttk
from docx import Document
from PyPDF2 import PdfFileReader
from win10toast import ToastNotifier

janela = Tk()
janela.title('Conversor de PDF para Word')
janela.resizable(False, False)

document = Document()
toaster = ToastNotifier()

##########################################

def abrir_arquivo():
    global arquivoPDF
    arquivoPDF = filedialog.askopenfilename(title='Abrir arquivo PDF', initialfile='Arquivo.pdf', filetypes=(('Arquivo PDF', '*.pdf'), ('Todos os arquivos', '*.*')))
    entry_entrada.delete('1.0', 'end-1c')
    entry_entrada.insert('1.0', arquivoPDF)
def salvar_arquivo():
    global arquivoWord
    arquivoWord = filedialog.asksaveasfilename(title='Salvar arquivo Word', initialfile='Arquivo.docx', filetypes=(('Arquivo Word', '*.docx'), ('Todos os arquivos', '*.*')))
    entry_saida.delete('1.0', 'end-1c')
    entry_saida.insert('1.0', arquivoWord)
def converter():
    pdfFileObj = open(str(arquivoPDF), 'rb')
    pdfReader = PdfFileReader(pdfFileObj)
    pageObj = pdfReader.getPage(0)
    text = pageObj.extract_text()
    document.add_paragraph(text)
    document.save(str(arquivoWord))
    toaster.show_toast(
        'Conversor de PDF para Word',
        'Conversão concluída.',
        icon_path=None,
        duration=5
    )

##########################################

label = ttk.Label(text='Este programa converte arquivos PDF em Word (.docx) extraindo o texto.').grid(column=0, columnspan=3, row=0, padx=5, pady=5)

label_entrada = ttk.Label(text='Arquivo PDF').grid(column=0, row=1, padx=5, pady=5)

label_saida = ttk.Label(text='Arquivo Word').grid(column=0, row=2, padx=5, pady=5)

entry_entrada = Text(width=35, height=1, font='Arial')
entry_entrada.grid(column=1, row=1, padx=5, pady=5)

entry_saida = Text(width=35, height=1, font='Arial')
entry_saida.grid(column=1, row=2, padx=5, pady=5)

btn_entrada = ttk.Button(text='Localizar', width=7, command=abrir_arquivo).grid(column=2, row=1, padx=5, pady=5)

btn_saida = ttk.Button(text='Localizar', width=7, command=salvar_arquivo).grid(column=2, row=2, padx=5, pady=5)

btn_converter = ttk.Button(text='Converter', width=10, command=converter).grid(column=0, columnspan=2, row=3, padx=5, pady=5)

btn_sair = ttk.Button(text='Sair', width=10, command=exit).grid(column=1, columnspan=2, row=3, padx=5, pady=5)

##########################################
janela.mainloop()