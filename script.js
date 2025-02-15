document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");
  
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";
  
    let isValid = true;
  
    if (!email) {
      emailError.textContent = "O campo e-mail é obrigatório.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.textContent = "Por favor, insira um e-mail válido.";
      isValid = false;
    }
  
    if (!password) {
      passwordError.textContent = "O campo senha é obrigatório.";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
      isValid = false;
    }
  
    if (isValid) {
      successMessage.textContent = "Login realizado com sucesso!";
    }
  });  
