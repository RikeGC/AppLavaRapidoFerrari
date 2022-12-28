var urlBaseAPI = 'http://10.136.52.25/apiLavaRapidoFerrari/api';
var urlBaseSite = 'http://127.0.0.1:5500/';
$(document).ready(function() {
    $("#cpfcad").mask("000.000.000-00")
    $("#telefonecad").mask("(00) 0000-0000")
    $("#cepcad").mask("00000-000")
    $("#datacad").mask("00/00/0000")
    $("#celularcad").mask("(00) 0000-00009")
   
    $("#celularcad").blur(function(event){
      if($(this).val().length == 15)(
        $("#celularcad").mask("(00) 00000-0009"))
      else(
        $("#celularcad").mask("(00) 0000-00009")
      )    
    })
  })
$('#btnCadastro').click(function () {
    var cliente = new Object;

    cliente.Nome = $("#nome_completo").val();
    cliente.Usuario = $('#user').val();
    cliente.Senha = $('#pass').val();
    cliente.CPF = $("#cpf").val();
    cliente.Email = $("#email").val();
    cliente.Telefone = $("#telefone").val();
    cliente.Rua = $("#rua").val();
    cliente.Numero = $("#numero").val();
    cliente.Bairro = $("#bairro").val();
    cliente.Cidade = $("#cidade").val();
    cliente.Estado = $("#txtEstado").val();
    cliente.CEP = $("#cep").val();

    Cadastro(cliente);
})
function Cadastro(cliente) {
    $.ajax({
        url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/Cliente',
        type: 'Post',
        //dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(cliente),
        success: function (dados) {
            M.toast({ html: 'Cliente cadastrado com sucesso!' });
            Login();
        },
        error: function (erro) {
            M.toast({ html: 'Ocorreu algum Erro.\nTente novamente mais tarde. ' + erro });
        }
    })
}
function Login(){
    //form.preventDefault(); //Cancela o evento padrão

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
};