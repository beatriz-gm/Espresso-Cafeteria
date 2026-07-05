// definindo constantes a partir do id do elemento
const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

// evento disparado ao clicar em enviar o formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
// definindo constantes a partir do id do elemento
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  
  // validando se todos os campos foram preenchidos
  if(!name || !email || !message){
    formMessage.textContent = "Preencha todos os campos.";
    return;
  }
  
  // validando endereço de email
  if(!email.includes("@")){
    formMessage.textContent = "Digite um e-mail válido.";
    return;
  }
  
  // mensagem de sucesso ao enviar e reseta o formulário
  formMessage.textContent = "Mensagem enviada com sucesso!";
  form.reset();

});