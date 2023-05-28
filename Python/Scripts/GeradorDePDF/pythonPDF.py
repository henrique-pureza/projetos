from PyPDF2 import PdfFileReader

# Carrega o arquivo PDF
pdfFileObj = open('redação.pdf', 'rb')

# Faz a leitura do arquivo PDF
pdfReader = PdfFileReader(pdfFileObj)

# Captura primeira página do PDF
pageObj = pdfReader.getPage(0)

# Extrai texto do PDF e passa para variável
text = pageObj.extract_text()

# Mostra texto do PDF
print(text)