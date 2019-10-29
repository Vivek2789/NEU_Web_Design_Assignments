var first_Name = document.getElementById("firstName");
    
var lname = document.getElementById("lastName");
var email = document.getElementById("emailId");
var phone = document.getElementById("phoneNumber");
var zip_code = document.getElementById("zipcode");
var addr = document.getElementById("street-addr");
var area = document.getElementById("area");

//var source = document.querySelector('input[name="source"]:checked');
var comments = document.getElementById("comments");
//var facilities = document.querySelector('input[name="utilities"]').value;

var email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var phone_regex = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
var zip_regex = /^\d{5}(?:[-\s]\d{4})?$/;

    


function radio_value(radio){
    window.localStorage.setItem('title',(radio.value));

}





function name_validate_onfocus()
{

    
    
    first_Name.style.backgroundColor = "yellow";

    if(first_Name.value == "")
    {
            
        document.getElementById("fname").style.color = "red";
        document.getElementById("fname").innerHTML = "Please enter a first name";



    
    return false;
   }



}

function name_validate_onblur()
{


    if(first_Name.value == "")
    {
            
        document.getElementById("fname").style.color = "red";
        document.getElementById("fname").innerHTML = "Please enter a first name";



    
        return false;

    }
    else{

        
          first_Name.style.backgroundColor = "white";
          document.getElementById("fname").innerHTML = "";
         
          return true;
       }

}

//last name

function lname_validate_onfocus(){
    lname.style.backgroundColor = "yellow";

    if(lname.value == ""){
            
        document.getElementById("lname").style.color = "red";
        document.getElementById("lname").innerHTML = "Please enter the last name ";



    
    return false;
   }



}

function lname_validate_onblur(){


    if(lname.value == ""){
            
        document.getElementById("lname").style.color = "red";
        document.getElementById("lname").innerHTML = "Please enter a last name";



    
        return false;

    }
    else{
        lname.style.backgroundColor = "white";
        document.getElementById("lname").innerHTML = "";
          return true;
       }

}

// email

function email_validate_onfocus(){
    email.style.backgroundColor = "yellow";

    if(email.value == ""){
            
        document.getElementById("email").style.color = "red";
        document.getElementById("email").innerHTML = "Please enter an email-id ";



    
    return false;
   }



}

function email_validate_onblur(){

    


    if(email.value == ""){
            
        document.getElementById("email").style.color = "red";
        document.getElementById("email").innerHTML = "Please enter an email-id";



    
        return false;

    }
    else if(!(email_regex.test(email.value))){

        document.getElementById("email").style.color = "red";
        document.getElementById("email").innerHTML = "Please enter a valid email ID";



    
        return false;

    }
    else if((email.value != "") && (email_regex.test(email.value))){
        //alert("inside last if");
        email.style.backgroundColor = "white";
        document.getElementById("email").innerHTML = "";
          return true;
       }

}

//phone number validate

function phone_validate_onfocus(){
    phone.style.backgroundColor = "yellow";

    if(phone.value == ""){
            
        document.getElementById("phone").style.color = "red";
        document.getElementById("phone").innerHTML = "Please enter a phone number";



    
    return false;
   }



}

function phone_validate_onblur(){
    //var phone_regex = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;


    if(phone.value == ""){
            
        document.getElementById("phone").style.color = "red";
        document.getElementById("phone").innerHTML = "Please enter a phone Number";



    
        return false;

    }
    else if(!phone_regex.test(phone.value)){

        document.getElementById("phone").style.color = "red";
        document.getElementById("phone").innerHTML = "Please enter a valid phone number";



    
        return false;

    }
    else if((phone.value != "") && (phone_regex.test(phone.value))){
        phone.style.backgroundColor = "white";
        document.getElementById("phone").innerHTML = "";
          return true;
       }

}

// zip code validation onfocus onblur


function zip_validate_onfocus(){
    zip_code.style.backgroundColor = "yellow";

    if(zip_code.value == ""){
            
        document.getElementById("zip_code").style.color = "red";
        document.getElementById("zip_code").innerHTML = "Please enter a zip-code ";



    
    return false;
   }



}

function zip_validate_onblur(){
    


    if((zip_code.value == "") ){
            
        document.getElementById("zip_code").style.color = "red";
        document.getElementById("zip_code").innerHTML = "Please enter a zip-code";



    
        return false;

    }
    else if(!zip_regex.test(zip_code.value)){

        document.getElementById("zip_code").style.color = "red";
        document.getElementById("zip_code").innerHTML = "Please enter a valid zip code";



    
        return false;

    }

    

    else if((zip_code.value != "") && (zip_regex.test(zip_code.value))){
          zip_code.style.backgroundColor = "white";
          document.getElementById("zip_code").innerHTML = "";
          return true;
       }

}
//

function addr_validate_onfocus(){

    
    
    addr.style.backgroundColor = "yellow";

    if(addr.value == ""){
            
        document.getElementById("street").style.color = "red";
        document.getElementById("street").innerHTML = "Please enter the Street address";



    
    return false;
   }



}

function addr_validate_onblur(){


    if(addr.value == ""){
            
        document.getElementById("street").style.color = "red";
        document.getElementById("street").innerHTML = "Please enter the Street address";



    
        return false;

    }
    else{
          addr.style.backgroundColor = "white";
          document.getElementById("street").innerHTML = "";
          return true;
       }

}


