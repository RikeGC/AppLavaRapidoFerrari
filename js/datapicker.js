document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, {
    format: 'dd/mm/yyyy',
    showClearBtn: true,
    i18n: {
      months: ['Janeiro ', 'Fevereiro ', 'Março ', 'Abril ', 'Maio ', 'Junho ', 'Julho ', 'Agosto ', 'Setembro ', 'Outubro ', 'Novembro ', 'Dezembro '],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
      weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      today: 'Hoje',
      clear: 'Limpar',
      cancel: 'Sair',
      done: 'Confirmar',
      labelMonthNext: 'Próximo mês',
      labelMonthPrev: 'Mês anterior',
      labelMonthSelect: 'Selecione um mês',
      labelYearSelect: 'Selecione um ano',
      selectMonths: true,
      selectYears: 15,
    }
  });

});

// Or with jQuery

$(document).ready(function () {
  $('.datepicker').instances.toString();
});
