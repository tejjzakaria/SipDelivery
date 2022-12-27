
var username;

function signup(){

    username = document.getElementById('username').value;

    var email = document.getElementById('email').value;
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var phone_number = document.getElementById('phone_number').value;
    var password = document.getElementById('password').value;
    var repeat_password = document.getElementById('repeat_password').value;

    
    if(email===""){
        document.getElementById('error_empty').innerHTML="Email should not be empty";
    }
    else if(first_name===""){
        document.getElementById('error_empty').innerHTML="First Name should not be empty";
    }
    else if(last_name===""){
        document.getElementById('error_empty').innerHTML="Last Name should not be empty";
    }
    else if(phone_number===""){
        document.getElementById('error_empty').innerHTML="Phone Number should not be empty";
    }
    else if(username===""){
        document.getElementById('error_empty').innerHTML="Username should not be empty";
    }
    else if(password===""){
        document.getElementById('error_empty').innerHTML="Password should not be empty";
    }
    else if(repeat_password===""){
        document.getElementById('error_empty').innerHTML="Repeat Password should not be empty";
    }

    else if(password!=repeat_password){
        document.getElementById('error_empty').innerHTML="Password does not match";
    }
    else if(email==="" || first_name==="" || last_name==="" || phone_number==="" || username==="" || password==="" || repeat_password===""){
        document.getElementById('error_empty').innerHTML="Fields empty";
    }
    else{
        
        document.getElementById('success').innerHTML="Sign Up Successful, Please Log In";
        document.getElementById('error_empty').innerHTML="";
    }
    
    console.log(username);
    
}
