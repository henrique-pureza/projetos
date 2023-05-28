import pygame
from pygame.mixer import music
from pygame.time import Clock

pygame.init()

music.load("andnowyouknow.mp3")

music.play()

while music.get_busy():
    Clock().tick(10)

pygame.quit()
