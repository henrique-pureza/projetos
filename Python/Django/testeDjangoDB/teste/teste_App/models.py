from django.db import models

class Carro(models.Model):
    marca = models.CharField(max_length=30)
    modelo = models.CharField(max_length=30)
    ano = models.IntegerField()
    cor = models.CharField(max_length=30)
