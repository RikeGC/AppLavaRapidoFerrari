$(document).ready(function () {
    $("#btnNovoCarro").click(function () {
        var carro = new Object;
        carro.Nome = $("#txtNome").val();
        carro.Marca = $("#txtMarca").val();
        carro.Ano = $("#txtAno").val();
        carro.Placa = $("#txtPlaca").val();
        carro.Tipo = $("#txtTipo").val();
        carro.Cliente = $("#txtID").val();
        Inserir(carro);
    });
    $("#btnExcluirCarro").click(function () {
        var idd = $("#selectExcluir").val();
        Excluir(idd);
    });
    
    
    ListarTodos();
    ListarTodosExcluir();
});
  
function ListarTodos() {
    $("#tabela > tbody").empty();
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Carro/',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            dados.forEach(function (item) {
                AdicionarLinha(item);
            })
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. '+erro" });
        }
    })
}
function AdicionarLinha(item) {
    var novaLinha = $("<tr>");
    var col = '';
    col += '<td>' + item.Nome + '</td>';
    col += '<td>' + item.Marca + '</td>';
    col += '<td>' + item.Placa + '</td>';
    novaLinha.append(col);
    $("#tabela").append(novaLinha);
}
function ListarTodosExcluir() {
    $('#select').empty();
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Carro/',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            var novaLinha = $('<select id="selectExcluir">');
            novaLinha.append('<option disabled selected value="">Escolha o Carro</option>');
            dados.forEach(function (item) {
                // if (item.ID == 2)
                //     novaLinha.append('<option value="' + item.ID + '">' + item.Nome + '</option>');
                // else
                novaLinha.append('<option value="' + item.ID + '">' + item.Nome + '</option>');

            })
            $("#select").append(novaLinha);
            $('#select select').formSelect();
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. '+erro" });
        }
    })
}
function Excluir(id) {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Carro/' + id,
        type: 'Delete',
        //dataType: 'json',
        //contentType: 'application/json',
        //data: JSON.stringify(tipoServico),
        success: function (dados) {
            M.toast({ html: "Dados Exluidos com Sucesso!" });
            ListarTodos();
        },
        error: function (erro) {
            M.toast({ html: "Carro não pode ser excluido \npor está em um Agedamento!" });
            //M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. '+erro" });
        }
    })
}
function Inserir(carro) {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Carro',
        type: 'Post',
        //dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(carro),
        success: function (dados) {
            dados.Nome = $("#txtNome").val();
            dados.Marca = $("#txtMarca").val();
            dados.Ano = $("#txtAno").val();
            dados.Placa = $("#txtPlaca").val();
            dados.Tipo = $("#txtTipo").val();
            //dados.Cliente = $("#txtID").val();
            M.toast({ html: "Carro Cadastrado!" });
            $("#txtNome").val('');
            $("#txtMarca").val('');
            $("#txtAno").val('');
            $("#txtPlaca").val('');
            $("#txtTipo").val('');
            ListarTodos();
            ListarTodosExcluir();
        },
        error: function (eror) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. '+erro" });
        }
    })
}