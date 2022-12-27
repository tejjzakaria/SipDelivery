





function login(){

    var username_sign_in=document.getElementById('username_sign_in').value;
    var password_sign_in=document.getElementById('password_sign_in').value;

    if(username_sign_in==="" && password_sign_in ===""){
        document.getElementById('error_empty').innerHTML="Username & Password should not be empty";
    }

    else if(username_sign_in===""){
        document.getElementById('error_empty').innerHTML="Username should not be empty";
    }
    else if(password_sign_in ===""){
        document.getElementById('error_empty').innerHTML="Password should not be empty";
    }
    
    else if(username_sign_in==="tejjzakaria" && password_sign_in==="sr9g1c5e"){
        window.location.href='HTML/dashboard.html';
    }
    else{
        document.getElementById('error_empty').innerHTML="Username or Password is incorrect";
    }
}

