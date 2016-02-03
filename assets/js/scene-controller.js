// trigger first page transition
$('div.view-one').on('click', function() {
  $('div.view-two').show().addClass('animate-left').css('left', '0');
  $('.dot-one').show();
  window.setTimeout(function() { $('div.view-one').hide(); }, 2000);
});

// trigger second page transition
$('div.view-two').on('click', function() {
  $('div.view-three').show().addClass('animate-right').css('left', '0');
  $('.dot-two').show();
  window.setTimeout(function() { $('div.view-two').removeClass('animate-left').hide(); }, 2000);
});

// trigger third page transition
$('div.view-three').on('click', function() {
  $('div.wing-one').show().addClass('enter-left').css('left', '0');
  $('div.wing-two').show().addClass('enter-right').css('right', '0');
  $('.dot-three').show();
});

// trigger fourth page transition
$('div.wing-one, div.wing-two').on('click', function() {
  $('div.view-five').show().addClass('animate-up').css('top', '0');
  window.setTimeout(function() { $('div.view-three, div.wing-one, div.wing-two').removeClass('enter-left enter-right animate-right').hide(); }, 2000);
  $('.dot-four').show();
});

// trigger fifth page transition
$('div.view-five').on('click', function() {
  $('div.view-six').show().addClass('animate-down').css('top', '0');
  window.setTimeout(function() { $('div.view-five').removeClass('animate-up').hide(); }, 2000);
  $('.dot-five').show();
  $('.dot-six').show();
});

// controls for vertical nav bar
$('a[href$="view-one"]').on('click', function() {
  $('.master > div:visible').hide();
  $('div.view-one').show();
});

$('a[href$="view-two"]').on('click', function() {
  $('.master > div:visible').hide();
  $('div.view-two').show();
});

$('a[href$="view-three"]').on('click', function() {
  $('.master > div:visible').hide();
  $('div.view-three').show();
});

$('a[href$="view-four"]').on('click', function() {
  $('.master > div:visible').hide();
  $('div.view-three, div.wing-one, div.wing-two').show();
});

$('a[href$="view-five"]').on('click', function() {
  $('.master > div:visible').hide();
  $('div.view-five').show();
});

$('a[href$="view-six"]').on('click', function() {
  $('.master > div:visible').hide();
  $('div.view-six').show();
});
