var _LONG_WAIT  = 100;
var _SHORT_WAIT = 100;
$(document).ready(function () {

  // displayQuestions();

  loadAnimations();

});

  // Run Color Thief functions and display results below image.
  // We also log execution time of functions for display.
// function showColorsForImage() {
//   var $image                   = $('#preview-img');
//   var image                    = $image[0];
//   var colorThief               = new ColorThief();
//   var start                    = Date.now();
//   var color                    = colorThief.getColor(image);
//   var elapsedTimeForGetColor   = Date.now() - start;
//   var palette                  = colorThief.getPalette(image);
//   var elapsedTimeForGetPalette = Date.now() - start + elapsedTimeForGetColor;

//   var colorThiefOutput = {
//     color: color,
//     palette: palette,
//     elapsedTimeForGetColor: elapsedTimeForGetColor,
//     elapsedTimeForGetPalette: elapsedTimeForGetPalette
//   };
//   console.log(colorThiefOutput);
//   $('#style').html('' +
//     '<pre>' +
//       '<style>' +
//         '.color-1 {' +
//           'background-color:rgb('+color[0]+','+color[1]+','+color[2]+');' +
//         '}' +
//         '.color-2 {' +
//           'background-color:rgb('+palette[0][0]+','+palette[0][1]+','+palette[0][2]+');' +
//         '}' +
//         '.color-3 {' +
//           'background-color:rgb('+palette[1][0]+','+palette[1][1]+','+palette[1][2]+');' +
//         '}' +
//         '.color-4 {' +
//           'background-color:rgb('+palette[2][0]+','+palette[2][1]+','+palette[2][2]+');' +
//         '}' +
//       '</style>' +
//     '</pre>'
//   );
// };

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

// function displayQuestions() {
//   for (i in _QUESTIONS) {
//     var question     = _QUESTIONS[i];
//     var questionId   = 'q'+i;
//     var questionHTML = ''+
//   '<div id="'+questionId+'" class="question">'+
//   '<p>'+question.text+'</p>'+
//   '<div class="row">';
//     var answersHTML  = '<div class="col s1"></div>';
//     for (j in question.answers) {
//       var answerId   = 'a'+i+j;
//       var answer     = question.answers[j];
//       var image      = '<img width="150" height="150" src="assets/logo Chartit.jpg" class="img-answer" />';
//       var answerHTML = ''+
//     '<div class="col s2">' +
//       '<p>' +
//         '<input id="'+answerId+'" value="'+answerId+'" name="'+questionId+'" type="radio" class="with-gap" />'+
//         '<label for="'+answerId+'">' +
//           answer +
//           image +
//         '</label>'+
//       '</p>' +
//     '</div><!-- /.col -->';
//       answersHTML += answerHTML ;
//     }
//     questionHTML += answersHTML +
//   '</div>';
//     // Append question to list
//     $('#questions-list').append(questionHTML);
//   }
// };

function imageLoaded() {
  loader(false);
  $('#preview-img').show();
  setTimeout(function() {
    $('#q1').fadeIn();
    $('body').animate({scrollTop: $('#q1').offset().top}, 1000);
  }, _SHORT_WAIT)
}


function loadAnimations() {
  // Goto questions
  $('body').on('change', '#file', function(event) {
    if (!readURL(this)) {
      return false;
    }
  });
  $('body').on('change', 'input[name="q1"]', function(event) {
    // $('#q2').fadeIn();
    // $('body').animate({scrollTop: $('#q2').offset().top}, 1000);
    loader(true);
    setTimeout(function() {
      handleSubmit();
    }, _LONG_WAIT);
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
  $('body').animate({scrollTop: $('#results').offset().top}, 1000);
}

function loader(show) {
  if (show) {
    $('#progress').show();
  } else {
    $('#progress').hide();
  }
}

