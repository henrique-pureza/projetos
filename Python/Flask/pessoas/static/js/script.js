function deletarPessoa(nome, sobrenome) {
    $.ajax({
        url: `/delete?nome=${nome}&sobrenome=${sobrenome}`,
        type: "DELETE",
        success: function() {
            window.location.reload();
        }
    });
}

var nomeAntigo, sobrenomeAntigo;

function openEditModal(nome, sobrenome, idade, sexo) {
    var modal = new bootstrap.Modal($("#editModal"));
    modal.show();

    nomeAntigo = nome;
    sobrenomeAntigo = sobrenome;

    $("#nome").val(nome);
    $("#sobrenome").val(sobrenome);
    $("#idade").val(idade);

    if (sexo === "Masculino") {
        $("#masculino").prop("checked", true);
    } else if (sexo === "Feminino") {
        $("#feminino").prop("checked", true);
    } else if (sexo === "Não-binárie") {
        $("#nao-binarie").prop("checked", true);
    }
}

function edit() {
    var nome = $("#nome").val();
    var sobrenome = $("#sobrenome").val();
    var idade = $("#idade").val();
    var sexo = $('input[name="sexo"]:checked').val();

    $.ajax({
        url: `/edit?nomeAntigo=${nomeAntigo}&sobrenomeAntigo=${sobrenomeAntigo}&novoNome=${nome}&novoSobrenome=${sobrenome}&novaIdade=${idade}&novoSexo=${sexo}`,
        type: "PUT",
        success: function() {
            window.location.reload();
        }
    });
}
