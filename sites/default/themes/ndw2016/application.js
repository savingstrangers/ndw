(function($) {
	
	$(document).ready(function(){
		
		$(".menu-button").click(function(){
			if ($(this).text() == 'Touch to Show Navigation') {
				$(this).text('Touch to Hide Navigation');
			} else {
				$(this).text('Touch to Show Navigation');
			}
			
			$("#nav").slideToggle(500);
		})
		
		$("#edit-submitted-phone-number").val('e.g. 407-555-5555');
		
		$("#edit-submitted-phone-number").focus(function(){
			if ($(this).val() == "e.g. 407-555-5555"){
				$(this).val('');
				$(this).css({"color" : "#000", "font-style" : "normal" })
			}
		})
		
		$("#edit-submitted-phone-number").blur(function(){
			if ($(this).val() == ""){
				$(this).val('e.g. 407-555-5555');
				$(this).css({"color" : "#bbb", "font-style" : "italic" })
			}
		})
		
		
	})
	
	
})(jQuery);

