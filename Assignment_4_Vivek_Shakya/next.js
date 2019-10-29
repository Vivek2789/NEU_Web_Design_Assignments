function form_data(){
    
    document.getElementById("first-name").innerHTML = window.localStorage.getItem('first_name');
    document.getElementById("last-name").innerHTML=window.localStorage.getItem('last_name');
    document.getElementById("email-id").innerHTML=window.localStorage.getItem('email');
    document.getElementById("phone_number").innerHTML=window.localStorage.getItem('phone');
    document.getElementById("zip-code").innerHTML=window.localStorage.getItem('zipcode');




}