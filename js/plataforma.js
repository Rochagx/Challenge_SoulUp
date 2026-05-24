
const itens = document.querySelectorAll(".acaoItem");
const valorScore = document.getElementById("score-value");
const barraScore = document.getElementById("score-fill");
const tierScore = document.getElementById("score-tier");
const botaoReset = document.getElementById("reset-score");


// Define o nivel baseado na pontuacao
function obterTier(pontos) {
  if (pontos >= 80) {
    return { nome: "Eco Champion", cor: "#f6c244" };
  } else if (pontos >= 60) {
    return { nome: "Eco Hero", cor: "#5cbdb9" };
  } else if (pontos >= 40) {
    return { nome: "Eco Ativo", cor: "#2d8a9e" };
  } else if (pontos >= 20) {
    return { nome: "Iniciante", cor: "#1a4a6e" };
  } else {
    return { nome: "Inativo", cor: "#5a6c7d" };
  }
}


function recalcular() {
  let total = 0;

  for (let i = 0; i < itens.length; i++) {
    if (itens[i].classList.contains("estaAtivo")) {
      const pontos = parseInt(itens[i].dataset.points);
      total = total + pontos;
    }
  }

  if (total > 100) {
    total = 100;
  }

  valorScore.textContent = total;
  barraScore.style.width = total + "%";

  const tier = obterTier(total);
  tierScore.textContent = tier.nome;
  tierScore.style.color = tier.cor;
}


if (itens.length > 0 && valorScore) {
  for (let i = 0; i < itens.length; i++) {
    itens[i].addEventListener("click", function () {
      itens[i].classList.toggle("estaAtivo");
      recalcular();
    });
  }

  if (botaoReset) {
    botaoReset.addEventListener("click", function () {
      for (let i = 0; i < itens.length; i++) {
        itens[i].classList.remove("estaAtivo");
      }
      recalcular();
    });
  }

  recalcular();
}
