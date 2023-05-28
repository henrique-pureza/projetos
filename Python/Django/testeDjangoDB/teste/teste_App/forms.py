from django import forms

class CarroForm(forms.Form):
    marca = forms.CharField(
        label="Marca",
        widget=forms.TextInput(
            attrs={
                "class": "form-control",
                "placeholder": "Marca do carro",
                "id": "marca"
            }
        ),
        required=True
    )

    modelo = forms.CharField(
        label="Modelo",
        widget=forms.TextInput(
            attrs={
                "class": "form-control",
                "placeholder": "Modelo do carro",
                "id": "modelo"
            }
        ),
        required=True
    )

    ano = forms.IntegerField(
        label="Ano",
        widget=forms.NumberInput(
            attrs={
                "class": "form-control",
                "placeholder": "Ex: 2023",
                "id": "ano"
            }
        ),
        required=True,
        max_value=9999,
        min_value=0
    )

    cor = forms.CharField(
        label="Cor",
        widget=forms.TextInput(
            attrs={
                "class": "form-control",
                "placeholder": "Cor do carro",
                "id": "cor"
            }
        ),
        required=True
    )
