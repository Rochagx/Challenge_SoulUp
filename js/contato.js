
const form = document.getElementById("contact-form");

if (form) {
  const feedback = document.getElementById("form-feedback");

  // mostra mensagem de erro num campo
  function mostrarErro(campo, mensagem) {
    const grupo = campo.parentElement;
    grupo.classList.add("temErro");
    const msg = grupo.querySelector(".mensagemErro");
    if (msg) {
      msg.textContent = mensagem;
    }
  }

  // limpa o erro de um campo
  function limparErro(campo) {
    const grupo = campo.parentElement;
    grupo.classList.remove("temErro");
  }

  // Validacao em tempo real 
  const nome = document.getElementById("name");
  const email = document.getElementById("email");
  const assunto = document.getElementById("subject");
  const mensagem = document.getElementById("message");

  if (nome) {
    nome.addEventListener("input", function () {
      if (nome.value.trim().length >= 3) {
        limparErro(nome);
      }
    });
  }

  if (email) {
    email.addEventListener("input", function () {
      const texto = email.value.trim();
 
      if (texto.indexOf("@") > 0 && texto.indexOf(".") > 0) {
        limparErro(email);
      }
    });
  }

  if (mensagem) {
    mensagem.addEventListener("input", function () {
      if (mensagem.value.trim().length >= 10) {
        limparErro(mensagem);
      }
    });
  }

  // Envio do formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    feedback.className = "form-feedback";
    feedback.textContent = "";

    let temErro = false;

    // Valida nome
    if (nome.value.trim().length < 3) {
      mostrarErro(nome, "Informe seu nome completo (minimo 3 caracteres).");
      temErro = true;
    }

    // Valida email
    const textoEmail = email.value.trim();
    if (textoEmail.length === 0 || textoEmail.indexOf("@") < 1 || textoEmail.indexOf(".") < 0) {
      mostrarErro(email, "Informe um e-mail valido.");
      temErro = true;
    }

    // Valida assunto
    if (assunto.value.trim().length === 0) {
      mostrarErro(assunto, "Selecione um assunto.");
      temErro = true;
    }

    // Valida mensagem
    if (mensagem.value.trim().length < 10) {
      mostrarErro(mensagem, "A mensagem precisa ter pelo menos 10 caracteres.");
      temErro = true;
    }

    if (temErro === true) {
      feedback.classList.add("estaErro");
      feedback.textContent = "Por favor, corrija os campos destacados antes de enviar.";
      return;
    }

    // Simula envio com sucesso
    feedback.classList.add("estaSucesso");
    feedback.textContent = "Mensagem enviada com sucesso! A equipe SoulUp respondera em breve.";
    form.reset();
  });
}
