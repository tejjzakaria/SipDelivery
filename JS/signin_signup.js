
// Sign Up



function signup(){


    var email = document.getElementById('email').value;
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var phone_number = document.getElementById('phone_number').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var repeat_password = document.getElementById('repeat_password').value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));


    if (email === "" || first_name === "" || last_name === "" || phone_number === "" || username === "" || password === "" || repeat_password === ""){
        document.getElementById('error_empty').innerHTML = "Fields are empty";
    }
    else if(email === ""){
        document.getElementById('error_empty').innerHTML = "Email cannot be empty";
    }
    else if(first_name === ""){
        document.getElementById('error_empty').innerHTML = "First Name cannot be empty";
    }
    else if(last_name === ""){
        document.getElementById('error_empty').innerHTML = "Last Name cannot be empty";
    }
    else if(phone_number === ""){
        document.getElementById('error_empty').innerHTML = "Phone Number cannot be empty";
    }
    else if(username === ""){
        document.getElementById('error_empty').innerHTML = "Username cannot be empty";
    }
    else if(password === ""){
        document.getElementById('error_empty').innerHTML = "Password cannot be empty";
    }
    else if(repeat_password === ""){
        document.getElementById('error_empty').innerHTML = "You have to repeat password";
    }
    else if(password!==repeat_password){
        document.getElementById('error_empty').innerHTML = "Passwords do not match";
    }
    
    else { 
        

        document.getElementById('error_empty').innerHTML = "";
        document.getElementById('success').innerHTML = "Sign Up Successful";

        td1.innerHTML = email;
        td2.innerHTML = first_name;
        td3.innerHTML = last_name;
        td4.innerHTML = phone_number;
        td5.innerHTML = username;
        td6.innerHTML = password;

        document.getElementById('tb1').appendChild(tr);
        
    }

    
    
}


/*
let btn = document.getElementById('sign_up');
let table = document.querySelector('table');

let email = document.getElementById('email');
let first_name = document.getElementById('first_name');
let last_name = document.getElementById('last_name');
let phone_number = document.getElementById('phone_number');
let username = document.getElementById('username');
let password = document.getElementById('password');
let repeat_password = document.getElementById('repeat_password');

btn.addEventListener('click', () => {
    let table_email = email.value;
    let table_fname = first_name.value;
    let table_lname = last_name.value;
    let table_pnumber = phone_number;
    let table_username = username.value;
    let table_password = password.value;

    let template = `
        <tr>
            <td>${table_email}</td>
            <td>${table_fname}</td>
            <td>${table_lname}</td>
            <td>${table_pnumber}</td>
            <td>${table_username}</td>
            <td>${table_password}</td>
        </tr>
    `;

    table.innerHTML += template; 
})
*/