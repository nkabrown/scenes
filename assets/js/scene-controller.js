// trigger first page transition
$('div.fill-01').on('click', function() {
  $('div.fill-01').addClass('animate-left');
  d3.select('div.view-two').transition().delay(900).style('background-color', '#78cfbc');
  window.setTimeout(function() { $('div.view-one').hide(); }, 1200);
});

// trigger second page transition
$('div.view-two').on('click', function() {
  $('div.view-three').addClass('animate-right');
  $('div.view-three').css('left', '0');
});
