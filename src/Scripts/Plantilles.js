$(function () {

  function formatOption(option) {
    if (!option.id) return option.text;

    const img = option.element?.getAttribute('data-img');
    if (!img) return option.text;

    return $('<span><img src="' + img + '" width="50" style="margin-right:8px;"> ' + option.text + '</span>');
  }

  const $select = $('#Desplegable_Equips');

  if ($select.length) {
    $select.select2({
      templateResult: formatOption,
      templateSelection: formatOption
    });
  }

});