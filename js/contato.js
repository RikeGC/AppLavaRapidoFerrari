$(document).ready(function () {
    $("#btnEnviar").click(function () {


        EnviarEmail();


    });
});

function EnviarEmail() {

    if ($('#nome').val().trim() == '') {
        alert('Nome Obrigatorio');
        return false;
    }
    if ($('#email').val().trim() == '') {
        alert('Email Obrigatorio');
        return false;
    }
    if ($('#telefone').val().trim() == '') {
        alert('Telefone Obrigatorio');
        return false;
    }
    if ($('#assunto').val().trim() == '') {
        alert('Assunto Obrigatorio');
        return false;
    }
    if ($('#mensagem').val().trim() == '') {
        alert('Mensagem Obrigatorio');
        return false;
    }
    
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Contato/',
        type: 'get',
        data: {
            nome: $("#nome").val(),
            email: $("#email").val(),
            telefone: $("#telefone").val(),
            assunto: $("#assunto").val(),
            mensagem: $("#mensagem").val()
        },
        success: function (dados) {
            alert('E-mail Enviado com sucesso!')
            document.location.href = 'index.html';
            $("#nome").val('');
            $("#email").val('');
            $("#telefone").val('');
            $("#assunto").val('');
            $("#mensagem").val('');
        },

        error: function (erro) {
            alert('Ocorreu algum no envio do E-mail.\nTente novamente mais tarde.')
        }
    });
}