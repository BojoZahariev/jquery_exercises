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
