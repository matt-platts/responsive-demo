$( document ).ready(function(){

	// 1. menu for mobiles - when clicked to show/hide
	menu.init();

	// 2. Load links from external JSON file
	links.load();

	/* 3. Initialise the acordion - 
              assumes will follow a document structure of element, section, h1 and with image
	      so we can pass it the top element - for reusability
	 */
	accordion.init("main_stage");

});
