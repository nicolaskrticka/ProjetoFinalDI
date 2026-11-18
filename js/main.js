//sem login, volta para a tela de login
if (sessionStorage.getItem("logado") !== "sim") window.location.href = "login.html";

//Modo claro/escuro
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

// botao de sair
document.getElementById("btnSair").addEventListener("click", function () {
  sessionStorage.removeItem("logado");
  window.location.href = "login.html";
});

//contato ( não envia a lugar nenhum)
document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Obrigado, " + document.getElementById("nome").value + "! Mensagem recebida.");
  e.target.reset();
});
