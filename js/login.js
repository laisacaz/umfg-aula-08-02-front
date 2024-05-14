var body = document.querySelector("body");
var singUpButton = document.querySelector("#singUp");
var singInButton = document.querySelector("#singIn");
var userName = document.querySelector("#name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmedPassword = document.querySelector("#confirmedPassword");

body.onload = function(){
    body.className = "on-load";
}

singUpButton.addEventListener("click", function(){
    body.className = "sing-up"
    signUp("signup")
});

singInButton.addEventListener("click", function(){
    body.className = "sing-in"
    signUp("signin")
});

function signUp(rota) {
    
    var dados = {
        email: email.value,
        password: password.value, 
        confirmedPassword: confirmedPassword.value 
    };  
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'            
        },
        body: JSON.stringify(dados) 
    };

    fetch( "https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/" + rota, options)
    .then(function(response) {
      
        if (response.ok) {
            console.log("Requisição bem-sucedida!");
        } else {
            console.log("Erro na requisição:", response.statusText);
        }
    })
    .catch(function(error) {
        console.log("Erro de rede:", error);
    });
}

function signIn(rota){
    var dados = {
        email: email.value,
        password: password.value, 
    };  
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'            
        },
        body: JSON.stringify(dados) 
    };

    fetch( "https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/" + rota, options)
    .then(function(response) {
      
        if (response.ok) {
            console.log("Requisição bem-sucedida!");
        } else {
            console.log("Erro na requisição:", response.statusText);
        }
    })
    .catch(function(error) {
        console.log("Erro de rede:", error);
    });
}