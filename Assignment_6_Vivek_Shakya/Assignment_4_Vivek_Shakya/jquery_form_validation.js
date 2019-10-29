var email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var phone_regex = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
var zip_regex = /^\d{5}(?:[-\s]\d{4})?$/;
$(document).ready(function(){

    
    $("#fname").hide();
    $("#lname").hide();
    $("#email").hide();
    $("#apt_facilities").hide();
    $("#text-box-show-hide").hide();
    //$("#street").hide();


    $('input[name=title]').change(function(){

        if($('input[name=title]:checked').length != 1){
            $("#title-error").text("Please select the title").css("color","red").show();
            return false;
        }
        else if($('input[name=title]:checked').length == 1){
            $("#title-error").hide();
            return true;
            
        }


    })
    

    $("#firstName").focus(function(){                // start of focus firstname

        $(this).css("backgroundColor" , "yellow");
        if($(this).val() == ""){
            $("#fname").show();
            $("#fname").text("Please enter a valid name");
            $("#fname").css("color","red");

            return false;

        }
        else{
            $("#fname").hide();
            return true;

        }
        

    });                                            // end of focus
                                              
    $("#firstName").blur(function(){            // start blur

        

        if($(this).val() == ""){
            $("#fname").show();
            $("#fname").text("Please enter a valid name");
            $("#fname").css("color","red");

            return false;

        }
        else{
            $(this).css("backgroundColor" , "white");
            $("#fname").hide();
           
             return true;
        }

       
     });                                          // end of blur





     $("#lastName").focus(function(){                // start of focus lastname

        $(this).css("backgroundColor" , "yellow");
        if($(this).val() == ""){
            $("#lname").show();
            $("#lname").text("Please enter a valid last name");
            $("#lname").css("color","red");

            return false;

        }
        else{
            $("#lname").hide();
            return true;

        }
        

    });                                            // end of focus
                                              
    $("#lastName").blur(function(){            // start blur

       

        if($(this).val() == ""){
            $("#lname").show();
            $("#lname").text("Please enter a valid last name");
            $("#lname").css("color","red");

            return false;

        }
        else{
            $(this).css("backgroundColor" , "white");
            $("#lname").hide();
           
             return true;
        }

       
     });                                          // end of blur last name




     // validation for email field



     $("#emailId").focus(function(){                // start of focus email

        $(this).css("backgroundColor" , "yellow");
        if($(this).val() == "" ||   (!email_regex.test($(this).val())) ){
            $("#email").show();
            $("#email").text("Please enter a valid email id");
            $("#email").css("color","red");

            return false;

        }
        else{
           
            $("#email").hide();
            return true;

        }
        

    });                                            // end of focus
                                              
    $("#emailId").blur(function(){            // start blur

        

        if($(this).val() == "" ||   (!email_regex.test($(this).val())) ){
            $("#email").show();
            $("#email").text("Please enter a valid email id");
            $("#email").css("color","red");

            return false;

        }
        else{
            $(this).css("backgroundColor" , "white");
            $("#email").hide();
           
             return true;
        }

       
     });                                          // end of blur email


     // phone number validation 


     $("#phoneNumber").focus(function(){                // start of focus phone number

        $(this).css("backgroundColor" , "yellow");
        if($(this).val() == "" ||   (!phone_regex.test($(this).val())) ){
            $("#phone").show();
            $("#phone").text("Please enter a valid Phone Number");
            $("#phone").css("color","red");

            return false;

        }
        else{
            $(this).css("backgroundColor" , "white");
            $("#phone").hide();
            return true;

        }
        

    });                                            // end of focus
                                              
    $("#phoneNumber").blur(function(){            // start blur

        

        if($(this).val() == "" ||   (!phone_regex.test($(this).val())) ){
            $("#phone").show();
            $("#phone").text("Please enter a valid Phone Number");
            $("#phone").css("color","red");

            return false;

        }
        else{
            $(this).css("backgroundColor" , "white");
            $("#phone").hide();
           
             return true;
        }

       
     });                                          // end of blur phone number



  // zip code validation


  $("#zipcode").focus(function(){                // start of focus zipcode

    $(this).css("backgroundColor" , "yellow");
    if($(this).val() == "" ||   (!zip_regex .test($(this).val())) ){
        $("#zip_code").show();
        $("#zip_code").text("Please enter a valid Zip Code");
        $("#zip_code").css("color","red");

        return false;

    }
    else{
        $(this).css("backgroundColor" , "white");
        $("#zip_code").hide();
        return true;

    }
    

});                                            // end of focus
                                          
$("#zipcode").blur(function(){            // start blur

    

    if($(this).val() == "" ||   (!zip_regex .test($(this).val())) ){
        $("#zip_code").show();
        $("#zip_code").text("Please enter a valid Zip Code");
        $("#zip_code").css("color","red");

        return false;

    }
    else{
        $(this).css("backgroundColor" , "white");
        $("#zip_code").hide();
       
         return true;
    }

   
 });                                          // end of blur zipcode


 // check box validations

  $("#fb,#google,#yelp").change(function(){

    if($("#fb").is(':checked') || $("#google").is(':checked') || $("#yelp").is(':checked') ){
        $("#error").hide();
        return true;
    }
    else{
        $("#error").text("Please Select atleast one checkbox").css("color","red").show();
       
        return false;
    }
   
});

  $("#area").change(function(){

    //console.log($("#area").val());
    $("#apt_facilities").hide();

    $("#heat,#wifi,#microwave").prop("checked",false);

    $("#text-box-show-hide").hide();

    $("#street-addr").val("");

    if($("#area").val() != "none"){

        $("#apt_facilities").show();
        $("#area-error").hide();
        
        $("#heat,#wifi,#microwave").click(function(){

            if($("#heat").is(':checked') || $("#wifi").is(':checked') || $("#microwave").is(':checked') ){
                
                $("#text-box-show-hide").show();
                

                
                
            }
            else{
                $("#text-box-show-hide").hide();
                $("#street-addr").val("");

               
               
            }



        });
        return true;
    }
    else{
        $("#text-box-show-hide").hide();
        $("#area-error").text("Please select a value from the list").css("color","red").show();

        $("#apt_facilities").hide();
        return false;

    }

  });



 

    $("#street-addr").focus(function(){
        if($("#street-addr").val() == ""){
            $("#street").text("Please enter the street address").css("color","red").show();
           
            return false;
    
        }
        else{
            $("#street").hide();
            return true
    
        }
    });

    $("#street-addr").blur(function(){
        if($("#street-addr").val() == ""){
            $("#street").text("Please enter the street address").css("color","red").show();
            return false;
    
        }
        else{
            $("#street").hide();
            return true;
    
        }
    });

 
  



  

  $("#comments").focus(function(){
      if($(this).val() == ""){
          $("#comment-error").show().css("color","red").text("comments cannot be left blank");
          return false;

      }
      else{
        $("#comment-error").hide();
        return true;

      }
  });

  $("#comments").blur(function(){
    if($(this).val() == ""){
        $("#comment-error").show().css("color","red").text("comments cannot be left blank");
        return false;

    }
    else{
      $("#comment-error").hide();
      return true;

    }
});
  








  


  });

  $("form").submit(function(event){
    
   // console.log("submit");
    window.localStorage.setItem('first_name',($("#firstName").val()));
    window.localStorage.setItem('last_name',($("#lastName").val()));
    window.localStorage.setItem('email',($("#emailId").val()));
    window.localStorage.setItem('phone',($("#phoneNumber").val()));
    window.localStorage.setItem('zipcode',($("#zipcode").val()));
    window.localStorage.setItem('area',($("#area").val()));
    window.localStorage.setItem('street',($("#street-addr").val()));
    window.localStorage.setItem('comments',($("#comments").val()));
    window.localStorage.setItem('title',($('input[name=title]:checked').val()));
    //console.log($("#firstname").val());

    if($('input[name=title]:checked').length != 1){
        $("#title-error").text("Please select the title").css("color","red").show();
        return false;
    }
   

    //if(!($("#mr").prop('checked')) && !($("#miss").prop('checked')) && !($("#mrs").prop('checked'))){

        
   // }

    if($("#firstName").val() == ""){
        //console.log("inside if");
        $("#fname").text("Please enter valid name").css("color","red").show();
       
        return false;
       
    }

    if($("#lastName").val() == ""){
       // console.log("inside if");
        $("#lname").text("Please enter valid last name").css("color","red").show();
       
        return false;
       
    }
    if( $("#emailId").val() =="" ||  (!email_regex.test($("#emailId").val())) ){

        $("#email").text("Please enter a valid email id").css("color","red").show();
        
        return false;

    }

    if( $("#phoneNumber").val() =="" ||  (!phone_regex.test($("#phoneNumber").val())) ){

        $("#phone").text("Please enter a valid phone number").css("color","red").show();
        
        return false;

    }
    if( $("#zipcode").val() =="" ||  (!zip_regex.test($("#zipcode").val())) ){

        $("#zip_code").text("Please enter a valid zip code").css("color","red").show();
        
        return false;

    }

    var sources = [];
    $.each($("input[name='source']:checked"), function(){            
                sources.push($(this).val());
            });
    window.localStorage.setItem('source',sources);

    var utilities = [];
    $.each($("input[name='utilities']:checked"), function(){            
        utilities.push($(this).val());
    });
    window.localStorage.setItem('facilities',utilities);


    if(!($("#fb").is(':checked') || $("#google").is(':checked') || $("#yelp").is(':checked') )){

        $("#error").text("Please Select atleast one checkbox").css("color","red").show();
        
        return false;
    }

    if($("#area").val() == "none"){

        $("#area-error").text("Please select a value from the list").css("color","red").show();
       
        return false;

        
    }

    if($("#heat").is(':checked') || $("#wifi").is(':checked') || $("#microwave").is(':checked') ){

        if($("#street-addr").val()==""){
            $("#street").text("Please enter the street address").css("color","red").show();
            return false;
        }


    }
     

    

       

    
    
    
    if($("#comments").val() == ""){
        
        $("#comment-error").text("comments cannot be left blank").css("color","red").show();
       
        return false;
       
    }

    

   
    
    
        

        
    
    
    

    //$("#fname").text("Please enter valid name").css("color","red").show();
    
    
   
      

  });
$("button").click(function(){
    $("#myform")[0].reset();
     //alert("hello");
     $("#apt_facilities").hide();

    $("#heat,#wifi,#microwave").prop("checked",false);

    $("#text-box-show-hide").hide();

    $("#street-addr").val("");
 });
    
    




  

 


        

      

    
    

    
    

    
  