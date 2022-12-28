$(document).ready(function () {
    $("#btnSalvar").click(function () {
        Salvar();
    });
    ListarTodos();
});
function ListarTodos() {

    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Cliente/1',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            /*dados.forEach(function(item){*/
            $('.nome_mostra').html(dados.Nome);
            $('#cpf_mostra').html(dados.CPF);
            $('#telefone_mostra').html(dados.Telefone);
            $('#email_mostra').html(dados.Email);
            $('#rua_mostra').html(dados.Rua);
            $('#numero_mostra').html(dados.Numero);
            $('#bairro_mostra').html(dados.Bairro);
            $('#cidade_mostra').html(dados.Cidade);
            $('#estado_mostra').html(dados.Estado);
            $('#cep_mostra').html(dados.CEP);
            /*})*/
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. '+erro" });
        }
    })
}
$("#btnAlterar").click(function () {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Cliente/',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            /*dados.forEach(function(item){*/
            $('#txtID').val(dados.ID);
            $('#nome_completo').val(dados.Nome).focus();
            $('#cpf').val(dados.CPF).focus();
            $('#telefone').val(dados.Telefone).focus();
            $('#email').val(dados.Email).focus();
            $('#rua').val(dados.Rua).focus();
            $('#numero').val(dados.Numero).focus();
            $('#bairro').val(dados.Bairro).focus();
            $('#txtEstado').find('option[value="' + dados.Estado + '"]').prop('selected', true);
            $("#txtEstado").formSelect();
            $('#cidade').val(dados.Cidade).focus();
            $('#cep').val(dados.CEP).focus();
            $('#nome_completo').focus();
            /*})*/
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. '+erro" });
        }
    })
});
// $("#btnAlterarSenha").click(function () {
//     $.ajax({
//         url: 'http://localhost:57140/api/Cliente/',
//         type: 'get',
//         dataType: 'json',
//         contentType: 'application/json',
//         success: function (dados) {
//             /*dados.forEach(function(item){*/
//             $('#txtID').val(dados.ID);
//             /*})*/
//         },
//         error: function (erro) {
//             M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. '+erro" });
//         }
//     })
// });
$("#btnAltPerfil").click(function () {
    var id = $('#txtID').val();
    var Cliente = new Object;

    Cliente.Nome = $("#nome_completo").val();
    Cliente.CPF = $("#cpf").val();
    Cliente.Email = $("#email").val();
    Cliente.Telefone = $("#telefone").val();
    Cliente.Rua = $("#rua").val();
    Cliente.Numero = $("#numero").val();
    Cliente.Bairro = $("#bairro").val();
    Cliente.Cidade = $("#cidade").val();
    Cliente.Estado = $("#txtEstado").val();
    Cliente.CEP = $("#cep").val();

    Alterar(id, Cliente);
});

$('#btnAltSenha').click(function () {
    var id = $('#txtID').val();
    var Cliente = new Object;

    if ($('#senha').val() == $('#repetir_senha').val()) {
        Cliente.Senha = $("#senha").val();
        AlterarSenha(id, Cliente);
    }
    else if ($('#senha').val() != $('#repetir_senha').val()) {
        M.toast({ html: 'Senhas digitas não são iguais' });
        $("#senha").val('');
        $("#repetir_senha").val('');
    }
})
function AlterarSenha(id, Cliente) {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Cliente/' + id,
        type: 'delete',
        //dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(Cliente),
        success: function (dados) {
            M.toast({ html: 'Senha alterada com sucesso!' });
        },
        error: function (erro) {
            alert('Ocorreu algum Erro.\nTente novamente mais tarde. ' + erro);
        }
    })
}
function Alterar(id, Cliente) {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Cliente/' + id,
        type: 'put',
        //dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(Cliente),
        success: function (dados) {
            M.toast({ html: 'Cliente alterado com sucesso!' });
            ListarTodos()
        },
        error: function (erro) {
            alert('Ocorreu algum Erro.\nTente novamente mais tarde. ' + erro);
        }
    })
}