// Problem:
// Hints are shown even when form is valid
//Solution:
// Hide and show them at appropriate times

// Hide hints

$(document).ready(function(){

var $email = $("#form-email");
var $emailError = $("form span");

function canSubmit() {
	return validateEmail($email);			// will return a boolean
		}

function enableSubmitButton() {
	if (canSubmit) {       // if canSubmit is true
		$("#submitbutton").prop("disabled", !canSubmit());		// then disable property is made false
  }					            //and if canSubmit is false, then disable prop is true
  }

enableSubmitButton(); // calling this to immediately disable button as page loads, otherwise isnt called until focus or keyup

$emailError.show();

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  return ( $email.val().length > 0 && emailReg.test($email.val()));
}

if( !validateEmail($email)) {
  $emailError.hide();
 }

function emailEvent(){
	   //Find out if password is valid
		if (validateEmail($email)) {		//if email is valid
	       //Hide hint if valid
    $emailError.hide();   	// hide prompt
		}// else show hint
		else {
		$emailError.show();	//otherwise show prompt to make valid
				}}

	// When event happens and password is > than 8 characters, hide password hint, otherwise show
		$email.focus(emailEvent).keyup(emailEvent).keyup(enableSubmitButton);	//sets event for click and keyboard stroke using emailEvent function
});
