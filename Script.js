
    function submitForm(){
        var username=document.getElementById("username").value;
        var Password=document.getElementById("password").value;
    
          if(username==="" && Password===""){
              alert("Submit Sucessfully");
              window.location.href="index.html"
          }else{
              alert("Login unsuccessful!")
            }
        }