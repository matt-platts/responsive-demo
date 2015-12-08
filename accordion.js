var accordion = accordion || {
	element: '',
	init: function(el){
		accordion.element = el;
		$("#" + el + " section").first().find("p").css("display","block");
		accordion.addListener();
	},
	clicked: function(obj){
		if ($(obj).find("img").hasClass("open")){

		} else { 
			$("#" + accordion.element + " section h1 img").removeClass("open");
			$("#" + accordion.element + " section h1 img").addClass("closed");
				
			$("#" + accordion.element + " section p").slideUp();
			$(obj).parent().find("p").slideDown();
			$(obj).parent().find("h1 img").addClass('open');
			$(obj).parent().find("h1 img").removeClass('closed');
		}
	},
	addListener: function(){
		$("#" + accordion.element + " section h1").click(function(){
			accordion.clicked(this);
		});
	}
}

$( document ).ready(function(){

	/*    Initialise the acordion - 
              assumes will follow a document structure of element, section, h1 and with image
	      so we can pass it the top element - for reusability
	 */
	accordion.init("accordion");

});
