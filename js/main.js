// 1) Proteção: sem login volta para a tela de login
if (sessionStorage.getItem("logado") !== "sim") window.location.href = "login.html";
document.getElementById("btnSair").onclick = function () {
  sessionStorage.removeItem("logado");
  window.location.href = "login.html";
};

// 2) Acessibilidade (tema, fonte, contraste). A escolha fica salva no localStorage.
var html = document.documentElement;
var tema = localStorage.getItem("tema") || "light";
var fonte = Number(localStorage.getItem("fonte")) || 100;
var contraste = localStorage.getItem("contraste") === "sim";
function aplicar() {
  html.setAttribute("data-bs-theme", tema);
  html.style.fontSize = fonte + "%";
  document.body.classList.toggle("alto-contraste", contraste);
  document.getElementById("btnTema").textContent = tema === "dark" ? "☀️ Modo claro" : "🌙 Modo escuro";
  localStorage.setItem("tema", tema);
  localStorage.setItem("fonte", fonte);
  localStorage.setItem("contraste", contraste ? "sim" : "nao");
}
document.getElementById("btnTema").onclick = function () { tema = tema === "dark" ? "light" : "dark"; aplicar(); };
document.getElementById("btnMais").onclick = function () { if (fonte < 140) fonte += 10; aplicar(); };
document.getElementById("btnMenos").onclick = function () { if (fonte > 80) fonte -= 10; aplicar(); };
document.getElementById("btnContraste").onclick = function () { contraste = !contraste; aplicar(); };
document.getElementById("btnReset").onclick = function () { tema = "light"; fonte = 100; contraste = false; aplicar(); };
aplicar();

// 3) Cartões: mostra os itens de dados.js conforme a aba e o texto digitado
var categoria = "Todos";
function mostrar() {
  var termo = document.getElementById("busca").value.toLowerCase();
  var saida = "", total = 0;
  for (var i = 0; i < conteudos.length; i++) {
    var c = conteudos[i];
    var texto = (c.t + " " + c.txt + " " + c.ex).toLowerCase();
    if ((categoria === "Todos" || c.cat === categoria) && texto.indexOf(termo) !== -1) {
      total++;
      saida += '<div class="col-md-6 col-lg-4"><div class="card cartao h-100"><div class="card-body">' +
        '<div class="d-flex justify-content-between"><span class="emoji" aria-hidden="true">' + c.ic + '</span><span class="etq ' + c.cat + '">' + c.cat + '</span></div>' +
        '<h3 class="h5 mt-2">' + c.t + '</h3><p>' + c.txt + '</p><p class="small fw-bold mb-0">' + c.ex + '</p></div></div></div>';
    }
  }
  document.getElementById("cartoes").innerHTML = saida;
  document.getElementById("contagem").textContent = total ? total + " conceito(s) encontrado(s)" : "Nenhum resultado. Tente outro termo.";
}
document.getElementById("busca").addEventListener("input", mostrar);
var botoes = document.querySelectorAll("#abas .nav-link");
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    for (var j = 0; j < botoes.length; j++) botoes[j].classList.remove("active");
    this.classList.add("active");
    categoria = this.dataset.cat;
    mostrar();
  });
}
mostrar();

// 4) Formulário de contato: confere os campos antes de "enviar"
document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();
  var nome = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var msg = document.getElementById("msg").value.trim();
  var retorno = document.getElementById("retorno");
  if (nome.length < 3 || email.indexOf("@") < 1 || msg.length < 10) {
    retorno.textContent = "Preencha nome (3+ letras), e-mail válido e mensagem (10+ caracteres).";
    retorno.className = "text-danger";
    return;
  }
  retorno.textContent = "Obrigado, " + nome + "! Mensagem recebida.";
  retorno.className = "text-success";
  e.target.reset();
});
