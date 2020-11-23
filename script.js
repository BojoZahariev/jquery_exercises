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
    $('p').hide();
  });
  $('#show').click(function() {
    $('p').show();
  });
});
