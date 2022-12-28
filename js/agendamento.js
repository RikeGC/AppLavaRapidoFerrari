$(document).ready(function () {
    $("#btnAgenda").click(function () {

        var Id = $("#txtID").val();
        var agenda = new Object;

        agenda.Carro = $('#selectCarro').val();
        agenda.Servico = $('#selectServico').val();
        // agenda.DateAgend = new Object;
        // agenda.DateAgend.Day = $('#txtData').val().substring(0,2);
        // agenda.DateAgend.Month = $('#txtData').val().substring(3,5);
        // agenda.DateAgend.Year = $('#txtData').val().substring(6,10);
        // data = $('#txtData').val() + ' ' + $('#txtHora').val();
        var dia = $('#txtData').val().substring(0, 2);
        var mes =$('#txtData').val().substring(3, 5);
        var ano = $('#txtData').val().substring(6, 10);
        agenda.DateAgend = ano+'-'+mes+'-'+dia + ' ' + $('#txtHora').val();
        agenda.Funcionario = 1;
        agenda.TipoLocal = $('#txtLocal').val();
        agenda.Email = $('#txtEmail').val();
        agenda.StatuAgendamento = 2;
        if (Id == '') { Inserir(agenda); }
        else { Alterar(Id, agenda) }
    });
    ListarTodosCarro();
    ListarTodosServico();
    ListarTodasAgenda();
});
function ListarTodosCarro() {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Carro/',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            var novaLinha = $('<select id="selectCarro">');
            novaLinha.append('<option disabled selected value="">Escolha o Carro</option>');
            dados.forEach(function (item) {
                // if (item.ID == 2)
                //     novaLinha.append('<option value="' + item.ID + '">' + item.Nome + '</option>');
                // else
                novaLinha.append('<option value="' + item.ID + '">' + item.Nome + '</option>');
            })
            $("#select_carro").append(novaLinha);
            $('#select_carro select').formSelect();
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. " + erro });
        }
    })
}
function ListarTodosServico() {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Servico/',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            var novaLinha = $('<select id="selectServico">');
            novaLinha.append('<option disabled selected value="">Escolha o Serviço</option>');
            dados.forEach(function (item) {
                // if (item.ID == 2)
                //     novaLinha.append('<option value="' + item.ID + '">' + item.Nome + '</option>');
                // else
                novaLinha.append('<option value="' + item.ID + '">' + item.Descricao+'</option>');

            })
            $("#select_servico").append(novaLinha);
            $('#select_servico select').formSelect();
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. " + erro });
        }
    })
}
function ListarTodasAgenda() {
    $("#tabelaAgenda > tbody").empty();
    $("#tabela > tbody").val('');
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Agendamento/',
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            $("#tabela > tbody").empty();
            dados.forEach(function (item) {
                var novaLinha = $("<tr>");
                var col = '';
                col += '<td>' + item.Carro1 + '</td>';
                var dia = item.DateAgend.substring(0, 2);
                var mes = item.DateAgend.substring(3, 5);
                var ano = item.DateAgend.substring(6, 10);
                var hora = item.DateAgend.substring(11, 16);
                col += '<td>' + dia + '-' + mes + '-' + ano + ' / ' + hora + '</td>';
                col += '<td>';
                col += '<a onclick="AlterarLinha(' + item.ID + ')" ';
                col += 'class="waves-effect waves-light btn"><i class="material-icons">alarm</i></a>';
                col += '</td>';
                col += '<td>';
                col += '<a href="#modal1" onclick="ExcluirLinha(' + item.ID + ')" ';
                col += 'class="waves-effect waves-light btn modal-trigger"><i class="material-icons">alarm_off</i></a>';
                col += '</td>';
                novaLinha.append(col);
                $("#tabelaAgenda").append(novaLinha);
            })
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. " + erro });
        }
    })
}
function AlterarLinha(ID) {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/AgendamentoServico/' + ID,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        success: function (dados) {
            $('#txtID').val(dados.ID);
            $('#selectCarro').find('option[value="' + dados.Carro + '"]').prop('selected', true);
            $("#selectCarro").formSelect();
            $('#selectServico').find('option[value="' + dados.Servico + '"]').prop('selected', true);
            $("#selectServico").formSelect();
            var dia = dados.DateAgend.substring(0, 2);
            var mes = dados.DateAgend.substring(3, 5);
            var ano = dados.DateAgend.substring(6, 10);
            $('#txtData').val(dia + '-' + mes + '-' + ano);
            //$('#txtData').pickadate(ToString(DataAgend));
            //$('#txtData').val(DateAgend.substring(0,10));
            var hora = dados.DateAgend.substring(11);
            $('#txtHora').find('option[value="' + hora + '"]').prop('selected', true);
            $("#txtHora").formSelect();
            $('#txtLocal').find('option[value="' + dados.TipoLocal + '"]').prop('selected', true);
            $("#txtLocal").formSelect();
            $('#txtEmail').val(dados.Email);
            $('#txtEmail').focus();

            $("#btnAgenda").text("Salvar");
            $("#efeito").html('Alterar Agendamento');
            $("#txtEmail").focus();
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. " + erro });
        }
    });
}
function ExcluirLinha(id) {
    $("#btnExcluir").click(function () {
        Excluir(id);
    });
}
function Excluir(id) {
    $.ajax({

        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Agendamento/' + id,
        type: 'Delete',
        success: function (dados) {
            $("#tabelaAgenda > tbody").empty();
            $("#tabela > tbody").val('');
            ListarTodasAgenda();
            M.toast({ html: 'Agendamento cancelado com Sucesso!' });
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. " + erro });
        }
    })
}
function Inserir(agenda) {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Agendamento',
        type: 'Post',
        //dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(agenda),
        success: function (dados) {
            $('#selectCarro').val('');
            $("#selectCarro").formSelect();
            $('#selectServico').val('');
            $("#selectServico").formSelect();
            $('#txtData').val('');
            $('#txtHora').val('');
            $("#txtHora").formSelect();
            $('#txtLocal').val('');
            $("#txtLocal").formSelect();
            $('#txtEmail').val('');
            M.toast({ html: "Agendamneto efetuado!" });
            ListarTodasAgenda();
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. " + erro });
        }
    })
}
function Alterar(id, agenda) {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Agendamento/' + id,
        type: 'put',
        //dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(agenda),
        success: function (dados) {
            $('txtID').val('');
            $('#selectCarro').val('');
            $("#selectCarro").formSelect();
            $('#selectServico').val('');
            $("#selectServico").formSelect();
            $('#txtData').val('');
            $('#txtHora').val('');
            $("#txtHora").formSelect();
            $('#txtLocal').val('');
            $("#txtLocal").formSelect();
            $('#txtEmail').val('');
            M.toast({ html: 'Agendamento Alterado Com Sucesso!' });
            ListarTodasAgenda();
            $("#btnAgenda").text("AGENDAR");
            $("#efeito").html('Efetuar Agendamento');
        },
        error: function (erro) {
            M.toast({ html: "Ocorreu algum Erro.\nTente novamente mais tarde. " + erro });
        }
    })
}