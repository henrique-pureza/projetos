import phonenumbers
from phonenumbers import geocoder, carrier

# Digitar número com código de país e DDD
phoneNumber = phonenumbers.parse('+555134776717')

# Captura operadora
Carrier = carrier.name_for_number(phoneNumber, 'pt-br')

# Captura região
Region = geocoder.description_for_number(phoneNumber, 'pt-br')

# Mostra resultados
print('A operadora é: ' + Carrier)
print('O estado é: ' + Region)