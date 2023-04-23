
$(document).ready(function(){  
    $('#submitarticle').click(function(e){  
         
          e.preventDefault();

         var name =  document.getElementById("name").value;
         var address =  document.getElementById("address").value;
         var eaddress =  document.getElementById("eaddress").value;
         var country =  document.getElementById("country").value;
      

        if (name =="" || address =="" || country =="" || eaddress ==""){
                alert("Please fill all the fields");
                return false;
    
             } else{
    
                $.ajax({ 
                    url:"http://localhost:3000/api/create_user",
                    method:"post",
                    headers: {"x-api-key": "231413"},
                    data:{name : name, address : address , country : country, eaddress : eaddress},
                    success:function(response){  
                        setTimeout(function(){
                            window.location.href="./success.html"; // The URL that will be redirected too.
                            }, 200);
                    
                    }
                });
    
             }
        }
        
    ); 
     
 });
 