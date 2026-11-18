// Login simulado (sem servidor): compara com um usuário fixo.
document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();                                   // impede o recarregamento da página
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  if (usuario === "aluno" && senha === "redes123") {
    sessionStorage.setItem("logado", "sim");            // guarda que o usuário entrou
    window.location.href = "index.html";
  } else {
    document.getElementById("erro").textContent = "Usuário ou senha incorretos.";
  }
});
