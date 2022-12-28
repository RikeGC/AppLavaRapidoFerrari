$(document).ready(function(){
    $("#BtnRecuperar").click(function(){
        EnviarEmail();
    });
});

function EnviarEmail(){   
    $.ajax({
        url: 'http://localhost:',
        type: 'get',
        data: {
            email: $("#email").val(),
        },
        success: function (dados) {
            alert('E-mail Enviado com sucesso!')
        },
        error: function(erro) {
            alert('Ocorreu algum no envio do E-mail.\nTente novamente mais tarde.')
        }
    });
}