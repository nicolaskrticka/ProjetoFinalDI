// Login 
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
// Botão Ver
document.getElementById("ver").addEventListener("click", function () {
  var campo = document.getElementById("senha");
  campo.type = campo.type === "password" ? "text" : "password";
});
