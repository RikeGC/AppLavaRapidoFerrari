$(document).ready(function () {
    ClienteLogado();
});

function ClienteLogado() {
    $.ajax({
      // url: 'http://10.136.52.25/ApiBeq/api/UsuarioLogado/',
      url: 'http://10.136.52.25/apiLavaRapidoFerrari/api/ClienteLogado/',
      type: 'get',
      dataType: 'json',
      contentType: 'application/json',
      success: function (dados) {
        //$('#txtID').val(dados.ID);
        $('#nome_mostra').text(dados.Nome);
        $('#nome_mostra_span').html(dados.Nome);
        $('#cpf_mostra').text(dados.CPF);
        $('#rua_mostra').text(dados.Rua);
        $('#numero_mostra').text(dados.Numero);
        $('#bairro_mostra').text(dados.Bairro);
        $('#cidade_mostra').text(dados.Cidade);
        $('#estado_mostra').text(dados.Estado);
        $('#cep_mostra').text(dados.CEP);
        $('#email_mostra').text(dados.Email);
      },
      error: function (erro) {
        M.toast({html:'Ocorreu um erro'});
      }
    });
  }
  