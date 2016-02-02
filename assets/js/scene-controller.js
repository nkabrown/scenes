$('div.fill-01').on('click', function() {
  $('div.fill-01').addClass('animate-left');
  d3.select('div.presentation').transition().delay(900).style('background-color', '#78cfbc');
  window.setTimeout(function() { $('div.introduction').hide(); }, 1200);
});
