var _LONG_WAIT  = 1000;
var _SHORT_WAIT = 200;
$(document).ready(function () {

  loadAnimations();

});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var $image = $('<img />')
        .attr('id',  'preview-img')
        .attr('src', event.target.result)
        .hide()
        ;
      $('#preview').append($image);
      // Must wait for image to load in DOM, not just load from FileReader
      $image.on('load', function() {
        loader(true);
        setTimeout(function() {
          imageLoaded();
        }, _SHORT_WAIT);
      });
    }
    reader.readAsDataURL(input.files[0]);
    return true;
  } else {
    return false;
  }
}


function imageLoaded() {
  loader(false);
  $('#preview-img').show();
  setTimeout(function() {
    $('#qmetier').fadeIn();
    $('body').animate({scrollTop: $('#qmetier').offset().top}, 1000);
  }, _SHORT_WAIT)
}


function loadAnimations() {
  // init select
  $('select').material_select();
    
  // Goto questions
  $('body').on('change', '#file', function(event) {
    if (!readURL(this)) {
      return false;
    }
  });
  $('body').on('select', $('#qmetier'), function(event) {
    $('#q1').fadeIn();
    $('body').animate({scrollTop: $('#q1').offset().top}, 1000);
    // loader(true);
    // setTimeout(function() {
    //   handleSubmit();
    // }, _LONG_WAIT);
  });
  $('body').on('change', 'input[name="q1"]', function(event) {
    $('#q2').fadeIn();
    $('body').animate({scrollTop: $('#q2').offset().top}, 1000);
    // loader(true);
    // setTimeout(function() {
    //   handleSubmit();
    // }, _LONG_WAIT);
  });
  $('body').on('change', 'input[name="q2"]', function(event) {
    $('#q3').fadeIn();
    $('body').animate({scrollTop: $('#q3').offset().top}, 1000);
  });
  $('body').on('change', 'input[name="q3"]', function(event) {
    loader(true);
    setTimeout(function() {
      handleSubmit();
    }, _LONG_WAIT);
  });
}

function handleSubmit() {
  // showColorsForImage();
  loader(false);
  $('#results').show();
  $('body').animate({scrollTop: $('#results').offset().top}, 3000);
    setTimeout(function(){
    //do what you need here
}, 4000);
}

function loader(show) {
  if (show) {
    $('#progress').show();
  } else {
    $('#progress').hide();
  }
}

function handleSelectChange(elem){
    console.log("lol");
    $('#q1').fadeIn();
    $('body').animate({scrollTop: $('#q1').offset().top}, 1000);
}

