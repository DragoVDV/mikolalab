$(document).ready(function(){
	$(".menu").click(function(e){
    	e.stopPropagation();
        $("#main_nav").toggleClass('active');
    });
	$('html').click(function (event) {
		var menu = $("#main_nav");
		if (menu.hasClass('active')) {
			$("#main_nav").removeClass('active');
		}
	});
	var sections = $('section'), 
			nav = $('nav'), 
			nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function() {
    var top = $(this).offset().top - nav_height - 70,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    };
    if ($(document).scrollTop() > 50) {
    	$('nav').addClass('shrink');
    	$('.logo').addClass('shrink');
    	$('#main_nav').addClass('shrink');
  	} else {
    	$('nav').removeClass('shrink');
    	$('.logo').removeClass('shrink');
    	$('#main_nav').removeClass('shrink');
  	};
  });
});
	$('.navbar a').mPageScroll2id();
  $('.footer-menu a').mPageScroll2id();

  $('.send').click(function() {
  	$('.inside').fadeOut('slow', function(){
  		$('.feedback').fadeIn('fast');
  	});
  });
  $('.one_more').click(function() {
  	$('.feedback').fadeOut('slow', function(){
  		$('.inside').fadeIn('fast');
  	});
  });
  $('.popup_content').click(function(){
  	$('#first').removeClass('hidden');
  });
});