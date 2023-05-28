from pyshorteners import Shortener

shortener = Shortener()

url = "https://www.google.com"

short_url = shortener.tinyurl.short(url)

print(short_url)
