
// ---------- 1. MENU MOBILE  ----------
const navToggle = document.querySelector(".navegacaoBotao");
const navLinks = document.querySelector(".navegacaoLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("estaAberto");
    navToggle.classList.toggle("estaAberto");
  });

  // Fecha o menu ao clicar em qualquer link
  const linksMenu = navLinks.querySelectorAll("a");
  for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener("click", function () {
      navLinks.classList.remove("estaAberto");
      navToggle.classList.remove("estaAberto");
    });
  }
}

let paginaAtual = window.location.pathname.split("/").pop();
if (paginaAtual === "") {
  paginaAtual = "index.html";
}

const todosLinks = document.querySelectorAll(".navegacaoLinks a");
for (let i = 0; i < todosLinks.length; i++) {
  if (todosLinks[i].getAttribute("href") === paginaAtual) {
    todosLinks[i].classList.add("ativo");
  }
}


// ---------- FAQ ACCORDION ----------
const perguntas = document.querySelectorAll(".faqPergunta");
for (let i = 0; i < perguntas.length; i++) {
  perguntas[i].addEventListener("click", function () {
    const item = perguntas[i].parentElement;
    const estavaAberto = item.classList.contains("estaAberto");

    // Fecha todos os itens
    const todosItens = document.querySelectorAll(".faqItem");
    for (let j = 0; j < todosItens.length; j++) {
      todosItens[j].classList.remove("estaAberto");
    }

    // Abre o que foi clicado 
    if (estavaAberto === false) {
      item.classList.add("estaAberto");
    }
  });
}


// ---------- TABS ----------
const todasTabs = document.querySelectorAll(".abas");
for (let i = 0; i < todasTabs.length; i++) {
  const tabsEl = todasTabs[i];
  const botoes = tabsEl.querySelectorAll(".abaBotao");

  for (let j = 0; j < botoes.length; j++) {
    botoes[j].addEventListener("click", function () {
      const alvo = botoes[j].dataset.tab;
      const container = tabsEl.parentElement;

      const botoesContainer = container.querySelectorAll(".abaBotao");
      for (let k = 0; k < botoesContainer.length; k++) {
        botoesContainer[k].classList.remove("estaAtivo");
      }
      const paineis = container.querySelectorAll(".abaPainel");
      for (let k = 0; k < paineis.length; k++) {
        paineis[k].classList.remove("estaAtivo");
      }

      botoes[j].classList.add("estaAtivo");
      const painel = container.querySelector('.abaPainel[data-tab="' + alvo + '"]');
      if (painel) {
        painel.classList.add("estaAtivo");
      }
    });
  }
}


// ----------  MODAL ----------
const botoesAbrirModal = document.querySelectorAll("[data-modal-open]");
for (let i = 0; i < botoesAbrirModal.length; i++) {
  botoesAbrirModal[i].addEventListener("click", function () {
    const id = botoesAbrirModal[i].dataset.modalOpen;
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add("estaAberto");
    }
  });
}

const fundosModal = document.querySelectorAll(".modalFundo");
for (let i = 0; i < fundosModal.length; i++) {
  fundosModal[i].addEventListener("click", function (e) {
    if (e.target === fundosModal[i] || e.target.classList.contains("modalFechar")) {
      fundosModal[i].classList.remove("estaAberto");
    }
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    const modaisAbertos = document.querySelectorAll(".modalFundo.estaAberto");
    for (let i = 0; i < modaisAbertos.length; i++) {
      modaisAbertos[i].classList.remove("estaAberto");
    }
  }
});


// ----------  ANIMACAO DE ENTRADA  ----------
window.addEventListener("load", function () {
  const elementos = document.querySelectorAll("[data-animate]");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].classList.add("aparecerCima");
  }
});


// ----------  ANO DINAMICO NO RODAPE ----------
const ano = document.getElementById("current-year");
if (ano) {
  const data = new Date();
  ano.textContent = data.getFullYear();
}
