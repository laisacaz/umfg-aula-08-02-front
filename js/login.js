var body = document.querySelector("body");
// var signUpButton = document.querySelector("#signUp");
var registerButton = document.querySelector("#register");
var singInButton = document.querySelector("#signIn");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmedPassword = document.querySelector("#confirmedPassword");

body.onload = function(){
    body.className = "on-load";
}

// signUpButton.addEventListener("click", function(){
//     body.className = "sing-up"
// });


// singInButton.addEventListener("click", function(){
    //     body.className = "sing-in"
    //    // signIn("signin")
    // });
    
registerButton.addEventListener("click", function(){
    var confirmedPasswordValue = confirmedPassword.value;
    var emailValue = email.value;
    var passwordValue = password.value;

    console.log(confirmedPasswordValue, emailValue, passwordValue);

    fetch("https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signup",
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            "email": emailValue,
            "password": passwordValue,
            "confirmedPassword": confirmedPasswordValue
          }),
    })
    .then(response => {
        if(response.status == 200){
            alert('Sucesso no cadastro')           
          }else{
            alert('Erro no cadastro')
          }
        })         
    .catch(error => {console.log(error)})
})

// function signIn(rota){
//     var dados = {
//         email: email.value,
//         password: password.value, 
//     };  
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'            
//         },
//         body: JSON.stringify(dados) 
//     };

//     fetch( "https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/" + rota, options)
//     .then(function(response) {
      
//         if (response.ok) {
//             console.log("Requisição bem-sucedida!");
//         } else {
//             console.log("Erro na requisição:", response.statusText);
//         }
//     })
//     .catch(function(error) {
//         console.log("Erro de rede:", error);
//     });
// }