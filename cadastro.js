// ---------- FUNÇÕES GERAIS -------------- //

function togglePopup(input, label) {
    // Mostrar popup
    input.addEventListener("focus", () => {
        label.classList.add("required-popup")
    });

    // Ocultar popup
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}



function estilizarInputCorreto(input, helper){
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}



// ---------- VALIDAÇÃO NOME -------------- //

let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel)

// Validar Input
nomeInput.addEventListener("change", (e)=> {
    let valor = e.target.value

    if(valor.length < 2){
        // Add estilo dinamico INcorreto
        nomeHelper.innerText = "Seu Nome precisa ter 2 ou mais caracteres";
        estilizarInputIncorreto(nomeInput, nomeHelper)
        inputsCorretos.nome = false        
    }else{
        // Add estilo CORRETO
        estilizarInputCorreto(nomeInput, nomeHelper);
        inputsCorretos.nome = true
    }
})


// ---------- VALIDAÇÃO SOBRENOME -------------- //

let sobrenomeInput = document.getElementById("sobrenome");
let sobrenomeLabel = document.querySelector('label[for="sobrenome"]');
let sobrenomeHelper = document.getElementById("sobrenome-helper");

togglePopup(sobrenomeInput, sobrenomeLabel)

// Validar Input
sobrenomeInput.addEventListener("change", (e)=> {
    let valor = e.target.value

    if(valor.length < 2){
        // Add estilo dinamico INcorreto
        sobrenomeHelper.innerText = "Seu Sobrenome precisa ter 2 ou mais caracteres";
        estilizarInputIncorreto(sobrenomeInput, sobrenomeHelper)
        inputsCorretos.sobrenome = false        
    }else{
        // Add estilo CORRETO
        estilizarInputCorreto(sobrenomeInput, sobrenomeHelper);
        inputsCorretos.sobrenome = true
    }
})


// ---------- VALIDAÇÃO EMAIL -------------- //

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false
  }
})




// ---------- VALIDAÇÃO SENHA -------------- //

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput, senhaLabel)

senhaInput.addEventListener("blur", (e)=>{
    
    let valor = e.target.value
    
    if(valor.length == 0){        
      senhaHelper.innerText = "Precisa inserir uma senha"
      estilizarInputIncorreto(senhaInput, senhaHelper)
      inputsCorretos.senha = false

    }else{  
      estilizarInputCorreto(senhaInput, senhaHelper)
      inputsCorretos.senha = true
    }
})


// ---------- VALIDAÇÃO CONFIRMAR SENHA -------------- //

let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

togglePopup(confirmaSenhaInput, confirmaSenhaLabel)

confirmaSenhaInput.addEventListener("blur", (e)=>{
    
    let valor = e.target.value
    
    if(valor == senhaInput.value){

      estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
      inputsCorretos.confirmaSenha = true

    }else{  
      confirmaSenhaHelper.innerText = "Senha não confere"
      estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
      inputsCorretos.confirmaSenha = false
    }
})





// // --------------- EVITAR ENVIO DO FORMULÁRIO -------------------- //

// let btnEnviar = document.querySelector("div > button")
// let btnEnviar = document.getElementsByClassName("input-box")

// let inputsCorretos = {
//     nome: false,
//     sobrenome: false,
//     email: false,
//     senha : false,
//     confirmaSenha: false
// }


// btnEnviar.addEventListener("click", (e)=>{
//   if(
//     inputsCorretos.nome == false ||
//     inputsCorretos.sobrenome == false ||
//     inputsCorretos.email == false ||
//     inputsCorretos.senha == false ||
//     inputsCorretos.confirma-senha == false
//   ){
//     // Qualquer um dos campos tiver informação errada, não enviar 
//     e.preventDefault()
//     alert("Precisa preencher todas as informações obrigatórias de forma correta")
    
//   }else{
//     // Enviar formulário
//     alert("Formulário enviado com sucesso")
//   }

// })























