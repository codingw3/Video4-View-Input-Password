const btnViewPassword = document.getElementById("btn-view-password");
const inputPassword = document.getElementById("input-password");

btnViewPassword.addEventListener("click", function () {
  if (inputPassword.type == "text") {
    inputPassword.type = "password";
    btnViewPassword.innerHTML = "<i class='fa-solid fa-eye'></i>";
  } else {
    inputPassword.type = "text";
    btnViewPassword.innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
  }
});
