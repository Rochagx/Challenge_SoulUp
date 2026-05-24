

const tbody = document.getElementById("ranking-tbody");
const campoBusca = document.getElementById("ranking-search");


// Dados simulados 
const dados = {
  semanal: [
    { nome: "Marina Costa",    cidade: "Sao Paulo, SP",        pontos: 96 },
    { nome: "Lucas Almeida",   cidade: "Recife, PE",           pontos: 91 },
    { nome: "Beatriz Lima",    cidade: "Curitiba, PR",         pontos: 87 },
    { nome: "Rafael Souza",    cidade: "Salvador, BA",         pontos: 82 },
    { nome: "Helena Pires",    cidade: "Porto Alegre, RS",     pontos: 78 },
    { nome: "Diego Martins",   cidade: "Belo Horizonte, MG",   pontos: 74 },
    { nome: "Camila Rocha",    cidade: "Fortaleza, CE",        pontos: 69 },
    { nome: "Pedro Henrique",  cidade: "Manaus, AM",           pontos: 62 }
  ],
  mensal: [
    { nome: "Beatriz Lima",    cidade: "Curitiba, PR",         pontos: 98 },
    { nome: "Marina Costa",    cidade: "Sao Paulo, SP",        pontos: 95 },
    { nome: "Diego Martins",   cidade: "Belo Horizonte, MG",   pontos: 90 },
    { nome: "Rafael Souza",    cidade: "Salvador, BA",         pontos: 86 },
    { nome: "Lucas Almeida",   cidade: "Recife, PE",           pontos: 81 },
    { nome: "Helena Pires",    cidade: "Porto Alegre, RS",     pontos: 77 },
    { nome: "Pedro Henrique",  cidade: "Manaus, AM",           pontos: 71 },
    { nome: "Camila Rocha",    cidade: "Fortaleza, CE",        pontos: 65 }
  ],
  geral: [
    { nome: "Marina Costa",    cidade: "Sao Paulo, SP",        pontos: 99 },
    { nome: "Beatriz Lima",    cidade: "Curitiba, PR",         pontos: 97 },
    { nome: "Rafael Souza",    cidade: "Salvador, BA",         pontos: 94 },
    { nome: "Lucas Almeida",   cidade: "Recife, PE",           pontos: 92 },
    { nome: "Diego Martins",   cidade: "Belo Horizonte, MG",   pontos: 89 },
    { nome: "Helena Pires",    cidade: "Porto Alegre, RS",     pontos: 85 },
    { nome: "Camila Rocha",    cidade: "Fortaleza, CE",        pontos: 80 },
    { nome: "Pedro Henrique",  cidade: "Manaus, AM",           pontos: 76 }
  ]
};


let abaAtual = "semanal";
let buscaAtual = "";


// Define a classe da medalha 
function classeMedalha(posicao) {
  if (posicao === 1) return "gold";
  if (posicao === 2) return "silver";
  if (posicao === 3) return "bronze";
  return "";
}


// Ordena os usuarios pela pontuacao 
function ordenar(lista) {
  const copia = lista.slice();
  for (let i = 0; i < copia.length; i++) {
    for (let j = 0; j < copia.length - 1 - i; j++) {
      if (copia[j].pontos < copia[j + 1].pontos) {
        const aux = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = aux;
      }
    }
  }
  return copia;
}


// Renderiza a tabela
function renderizar() {
  const lista = dados[abaAtual];
  const busca = buscaAtual.toLowerCase();

  // Filtra pelo nome
  const filtrados = [];
  for (let i = 0; i < lista.length; i++) {
    const nome = lista[i].nome.toLowerCase();
    if (nome.indexOf(busca) !== -1) {
      filtrados.push(lista[i]);
    }
  }

  const ordenados = ordenar(filtrados);

  if (ordenados.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding:2rem; color:var(--color-text-muted);">Nenhum usuario encontrado.</td></tr>';
    return;
  }

  let html = "";
  for (let i = 0; i < ordenados.length; i++) {
    const u = ordenados[i];
    const pos = i + 1;
    const classe = classeMedalha(pos);

    html = html +
      "<tr>" +
        '<td class="rank-pos ' + classe + '">' + pos + "&ordm;</td>" +
        "<td><strong>" + u.nome + "</strong></td>" +
        "<td>" + u.cidade + "</td>" +
        '<td class="rank-score">' + u.pontos + "</td>" +
      "</tr>";
  }

  tbody.innerHTML = html;
}


if (tbody) {
  // Botoes de periodo 
  const botoesPeriodo = document.querySelectorAll(".abaBotao[data-period]");
  for (let i = 0; i < botoesPeriodo.length; i++) {
    botoesPeriodo[i].addEventListener("click", function () {
      for (let j = 0; j < botoesPeriodo.length; j++) {
        botoesPeriodo[j].classList.remove("estaAtivo");
      }
      botoesPeriodo[i].classList.add("estaAtivo");
      abaAtual = botoesPeriodo[i].dataset.period;
      renderizar();
    });
  }

  // Campo de busca
  if (campoBusca) {
    campoBusca.addEventListener("input", function () {
      buscaAtual = campoBusca.value;
      renderizar();
    });
  }

  renderizar();
}
