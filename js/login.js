// configurando url
var urlBaseApi = 'http://10.136.52.25/apiLavaRapidoFerrari/api/Login';
var urlBaseSite = '/'

//executado ao efetuar o envio do formulário
$("#formLogin").submit(function (form) {
    form.preventDefault(); //cancela o evento padrão

    //prepara os dados para envio
    var dados = {
        usuario: $('#Login').val(),
        senha: $('#Senha').val()
    }

    $.ajax({
        url: urlBaseApi + 'login', //url a ser executada
        method: "POST", //tipo de método a ser executado
        contentType: 'application/json', //define o formato json para envio de dados
        data: JSON.stringify(dados),//converte objeto de dados para formato json
        success: function (dados) {
            //grava o cookie
            Cookies.set('site_autenticacao', dados.Token, { expires: 1 });
            //redireciona para página index.html
            window.location.href = urlBaseSite + 'home.html';            
        }, 
        error: function (data) {
            //se o erro for 401 dá mensagem de usuário ou senha inválidos
            if (data.status == 401) {
                M.toast({html: 'Usuário e/ou senha inválidos'})
            }else{
                M.toast({html: 'Ocorreu um erro ao efetuar login'})
            }
        }  
    })
})




$(document).ready(function() {

    $('#loginform').submit(function() {

    $.ajax({
        type: "POST",
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Login',
        data: {
            username: $("#Login").val(),
            password: $("#Senha").val()
        },
        success: function(data)
        {
            if (data === 'Login') {
                window.location.replace('perfil_new.html')
            }
            else {
                alert('Senha incorreta');
            }
        }
    });

});

});  
        
        