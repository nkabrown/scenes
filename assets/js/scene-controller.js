// trigger first page transition
$('div.fill-01').on('click', function() {
  $('div.fill-01').addClass('animate-left');
  d3.select('div.view-two').transition().delay(900).style('background-color', '#78cfbc');
  window.setTimeout(function() { $('div.view-one').hide(); }, 1200);
});

// trigger second page transition
$('div.view-two').on('click', function() {
  $('div.view-three').addClass('animate-right').css('left', '0');
});

// trigger third page transition
$('div.view-three').on('click', function() {
  $('div.view-two').hide();
  $('div.wing-one').addClass('enter-left').css('left', '0');
  $('div.wing-two').addClass('enter-right').css('right', '0');
});

// trigger fourth page transition
$('div.wing-one, div.wing-two').on('click', function() {
  $('div.view-five').show().addClass('animate-up').css('top', '0');
});

// trigger fifth page transition
$('div.view-five').on('click', function() {
  $('div.view-six').addClass('animate-down').css('top', '0');
});
