# Renderizar os templates
from django.shortcuts import render

# Redirecionar de página
from django.shortcuts import redirect

# Importa o formulário
from .forms import CarroForm

# Importa o model do carro
from .models import Carro

# Classe das Views
class Views:
    # Variáveis globais
    showModal = False
    getMarca = ""
    getModelo = ""
    getAno = 0
    getCor = ""
    setMarca = ""
    setModelo = ""
    setAno = 0
    setCor = ""
    error = False

    # Renderiza o index
    def index(request):
        todos_os_carros = Carro.objects.all()
        form = CarroForm(request.POST)

        carros = []

        for carro in todos_os_carros:
            carro_row = (carro.marca, carro.modelo, carro.ano, carro.cor)
            carros.append(carro_row)

        variables = {
            "carros": carros,
            "form": form,
            "error": Views.error,
            "showModal": Views.showModal,
            "getMarca": Views.getMarca,
            "getModelo": Views.getModelo,
            "getAno": Views.getAno,
            "getCor": Views.getCor
        }

        if request.method == "POST":
            Views.error = False

            if form.is_valid():
                marca = request.POST.get("marca")
                modelo = request.POST.get("modelo")
                ano = request.POST.get("ano")
                cor = request.POST.get("cor")

                return redirect(f"/edit/?marca={marca}&modelo={modelo}&ano={ano}&cor={cor}")
            else:
                Views.error = True

        return render(request, "teste_App/index.html", variables)

    # Renderiza a página de novo carro
    def new(request):
        form = CarroForm(request.POST)
        error = False

        variables = {
            "form": form,
            "error": error
        }

        if request.method == "POST":
            error = False

            if form.is_valid():
                try:
                    marca = request.POST.get("marca")
                    modelo = request.POST.get("modelo")
                    ano = request.POST.get("ano")
                    cor = request.POST.get("cor")

                    carro = Carro(marca=marca, modelo=modelo, ano=ano, cor=cor)
                    carro.save()

                    return redirect("/")
                except:
                    error = True
            else:
                error = True

        return render(request, "teste_App/new.html", variables)

    # Deleta o objeto especificado
    def delete(request):
        marca = request.GET.get("marca", "")
        modelo = request.GET.get("modelo", "")
        ano = request.GET.get("ano", "")
        cor = request.GET.get("cor", "")

        carro = Carro.objects.get(marca=marca, modelo=modelo, ano=ano, cor=cor)
        carro.delete()

        return redirect("/")

    # Mostra o modal de editar
    def showEdit(request):
        Views.getMarca = request.GET.get("marca", "")
        Views.getModelo = request.GET.get("modelo", "")
        Views.getAno = request.GET.get("ano", "")
        Views.getCor = request.GET.get("cor", "")
        Views.showModal = True

        return redirect("/")

    # Cancela a edição (previne que o modal seja exibido sempre que a página index seja)
    def cancelEdit(request):
        Views.showModal = False

        return redirect("/")

    # Edita o carro
    def edit(request):
        try:
            carro = Carro.objects.get(marca=Views.getMarca, modelo=Views.getModelo, ano=Views.getAno, cor=Views.getCor)
            carro.marca = request.GET.get("marca", "")
            carro.modelo = request.GET.get("modelo", "")
            carro.ano = request.GET.get("ano", "")
            carro.cor = request.GET.get("cor", "")
            carro.save()

            Views.showModal = False
        except:
            Views.error = True

        return redirect("/")
