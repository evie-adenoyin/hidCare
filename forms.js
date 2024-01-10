
(function($){
"use strict";

// EMAIL SENDER
 var sendEmail = async function (elementId, templateClass, submitButton){
        submitButton.text("Sending Email...")
        var result =  await emailjs.sendForm('service_g8n60vk', templateClass, elementId)
        if (result.status === 200 ) {
            submitButton.text("Book Now")
            alert("Email Sent!")
       }else{
       submitButton.text("Sending failed!")
       }
      
}

// FORM DATA
   $( "form" ).on( "submit", function( event ) {
        event.preventDefault();

        var elementId = "#"+this.id
        var submitButton = $(this).find('.submit-button');
        var templateClass ='template_ykrx50r'

        if (elementId === "#appointment"){
            templateClass = 'template_bzoeg6h'
        }

        var formData = $( this ).serializeArray()
        console.log(formData);
        var formValues ={}
        $.each(formData, function(index, field){
        formValues[this.name] = this.value
  })
      sendEmail(elementId, templateClass, submitButton)
} );
})(window.jQuery)
