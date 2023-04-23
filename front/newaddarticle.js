
$(document).ready(function(){  
    $('#submitarticle').click(function(e){  
         
          e.preventDefault();

         var name =  document.getElementById("name").value;
         var address =  document.getElementById("address").value;
         var country =  document.getElementById("country").value;
         var eaddress =  document.getElementById("eaddress").value;

        
         var x=eaddress;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  

        if (name.length > 0 || address.length > 0 || country.length > 0 || eaddress.length > 0){
            if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
            alert("Please enter a valid e-mail address");  
        return false;  
        }

        //  if (name == "") {
        //     alert("Ensure you input name!");
        //     return false;
        //      } 

    




        //  if (name =="" || address =="" || country =="" || eaddress ==""){
        //     alert("Please fill all the fields");
        //     return false;

        //  } else{

        //     $.ajax({ 
        //         url:"http://localhost:3000/api/create_user",
        //         method:"post",
        //         headers: {"x-api-key": "231413"},
        //         data:{name : name, address : address , country : country, eaddress : eaddress},
        //         success:function(response){  
        //             setTimeout(function(){
        //                 window.location.href="./success.html"; // The URL that will be redirected too.
        //                 }, 200);
                
        //         }
        //     });

        //  }

        });
    
    
});


