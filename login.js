const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});

document.getElementById("btn-ingresa").addEventListener("click", function () {
  // Obtener el valor ingresado por el usuario para el correo electrónico
  var email = document.querySelector('.input[type="email"]').value;
  var recordar = document.getElementById("recordarMail").checked;

  // Guardar el correo electrónico del usuario en localStorage si se ha marcado la casilla 'recordar'
  if (recordar) {
    localStorage.setItem("email", email);
    localStorage.setItem("recordar", recordar);
  } else {
    // Limpiar los datos del correo electrónico si la casilla 'recordar' no está marcada
    localStorage.removeItem("email");
    localStorage.removeItem("recordar");
  }

  // Redireccionar al usuario a index.html
  window.location.href = "index.html";
});

// Comprobar si hay datos guardados en localStorage al cargar la página
window.addEventListener("load", function () {
  var email = localStorage.getItem("email");
  var recordar = localStorage.getItem("recordar");

  if (email && recordar === "true") {
    // Restaurar el valor del correo electrónico en el formulario si se ha guardado previamente
    document.querySelector('.input[type="email"]').value = email;
    document.getElementById("recordarMail").checked = true;
  }
});

document.getElementById("btn-ingresa").addEventListener("click", function () {
  // Redireccionar al usuario a login.html
  window.location.href = "index.html";
});
