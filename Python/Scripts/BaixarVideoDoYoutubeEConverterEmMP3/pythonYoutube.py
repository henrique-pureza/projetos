from pytube import YouTube
from moviepy import editor
from re import search
from os import listdir, remove, path

# Digite o link do vídeo e o local que deseja salvar o mp3
link = input('Digite o link do vídeo que deseja baixar: ')
caminho = input('Digite o diretório que deseja salvar o vídeo: ')
yt = YouTube(link)

# Começa o download
print('Baixando...')
ys = yt.streams.filter(only_audio=True).first().download(caminho)
print('Download completo!')

# Converte mp4 para mp3
print('Convertendo arquivo...')
for file in listdir(caminho):
    if search('mp4', file):
        mp4_path = path.join(caminho, file)
        mp3_path = path.join(caminho, path.splitext(file)[0] + '.mp3')
        new_file = editor.AudioFileClip(mp4_path)
        new_file.write_audiofile(mp3_path)
        remove(mp4_path)
print('Sucesso!')