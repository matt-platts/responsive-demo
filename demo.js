var menu = menu || {

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
    }
}

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

// load links from json file
var links = links || {
	linkTemplate: '<li><a href="%url%">%title%<span>by %author%</span></a></li>',
	linkHTML: '',
	load: function(){
		$.ajax({
			url: 'links.json',
			dataType: 'json',
			success: function(data){
				for (i=0;i<data.length;i++){
					links.addLink(data[i]['url'],data[i]['title'],data[i]['author']);
				}
				links.printLinks();
			}
		});
	},
	addLink: function(url,title,author){
		newLink = links.linkTemplate;
		newLink = newLink.replace("%url%",url);
		newLink = newLink.replace("%title%",title);
		newLink = newLink.replace("%author%",author);
		this.linkHTML += newLink;
	},
	printLinks: function(){
		$("#menu_ul").html(this.linkHTML);
		
	}
}


$( document ).ready(function(){

	// 1. menu for mobiles - when clicked to show/hide
	menu.addClickListener();

	// 2. Load links from external JSON file
	links.load();

	/* 3. Initialise the acordion - 
		assumes will follow a document structure of element, section, h1 and with image. 
		*/
	accordion.init("main_stage");

});