function fb_validate_onfocus()
{

    var items=document.getElementsByName('source');
	var selectedItems="";
		for(var i=0; i<items.length; i++){
			if(items[i].type=='checkbox' && items[i].checked==true){
                selectedItems+=items[i].value+",";
            }
            
        
		}

    window.localStorage.setItem('source',selectedItems);


    var checkboxes = document.querySelector('input[name="source"]:checked');
 

     
     
    

    if(!checkboxes){
            
        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = "Please check atleast one checkbox";
        


    
    return false;
    }





else{
    
    return true;
    
   }

}
 













function form_Validate()
{

    window.localStorage.setItem('first_name',(first_Name.value));
        window.localStorage.setItem('last_name',(lname.value));
        window.localStorage.setItem('email',(email.value));
        window.localStorage.setItem('phone',(phone.value));
        window.localStorage.setItem('zipcode',(zip_code.value));
        window.localStorage.setItem('area',(area.value));
        window.localStorage.setItem('street',(addr.value));
       // window.localStorage.setItem('title',(title));
        //window.localStorage.setItem('source',(source.value));
        window.localStorage.setItem('comments',(comments.value));
       // window.localStorage.setItem('facilities',(facilities.value));
        //alert(JSON.parse(window.localStorage.getItem('first_name')));

   
    
   // var title_radio = document.getElementsByName("title")
    if(!document.querySelector('input[name="title"]:checked')){

           alert("Please select a Title");

        return false;
    }
    
    



    
    if(first_Name.value == ""){
            
            document.getElementById("fname").style.color = "red";
            document.getElementById("fname").innerHTML = "Please enter a first name";

    
   
        
        return false;
    }

    if(lname.value == ""){
       
        document.getElementById("lname").style.color = "red";
        document.getElementById("lname").innerHTML = "Please enter a last name";
        
        return false;
    }

    if(email.value == ""){
       
        document.getElementById("email").style.color = "red";
        document.getElementById("email").innerHTML = "Please enter an email-id";
        
        return false;
    }

    if(!email_regex.test(email.value)){

        document.getElementById("email").style.color = "red";
        document.getElementById("email").innerHTML = "Please enter a valid email-id";



    
        return false;

    }

    if(phone.value == ""){
       
        document.getElementById("phone").style.color = "red";
        document.getElementById("phone").innerHTML = "Please enter a phone number";
        
        return false;
    }

    if(!phone_regex.test(phone.value)){

        document.getElementById("phone").style.color = "red";
        document.getElementById("phone").innerHTML = "Please enter a valid phone number";



    
        return false;

    }

   if(zip_code.value == "")
    {
       
        document.getElementById("zip_code").style.color = "red";
        document.getElementById("zip_code").innerHTML = "Please enter the zip-code";
        
        return false;
    }

    if(!zip_regex.test(zip_code.value))
    {

        document.getElementById("zip_code").style.color = "red";
        document.getElementById("zip_code").innerHTML = "Please enter a valid zip-code";



    
        return false;

    }
    var checkbox = document.getElementsByName("source");
    if(!(checkbox[0].checked || checkbox[1].checked || checkbox[2].checked)){

        document.getElementById("error").style.color = "red";
        document.getElementById("error").innerHTML = "Please check atleast one checkbox";
        return false;
    }
    if(area.value == "none"){

        document.getElementById("area-error").style.color = "red";
        document.getElementById("area-error").innerHTML = "Please select an area from the list";
        return false;

    }

    if(document.getElementById("text-box-show-hide").style.display == "block"){
        if(addr.value == ""){
            document.getElementById("street").style.color = "red";
            document.getElementById("street").innerHTML = "Please enter the Street address";
            return false;
        }
    }


    if(comments.value.length == 0)
    {
      // alert("hey");
        document.getElementById("comment-error").style.color = "red";
        document.getElementById("comment-error").innerHTML = "Please write comments";
        
        return false;
    }
    
    

    
   
    

    
    

    
    else{
        
       
        return true;
    }


}






function show_checkbox(element)
 {
    //var select_elmnt = document.getElementById("vehicle_owned");
    var showhide_div = document.getElementById("show-hide");
    var checkbox = document.getElementsByName("utilities");
    /*var checkbox_1 = document.getElementById("heat");
    var checkbox_2 = document.getElementById("wifi");
    var checkbox_3 = document.getElementById("microwave");*/
    

    if(element.value=="none")
    {
        
        showhide_div.style.display = "none";
        
        document.getElementById("text-box-show-hide").style.display = "none";
        for(i=0;i<checkbox.length;i++){
            checkbox[i].checked = false;
        }
        /*checkbox_1.checked = false;
        checkbox_2.checked = false;
        checkbox_3.checked = false;*/
        
        
        

    }
    else{

        showhide_div.style.display = "block";
        for(i=0;i<checkbox.length;i++){
            checkbox[i].checked = false;
        }
        /*checkbox_1.checked = false;
        checkbox_2.checked = false;
        checkbox_3.checked = false;*/
        show_textbox();
        

    }
   


    
   
      
}


    
   
    

function show_textbox()
{
    //alert(checkbox);
    
    var showhide_div = document.getElementById("text-box-show-hide");

    var items=document.getElementsByName('utilities');
	var selectedItems="";
		for(var i=0; i<items.length; i++){
			if(items[i].type=='checkbox' && items[i].checked==true){
                selectedItems+=items[i].value+",";
            }
            
        
		}

    window.localStorage.setItem('facilities',selectedItems);
    

    var checkboxes = document.querySelector('input[name="utilities"]:checked');
  
        
        
        if(checkboxes)
        {
            //alert("inside if");
            
           showhide_div.style.display = "block";


        }
       
        else {
            showhide_div.style.display = "none";
        }
}