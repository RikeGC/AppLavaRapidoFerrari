var urlBaseAPI = 'http://10.136.52.25/apiLavaRapidoFerrari/api/';
var urlBaseSite = 'http://127.0.0.1:5500/';

//Executado ao efetuar o envio do formulario
$('#formLogin').submit(function(form){
    form.preventDefault(); //Cancela o evento padrão

    //Prepara os dados para envio
    var dados = {
        usuario: $('#user').val(),
        senha: $('#pass').val()
    }
    $.ajax({
        url:urlBaseAPI + 'login', //URL a ser executada
        method: "POST", //Tipo de metodo a ser executado
        contentType: 'application/json', //Define o formato joson para envio de dados
        data: JSON.stringify(dados),//Convite objeto de dados para formato json
        success: function(dados){
            //Grava o cookie
            Cookies.set('site_autenticacao', dados.Token,{ expires: 1 });
            //Redireciona para pagina index.html
            window.location.href = urlBaseSite + 'home_new.html';
        },
        error: function(data){
            //Se o error for 401 dá mensagem de usuario ou senha invalidos
            if(data.status == 401){
                M.toast({html: "Usuario e/ou senha invalidos"});
            }
            else{
                M.toast({html: "Ocorreu um erro ao efetuar login"})
            }
        }
    })
});
$('#btnCadastro').click(function(){
    window.location.href = urlBaseSite + 'cadastro_new.html';
})