$(function() {
  $('button').click(function() {
    $('p').hide();
  });
});

$(document).ready(function() {
  $('p').click(function() {
    $(this).hide();
  });
});

$(document).ready(function() {
  $('#hide').click(function() {
    //slow hide, milliseconds or "slow"
    $('p').hide(1000);
  });

  $('#show').click(function() {
    $('p').show();
  });
});

$(document).ready(function() {
  $('button').click(function() {
    $('p').toggle();
  });
});

//FADE

$('button').click(function() {
  $('#div1').fadeIn();
  $('#div2').fadeIn('slow');
  $('#div3').fadeIn(3000);
});

$('button').click(function() {
  $('#div1').fadeOut();
  $('#div2').fadeOut('slow');
  $('#div3').fadeOut(3000);
});

$('button').click(function() {
  $('#div1').fadeTo('slow', 0.15);
  $('#div2').fadeTo('slow', 0.4);
  $('#div3').fadeTo('slow', 0.7);
});

//SLIDE

$('#flip').click(function() {
  $('#panel').slideDown();
});

$('#flip').click(function() {
  $('#panel').slideToggle();
});

//ANIMATE

$('button').click(function() {
  $('div').animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
});

//Uses Queue

$('button').click(function() {
  var div = $('div');
  div.animate({ height: '300px', opacity: '0.4' }, 'slow');
  div.animate({ width: '300px', opacity: '0.8' }, 'slow');
  div.animate({ height: '100px', opacity: '0.4' }, 'slow');
  div.animate({ width: '100px', opacity: '0.8' }, 'slow');
});
