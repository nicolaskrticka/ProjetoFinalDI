// Login simulado (igual à v1): compara com um usuário fixo e guarda no sessionStorage.
document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();
  var usuario = document.getElementById("usuario").value.trim();
  var senha = document.getElementById("senha").value;
  if (usuario === "aluno" && senha === "redes123") {
    sessionStorage.setItem("logado", "sim");
    window.location.href = "index.html";
  } else {
    document.getElementById("erro").textContent = "Usuário ou senha incorretos.";
  }
});
// Botão "Ver": alterna o tipo do campo entre password e text
document.getElementById("ver").addEventListener("click", function () {
  var campo = document.getElementById("senha");
  campo.type = campo.type === "password" ? "text" : "password";
});
