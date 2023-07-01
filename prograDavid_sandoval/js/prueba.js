// Datos de ejemplo
// Función para mostrar los registros de dueños
function showDueños() {
    // Realizar una petición AJAX para obtener los registros de dueños desde la base de datos
    // Aquí debes obtener los registros de los dueños y generar las filas de la tabla dinámicamente
    // Puedes utilizar la función createDueñoRow() para crear cada fila de la tabla
  }
  
  // Función para agregar un dueño
  function addDueño(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    var rut = document.getElementById("rutInput").value;
    var nombre = document.getElementById("nombreInput").value;
    var apellido = document.getElementById("apellidoInput").value;
    var edad = document.getElementById("edadInput").value;
    var correo = document.getElementById("correoInput").value;
  
    // Realizar una petición AJAX para agregar el dueño a la base de datos
    // Aquí debes enviar los valores del formulario al servidor y procesar el registro adecuadamente
    // Después de agregar el dueño, puedes llamar a la función showDueños() para actualizar la tabla
  }
  
  // Función para eliminar un dueño
  function deleteDueño(dueñoId) {
    // Realizar una petición AJAX para eliminar el dueño de la base de datos
    // Aquí debes enviar el ID del dueño al servidor y procesar la eliminación adecuadamente
    // Después de eliminar el dueño, puedes llamar a la función showDueños() para actualizar la tabla
  }
  
  // Función para mostrar los registros de motos
  function showMotos() {
    // Realizar una petición AJAX para obtener los registros de motos desde la base de datos
    // Aquí debes obtener los registros de las motos y generar las filas de la tabla dinámicamente
    // Puedes utilizar la función createMotoRow() para crear cada fila de la tabla
  }
  
  // Función para agregar una moto
  function addMoto(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    var year = document.getElementById("yearInput").value;
    var color = document.getElementById("colorInput").value;
    var marca = document.getElementById("marcaInput").value;
    var cilindrada = document.getElementById("cilindradaInput").value;
    var dueño = document.getElementById("dueñoInput").value;
  
    // Realizar una petición AJAX para agregar la moto a la base de datos
    // Aquí debes enviar los valores del formulario al servidor y procesar el registro adecuadamente
    // Después de agregar la moto, puedes llamar a la función showMotos() para actualizar la tabla
  }
  
  // Función para eliminar una moto
  function deleteMoto(motoId) {
    // Realizar una petición AJAX para eliminar la moto de la base de datos
    // Aquí debes enviar el ID de la moto al servidor y procesar la eliminación adecuadamente
    // Después de eliminar la moto, puedes llamar a la función showMotos() para actualizar la tabla
  }
  
  // Función para mostrar los registros de marcas
  function showMarcas() {
    // Realizar una petición AJAX para obtener los registros de marcas desde la base de datos
    // Aquí debes obtener los registros de las marcas y generar las filas de la tabla dinámicamente
    // Puedes utilizar la función createMarcaRow() para crear cada fila de la tabla
  }
  
  // Función para agregar una marca
  function addMarca(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombreMarcaInput").value;
    var nacionalidad = document.getElementById("nacionalidadInput").value;
  
    // Realizar una petición AJAX para agregar la marca a la base de datos
    // Aquí debes enviar los valores del formulario al servidor y procesar el registro adecuadamente
    // Después de agregar la marca, puedes llamar a la función showMarcas() para actualizar la tabla
  }
  
  // Función para eliminar una marca
  function deleteMarca(marcaId) {
    // Realizar una petición AJAX para eliminar la marca de la base de datos
    // Aquí debes enviar el ID de la marca al servidor y procesar la eliminación adecuadamente
    // Después de eliminar la marca, puedes llamar a la función showMarcas() para actualizar la tabla
  }
  
  // Función para mostrar los registros de modelos
  function showModelos() {
    // Realizar una petición AJAX para obtener los registros de modelos desde la base de datos
    // Aquí debes obtener los registros de los modelos y generar las filas de la tabla dinámicamente
    // Puedes utilizar la función createModeloRow() para crear cada fila de la tabla
  }
  
  // Función para agregar un modelo
  function addModelo(event) {
    event.preventDefault();
  
    // Obtener el valor del formulario
    var nombre = document.getElementById("nombreModeloInput").value;
  
    // Realizar una petición AJAX para agregar el modelo a la base de datos
    // Aquí debes enviar el valor del formulario al servidor y procesar el registro adecuadamente
    // Después de agregar el modelo, puedes llamar a la función showModelos() para actualizar la tabla
  }
  
  // Función para eliminar un modelo
  function deleteModelo(modeloId) {
    // Realizar una petición AJAX para eliminar el modelo de la base de datos
    // Aquí debes enviar el ID del modelo al servidor y procesar la eliminación adecuadamente
    // Después de eliminar el modelo, puedes llamar a la función showModelos() para actualizar la tabla
  }
  
  // Mostrar los registros al cargar la página
  showDueños();
  showMotos();
  showMarcas();
  showModelos();
  
  // Agregar eventos de submit a los formularios
  document.getElementById("addDueñoForm").addEventListener("submit", addDueño);
  document.getElementById("addMotoForm").addEventListener("submit", addMoto);
  document.getElementById("addMarcaForm").addEventListener("submit", addMarca);
  document.getElementById("addModeloForm").addEventListener("submit", addModelo);
  