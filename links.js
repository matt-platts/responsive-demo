var links = links || {
	linkTemplate: '<li><a href="%url%">%title%<span>by %author%</span></a></li>',
	linkHTML: '',
	load: function(){
		console.log(this.load);
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
