$(document).ready(function(){
		//collapsing using click event
	$('.expandable__trigger').on('click',function(e){
		e.preventDefault();
		var trigger = $(this);
		var expandableTrigger = trigger.find('.expandable__link');
		var expandableTarget = trigger.parent().find('.expandable__target');

		trigger.siblings('.expandable__target').slideToggle();
		trigger.siblings('.expandable__trigger').toggleClass('expandable__trigger--active');
		
		if(trigger.parent().hasClass('expandable--fa')){
			trigger.find('.expandable__glyph').toggleClass('fa-plus-circle').toggleClass('fa-minus-circle');
		}else{
			trigger.find('.expandable__glyph').toggleClass('glyphicon-triangle-right').toggleClass('glyphicon-triangle-bottom');
		}

		//change aria attribute of trigger
		if(expandableTrigger.attr('aria-expanded') == 'false'){
			// console.log("not expanded");
			expandableTrigger.attr('aria-expanded','true');
		}else{
			expandableTrigger.attr('aria-expanded','false');
		}

		//change aria attribute of target(collapsible)
		if(expandableTarget.attr('aria-hidden') == 'true'){
			// console.log(expandableTarget.attr('aria-hidden'));
			expandableTarget.attr('aria-hidden','false');
		}else{
			// console.log(expandableTarget.attr('aria-hidden'));
			expandableTarget.attr('aria-hidden','true');
		}

	});

	//when collapsing using enter key
	$('.expandable__trigger').keypress(function(e) {
		e.preventDefault();
	    var trigger = $(this);
	    var expandableTrigger = trigger.find('.expandable__link');
		var expandableTarget = trigger.parent().find('.expandable__target');

		trigger.siblings('.expandable__target').slideToggle();
		trigger.siblings('.expandable__trigger').toggleClass('expandable__trigger--active');

		if(trigger.parent().hasClass('expandable--fa')){
			trigger.find('.expandable__glyph').toggleClass('fa-plus-circle').toggleClass('fa-minus-circle');
		}else{
			trigger.find('.expandable__glyph').toggleClass('glyphicon-triangle-right').toggleClass('glyphicon-triangle-bottom');
		}
		

		//change aria attribute of trigger
		if(expandableTrigger.attr('aria-expanded') == 'false'){
			// console.log("not expanded");
			expandableTrigger.attr('aria-expanded','true');
		}else{
			expandableTrigger.attr('aria-expanded','false');
		}

		//change aria attribute of target(collapsible)
		if(expandableTarget.attr('aria-hidden') == 'true'){
			// console.log(expandableTarget.attr('aria-hidden'));
			expandableTarget.attr('aria-hidden','false');
		}else{
			// console.log(expandableTarget.attr('aria-hidden'));
			expandableTarget.attr('aria-hidden','true');
		}
	});

});