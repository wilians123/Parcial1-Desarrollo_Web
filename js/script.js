$(document).ready(function () {
  $("#btnBienvenida").click(function () {
    alert("¡Bienvenido a mi perfil, Willians Heriberto Navas Reyes!");
  });

  $("#btnColorFondo").click(function () {
    let color = prompt("Ingrese el color de fondo (ejemplo: #e9f2fb)");
    if (color) {
      $("body").css("background-color", color);
      localStorage.setItem("colorFondo", color);
    }
  });

  if (localStorage.getItem("colorFondo")) {
    $("body").css("background-color", localStorage.getItem("colorFondo"));
  }

  $("#agregarHabilidad").click(function (e) {
    e.preventDefault();
    let nueva = $("#nuevaHabilidad").val().trim();
    if (nueva) {
      let listaObjetivo = $("h3.card-title")
        .filter(function () {
          return $(this).text().trim() === "Principales";
        })
        .closest(".card-body")
        .find("ul.list-group");

      listaObjetivo.append('<li class="list-group-item">' + nueva + "</li>");
      $("#nuevaHabilidad").val("");
    }
  });
  $("form").submit(function (e) {
    e.preventDefault();
    let nombre = $("#nombre").val().trim();
    let correo = $("#correo").val().trim();
    let mensaje = $("#mensaje").val().trim();

    if (!nombre || !correo || !mensaje) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("correo", correo);
    localStorage.setItem("mensaje", mensaje);
    alert("Formulario enviado correctamente.");
    $(this).trigger("reset");
  });

  if (localStorage.getItem("nombre"))
    $("#nombre").val(localStorage.getItem("nombre"));
  if (localStorage.getItem("correo"))
    $("#correo").val(localStorage.getItem("correo"));
  if (localStorage.getItem("mensaje"))
    $("#mensaje").val(localStorage.getItem("mensaje"));

  $("#btnCambiarParrafo").click(function () {
    $("#parrafoCambiar").text("¡El contenido del párrafo ha sido actualizado!");
  });
});
