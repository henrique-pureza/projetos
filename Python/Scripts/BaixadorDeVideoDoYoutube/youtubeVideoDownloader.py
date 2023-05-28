import pytube

# url = "https://www.youtube.com/watch?v=lDCV6wdDScA"
url = "teste"

try:
    yt = pytube.YouTube(url)
    video = yt.streams.first()
    video.download("./imgood")
except pytube.exceptions.RegexMatchError:
    print("Erro.")
