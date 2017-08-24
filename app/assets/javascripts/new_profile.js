$(document).on('ready page:change', function() {
  var appStream = $('.app-stream');
  appStream.on('mouseenter mouseleave', function(){
    $(this).toggleClass('is-paused');
  });
  
  $('.alert-success').fadeOut(4000);

    $("#fakeLoader").fakeLoader({
      timeToHide:1500, //Time in milliseconds for fakeLoader disappear
      zIndex:999, // Default zIndex
      spinner:"spinner7",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
        bgColor:'black', //Hex, RGB or RGBA colors
        // imagePath:"/Users/stalin/Desktop/work/pictures/giphy.gif" //If you want can you insert your custom image
    });

});
