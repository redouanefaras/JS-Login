var database = [];

// signup elements
var signupName = document.getElementById("signup-user-name");
var signupPassword = document.getElementById("signup-password");
var signupBtn = document.getElementById("signup-btn");

// login elements
var loginName = document.getElementById("login-user-name");
var loginpassword = document.getElementById("login-password");
var loginBtn = document.getElementById("login-btn");

function signup(){
var userInfo = {
    userName : signupName.value,
    password : signupPassword.value
}
database.push(userInfo);
alert("Hello " + userInfo.userName + " You Have Been Registred");
}

function login(){
    var userInfo = {
        userName : loginName.value,
        password : loginpassword.value
    };

    var isLimit = false;
for (var i=0; i<database.length; i++){

    if (i === database.length-1){ isLimit = true;}

    if (database[i].userName === userInfo.userName){ 
       if(database[i].password === userInfo.password){
           return alert ("Authentification Successfully");
       }else{ return alert ("Check your password");}

    }else if(isLimit === true) {
            alert("No he does not exist");
        }
}
}

signupBtn.addEventListener("click", signup)
loginBtn.addEventListener("click", login)
