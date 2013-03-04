$(function () {

  var rotate = function (startIndex) {
    $('.shanzi li').each(function (index) {
      var offset = (startIndex + index) % 24;
      var deg = 15 * offset;
      $(this).css({
        '-webkit-transform': 'rotate(' + deg  + 'deg)',
        '-moz-transform': 'rotate(' + deg  + 'deg)',
        'ms-transform': 'rotate(' + deg  + 'deg)'
      });
    });
  };

  rotate(0);

  $('.shanzi li').click(function () {

  });

});