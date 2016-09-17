$(document).ready(function () {

  var colorThief = new ColorThief();

  // Run Color Thief functions and display results below image.
  // We also log execution time of functions for display.
  var showColorsForImage = function($image, $imageSection ) {
    var image                    = $image[0];
    var start                    = Date.now();
    var color                    = colorThief.getColor(image);
    var elapsedTimeForGetColor   = Date.now() - start;
    var palette                  = colorThief.getPalette(image);
    var elapsedTimeForGetPalette = Date.now() - start + elapsedTimeForGetColor;

    var colorThiefOutput = {
      color: color,
      palette: palette,
      elapsedTimeForGetColor: elapsedTimeForGetColor,
      elapsedTimeForGetPalette: elapsedTimeForGetPalette
    };

  };

  function handleFiles(file) {
    var $draggedImages = $('#dragged-images');
    var imageType      = /image.*/;

    if (!file.type.match(imageType)) {

      alert('File must be a supported image type.');

    }
    var reader = new FileReader();
    reader.onload = function(event) {
        imageInfo = { images: [
          {'class': 'dropped-image', file: event.target.result}
        ]};

        // var imageSectionHTML = Mustache.to_html($('#image-section-template').html(), imageInfo);
        // $draggedImages.prepend(imageSectionHTML);

        // var $imageSection = $draggedImages.find('.image-section').first();
        // var $image        = $('.dropped-image .target-image');

        // Must wait for image to load in DOM, not just load from FileReader
        $image.on('load', function() {
          showColorsForImage($image, $imageSection);
        });
      };
    reader.readAsDataURL(file);
  }

});