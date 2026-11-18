// 1) Proteção: sem login, volta para a tela de login
if (sessionStorage.getItem("logado") !== "sim") window.location.href = "login.html";

// 2) Modo claro/escuro: o Bootstrap troca as cores pelo atributo data-bs-theme
var html = document.documentElement;
var btnTema = document.getElementById("btnTema");
function aplicarTema(t) {
  html.setAttribute("data-bs-theme", t);
  btnTema.textContent = t === "dark" ? "Modo claro" : "Modo escuro";
  localStorage.setItem("tema", t);                      // lembra a escolha
}
aplicarTema(localStorage.getItem("tema") || "light");
btnTema.addEventListener("click", function () {
  aplicarTema(html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark");
});

// 3) Sair
document.getElementById("btnSair").addEventListener("click", function () {
  sessionStorage.removeItem("logado");
  window.location.href = "login.html";
});

// 4) Formulário de contato (só mostra um aviso, não envia a lugar nenhum)
document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Obrigado, " + document.getElementById("nome").value + "! Mensagem recebida.");
  e.target.reset();
});
