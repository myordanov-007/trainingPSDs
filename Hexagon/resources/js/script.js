$( document ).ready( function() {
	$(".navArrow").on("click", function() {
 		$(document).scrollTop($(document).scrollTop() + " px");
	});
	// Question handler
  $('li.question').on('click', function(){
    // gets next element
    // opens .a of selected question
    $('li.answer:first').removeClass('active');
    $(this).next().slideToggle(500);
    $(this).next().siblings('li.answer').slideUp();
    // selects all other answers and slides up any open answer

  
    // Grab img from clicked question
    let img = $(this).children('img');
    // remove Rotate class from all images except the active
    $('img').not(img).removeClass('rotate');
    // toggle rotate class
    img.toggleClass('rotate');

  });

});
// Accordian Action




