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

//DOM

//get value
$('#btn1').click(function() {
  alert('Text: ' + $('#test').text());
});
$('#btn2').click(function() {
  alert('HTML: ' + $('#test').html());
});

$('#btn1').click(function() {
  alert('Value: ' + $('#test').val());
});

$('button').click(function() {
  alert($('#w3s').attr('href'));
});

//set

$('#btn1').click(function() {
  $('#test1').text('Hello world!');
});
$('#btn2').click(function() {
  $('#test2').html('<b>Hello world!</b>');
});
$('#btn3').click(function() {
  $('#test3').val('Dolly Duck');
});


//with a callback

$("#btn1").click(function(){
    $("#test1").text(function(i, origText){
      return "Old text: " + origText + " New text: Hello world!
      (index: " + i + ")";
    });
  });
  
  $("#btn2").click(function(){
    $("#test2").html(function(i, origText){
      return "Old html: " + origText + " New html: Hello <b>world!</b>
      (index: " + i + ")";
    });
  });

  //set atr

  $("button").click(function(){
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
  });

  
  $("button").click(function(){
    $("#w3s").attr("href", function(i, origValue){
      return origValue + "/jquery/";
    });
  });

  //Add Elements

  $("p").append("Some appended text.");

  $("p").prepend("Some prepended text.");

  function appendText() {
    var txt1 = "<p>Text.</p>";               // Create element with HTML 
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("body").append(txt1, txt2, txt3);      // Append the new elements
  }


  $("img").after("Some text after");

  $("img").before("Some text before");