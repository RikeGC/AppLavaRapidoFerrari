

$('#btnEstiloEscuro').click(function () {
    $('link[data-estilo]').attr('href', 'css/index2.css');
    Cookies.set('meuEstilo', 'escuro');
})
$('#btnEstiloClaro').click(function () {
    $('link[data-estilo]').attr('href', 'css/index.css');
    Cookies.set('meuEstilo', 'claro');
})

$(document).ready(function () {    
    if (Cookies.get('meuEstilo') === 'claro')
    {
        $('link[data-estilo]').attr('href', 'css/index.css');
    } else if (Cookies.get('meuEstilo') === 'escuro')
    {
        $('link[data-estilo]').attr('href', 'css/index2 .css');
    }    
})