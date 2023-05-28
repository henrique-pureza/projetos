from time import sleep, strftime
from os import system

while True:
    system("cls")
    clock = strftime("%H:%M:%S")
    print(clock)
    sleep(1)
