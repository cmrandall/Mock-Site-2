$(document).ready(function() {
			
			// Shows the Confirm Password input and re-styles the Create Account Button        
	$('.form_input').on('focus', function() {
		$('#password_confirm').show();
		$('.create_button').removeClass('create_account_button').addClass('create_account_button_active');
	});
			// Hides the Confirm Password input and re-styles the Create Account Button
	$('.form_input').on('blur', function() {
		$('#password_confirm').hide();
		$('.create_button').removeClass('create_account_button_active').addClass('create_account_button');
	});
	
	
			// Shows and closes the Modal	
			
	$(".modalToggle").click(function(e) {
		openModal();
	});
	
	$("#modal_close_button").click(function(e) {
		closeModal();
	});
	
	$(window).resize(function() {
		updatedModal();
	});
	

});

function openModal() {
	$(".modalToggle").prop("disabled", true);
	$("#modal_content").fadeIn();
	updatedModal();
}
	
function closeModal() {
	$(".modalToggle").prop("disabled", false);
	$("#modal_content").fadeOut();
}

function updatedModal() {
	var $modal_content = $("#modal_content");
	var top = "200px";
	var left = ($(window).width() - $modal_content.outerWidth()) / 2; //center horizontal
	
	$modal_content.css({
		'top' : top,
		'left' : left
	});
	
}