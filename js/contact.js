const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  
  if(!name || !email || !message){
    formMessage.textContent = "Preencha todos os campos.";
    return;
  }
  
  if(!email.includes("@")){
    formMessage.textContent = "Digite um e-mail válido.";
    return;
  }
  
  formMessage.textContent = "Mensagem enviada com sucesso!";
  form.reset();

});