from translate import Translator

# Configura a tradução
s = Translator(from_lang='english', to_lang='pt-br')

# Traduz o texto desejado
res = s.translate('Hello World')

# Mostra a tradução
print(res)