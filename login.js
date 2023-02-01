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



// ---------- VALIDAÇÃO USUÁRIO -------------- //

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('span[for="email"]');
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
    emailHelper.innerText = "Usuário não encontrado";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false
  }
})




// ---------- VALIDAÇÃO SENHA -------------- //

let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('span[for="senha"]');
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

