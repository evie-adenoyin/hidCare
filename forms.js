
(function($){
"use strict";

// EMAIL SENDER
 var sendEmail = async function (elementId, templateClass){
        var loading = "false"
         console.log(loading)
        var result =  await emailjs.sendForm('service_g8n60vk', templateClass, elementId)
        loading = "true"
         console.log(loading)
        if (result.status === 200 ) {
            console.log('SUCCESS!', result.status, result.text);
            loading = "false"
             console.log(loading)
       }
       
     
}

// FORM DATA
   $( "form" ).on( "submit", function( event ) {
        event.preventDefault();
        var elementId = "#"+this.id
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
  sendEmail(elementId, templateClass)
 
     

} );
})(window.jQuery)
