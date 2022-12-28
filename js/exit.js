$(document).ready(function () {
    $("#btnExit").click(function () {
        //$.cookie('site_autenticacao', '', { expires: -1, path: '/'});
        //.cookie('site_autenticacao', null);
        Cookies.set('site_autenticacao', dados.Token, { expires: -1 });
        document.location.href = 'index.html';
    });
});