
(function($){
"use strict";

// EMAIL SENDER 
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}
// ABOUT PAGE FORM
   $( "form" ).on( "submit", function( event ) {
      event.preventDefault();
    var formData = $( this ).serializeArray()
    var formValues ={}
  $.each(formData, function(index, field){
     formValues[this.name] = this.value
  })
console.log("formValues: ", formValues);

  sendEmail()
} );
})(window.jQuery)
