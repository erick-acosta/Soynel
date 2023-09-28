// Evento de envío del formulario
document.querySelector("form").addEventListener("submit", function(event) {
    // Validaciones
    var nombre = document.querySelector("input[name='nombre']").value;
    var apellido = document.querySelector("input[name='apellido']").value;
    var cedula = document.querySelector("input[name='cedula']").value;
    var fecha_nacimiento = document.querySelector("input[name='fecha_nacimiento']").value;
    var telefono = document.querySelector("input[name='telefono']").value;
    var email = document.querySelector("input[name='email']").value;
  
    // Nombre
    if (nombre === "") {
      alert("Ingrese su nombre");
      event.preventDefault();
      return;
    }
  
    // Apellido
    if (apellido === "") {
      alert("Ingrese su apellido");
      event.preventDefault();
      return;
    }
  
    // Cedula
    if (cedula === "") {
      alert("Ingrese su cédula");
      event.preventDefault();
      return;
    }
  
    // Fecha de nacimiento
    if (fecha_nacimiento === "") {
      alert("Ingrese su fecha de nacimiento");
      event.preventDefault();
      return;
    }
  
    // Teléfono
    if (telefono === "") {
      alert("Ingrese su teléfono");
      event.preventDefault();
      return;
    }
  
    // Email
    if (email === "") {
      alert("Ingrese su correo electrónico");
      event.preventDefault();
      return;
    }
  
    // Enviar datos
    // ...
  });

  // Mensaje de éxito
if (datosValidos) {
    alert("Los datos se enviaron correctamente");
  } else {
    alert("Hubo un error al enviar los datos");
  }