function validateForm() {
   var name =  document.getElementById('name').value;
   if (name == "") {
       document.getElementById('status').innerHTML = "Decinos tu nombre.";
       return false;
   }
   var email =  document.getElementById('email').value;
   if (email == "") {
       document.getElementById('status').innerHTML = "Ingresa tu email.";
       return false;
   } else {
       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(!re.test(email)){
           document.getElementById('status').innerHTML = "Email incorrecto.";
           return false;
       }
   }
   var subject =  document.getElementById('subject').value;
   if (subject == "") {
       document.getElementById('status').innerHTML = "Ingresa tu numero celular";
       return false;
   }
   var message =  document.getElementById('message').value;
   if (message == "") {
       document.getElementById('status').innerHTML = "Informanos sobre tu consulta";
       return false;
   }
   
   document.getElementById('status').innerHTML = "Enviando...";
   document.getElementById('contact-form').submit();
   

   };



   function validateNews() {
    var email =  document.getElementById('email-news').value;
    if (email == "") {
        document.getElementById('status-news').innerHTML = "Ingresa tu email.";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status-news').innerHTML = "Email incorrecto.";
            return false;
        }
    }
    
    document.getElementById('status-news').innerHTML = "Enviando...";
    document.getElementById('news-form').submit();
    
 
    };
 