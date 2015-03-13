function main(){
	jQuery('#main-icon').fitText(1.5);


	var toggled = false;

	$('.slide-container').css('left',
			$('.menubar').width()
		);
	$('.menubar p').click(function(){
		if(!toggled){
				$('.menulist').animate({
		      left: "0px"
		    	}, 200);
		    	$('.menubar').animate({
		      left: "100px"
		    	}, 200);
		    	toggled = true;
		    	
    	} else {
	    		$('.menulist').animate({
		      left: "-100px"
		    	}, 200);
		    	$('.menubar').animate({
		      left: "0px"
	    	},200);
		    	
		    	toggled = false;
		}
	});

	$('.menuitem').click(function(){
		window.location="http://www.google.com";
	});
}

$(document).ready(main);