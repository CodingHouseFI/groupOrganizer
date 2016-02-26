'use strict';

var $itemName;
var $itemValue;

$(document).ready(init);

function init() {
  $itemName = $('#itemName');
  $itemValue = $('#itemValue');

  $('#outerHolder').on('click', '.item', clickItem);
  $('#outerHolder').on('click', '.holder', clickHolder);
  $('#addItem').click(addItem);
}

function clickHolder(event) {
  var $selected = $('.selected');
  if($selected.length) {
    var value = $selected.data('value');
    var $dest = $(this);
    var $origin = $selected.parent();

    changeTotal($dest, value);
    changeTotal($origin, -value);

    $selected.appendTo($(this));
    $selected.removeClass('selected');
  }
}

function changeTotal($holder, value) {
  var $total = $holder.find('.total');
  var currentTotal = $total.text();
  var newTotal = parseInt(currentTotal) + value;
  $total.text(newTotal);
}

function addItem() {
  var name = $itemName.val();
  var value = $itemValue.val();

  value = parseInt(value);

  $itemName.val('');
  $itemValue.val(0);

  var $name = $('<div>').addClass('name').text(name);
  var $value = $('<div>').addClass('value').text('$' + value);
  var $item = $('<div>').addClass('item');

  $item.data('value', value);

  $item.append($name, $value);
  $('#left').append($item);

  changeTotal( $("#left") , value);
}

function clickItem(event) {
  event.stopPropagation();
  var $this = $(this);
  var wasSelected = $this.hasClass('selected');
  $('.cup').removeClass('selected');
  if(!wasSelected) 
    $this.addClass('selected');
  }
}
