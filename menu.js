var menu = menu || {

    init: function(){
	menu.addClickListener();
	menu.addScreenResizeListener();
    },
    clicked: function(menuDisplay){
	if (menuDisplay=='block'){
		$('#menu_ul').slideUp();
		$('#mobile_menu_top a').html('Menu');
	} else {
		$('#menu_ul').slideDown();
		$('#mobile_menu_top a').html('Close');
	}

    },
    addClickListener: function(){
	$('#mobile_menu_top').click(function(){
		menu.clicked($('#menu_ul').css('display'));
	});
    },
    addScreenResizeListener: function(){
	$( window ).resize(function() {
		if ($(window).width()>=460){
			$('#menu_ul').slideDown();
		} else {
			$('#menu_ul').hide();
		}
	});
    }
}
