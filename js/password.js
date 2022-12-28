$(document).ready(function () {
    $("#btnEnviaSenha").click(function () {
        EnviarEmailSenha();
    });
});

function EnviarEmailSenha() {
    if ($('#email').val().trim() == '') {
        alert('Email Obrigatorio');
        return false;
    }
    
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Password/',
        type: 'get',
        data: {
            email: $("#email").val(),
        },
        success: function (dados) {
            M.toast({html: 'Em instantes você recebera sua senha!'});
            document.location.href = 'index.html';
            $("#email").val('');
        },

        error: function (erro) {
            M.Toast({html: 'Ocorreu algum no envio do E-mail.\nTente novamente mais tarde.'});
        }
    });
}