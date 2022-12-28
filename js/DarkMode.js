$("#meuEstilo").click(function () {
    if ($("#meuEstilo").is(':checked')) {
        $('link[data-estilo]').attr('href', 'css/style2.css');
        Cookies.set('meuEstilo', 'escuro',{ expires: 1000 });
    } else {
        $('link[data-estilo]').attr('href', 'css/style.css');
        Cookies.set('meuEstilo', 'claro',{ expires: 1000 });
    }

});
$(document).ready(function () {
    if (Cookies.get('meuEstilo') === 'claro') {
        $('#meuEstilo').prop('checked',false);
        $('link[data-estilo]').attr('href', 'css/style.css');
    } else if (Cookies.get('meuEstilo') === 'escuro') {
        $('#meuEstilo').prop('checked',true);
        $('link[data-estilo]').attr('href', 'css/style2.css');
    }
})


// $('#btnEstiloEscuro').click(function () {
//     $('link[data-estilo]').attr('href', 'css/index2.css');
//     Cookies.set('meuEstilo', 'escuro');
// })
// $('#btnEstiloClaro').click(function () {
//     $('link[data-estilo]').attr('href', 'css/index.css');
//     Cookies.set('meuEstilo', 'claro');
// })

// $(document).ready(function () {
//     if (Cookies.get('meuEstilo') === 'claro') {
//         $('link[data-estilo]').attr('href', 'css/index.css');
//     } else if (Cookies.get('meuEstilo') === 'escuro') {
//         $('link[data-estilo]').attr('href', 'css/index2 .css');
//     }
// })