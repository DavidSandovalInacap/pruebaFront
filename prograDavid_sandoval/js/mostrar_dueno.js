/* function obtenerDatosAPI(){
    
    const options = {method: 'GET'};
    //envian una consulta, busca la ip, el puerto y la api 
    fetch('http://164.90.186.2:0102/api/agregar_dueño/', options)
    //de vuelve un archivo json
      .then(response => response.json())
      //necesitamos recorren el json y loas almacenamos en la funcion mostrarDatos
      .then((json)=>json.forEach(mostarDueño))
    
      .then(response => console.log(result))
      .catch(err => console.error('error', err));
    }  */

    /* funcion mostrar datos */
    function mostarDueno(){
        var myHeaders = new Headers();
        myHeaders.append("Content-type","application/json");

        var raw = JSON.stringify({
            "query":"select * from duenoo_moto ;"
        });
        var requestOptions = {
            method: 'POST', 
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://164.90.186.2:4000/dynamic/mostrar_dueno', requestOptions)
        .then(response => response.json())
        .then((json) => json.forEach(mostrarDatos))
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }

function mostrarDatos(element, index, arr){
        //index el que recorre
        //element es el valor
        //del documento selecciona la clase .data
    arr[index] = document.querySelector('.data').innerHTML += 
    `
    <tr>

        <td>
        ${element.id_dueño} 
        </td>
        <td>
        ${element.rut_dueño} 
        </td>

        <td>
        ${element.nombre} 
        </td>
    
        <td>
        ${element.apellido} 
        </td>

        <td>
        ${element.edad} 
        </td>

        <td>
        ${element.correo_electronico} 
        </td>


        
       <td>
        
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick="dueno= ${element.id_dueño}" data-bs-target="#staticBackdrop">
  <span class="material-icons">delete
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Eliminar registro</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ¿Estas seguro de eliminar este registro?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">claroquenones</button>
        <button type="button" onclick="eliminar(dueno);" class="btn btn-primary">claroqueyesss</button>
      </div>
    </div>
  </div>
</div>
<span class="material-icons">
        </span></button>



        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Actualizar registro</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
            <div class="form-group row">
              <label for="txt_rut_dueno" class="col-sm-2 col-form-label">Rut</label>
              <div class="col-sm-10">
              <input type="text"  class="form-control"  id="txt_rut_dueno2" placeholder="" >
              
            </div>
            </div>
            <div class="form-group row">
              <label for="txt_nombre_dueno" class="col-sm-2 col-form-label">Nombre </label>
              <div class="col-sm-10">
              <input type="text" class="form-control" id="txt_nombre_dueno2" placeholder=""  >
            </div>
            </div>
            <div class="form-group row">
              <label for="txt_apellido_dueno" class="col-sm-2 col-form-label">Apellido</label>
              <div class="col-sm-10">
              <input type="text" class="form-control" id="txt_apellido_dueno2" placeholder="" >
            </div>
            </div>
            <div class="form-group row">
              <label for="txt_edad_dueno" class="col-sm-2 col-form-label">Edad</label>
              <div class="col-sm-10">
              <input type="text" class="form-control" id="txt_edad_dueno2" placeholder="" >
            </div>
            </div>
            <div class="form-group row">
              <label for="txt_correo" class="col-sm-2 col-form-label">Correo</label>
              <div class="col-sm-10">
              <input type="text" class="form-control"  id="txt_correo2" placeholder="" >
            </div>
            </div>
            
            
           
  
           
            
          </form>
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Confirmación</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
             Cambios realizados
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary" onclick="actualizar(items);" data-bs-toggle="modal">Salir</button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" data-bs-target="#exampleModalToggle" onclick="items=${element.id_dueño};" data-bs-toggle="modal">Actualizar</button>        
        
      


       </td>
    </tr>
    `
    };
/* funcion eliminar */
function eliminar(id_dueño){
    console.log(id_dueño)
    var options = {
        method: 'DELETE',
        redirect: 'follow'
    }
      
  fetch("http://164.90.186.2:4000/api/duenoo_moto/"+id_dueño , options)
 .then(response => {
  if(response.status == 200){
      alert('Se elimino correctamente...');
  }else{
      alert('Error al eliminar los datos...');
  }
  location.reload(); 
  })
.then(response => console.log(response))
.catch(err => console.error(err));
  };




  function actualizar(id_dueño) {
    // Crear el headers para pasar a JSON
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    // Campos del formulario
    var rut_dueno = document.getElementById('txt_rut_dueno2').value;
    var nombre_dueno = document.getElementById('txt_nombre_dueno2').value;
    var apellido_dueno = document.getElementById('txt_apellido_dueno2').value;
    var edad_dueno = document.getElementById('txt_edad_dueno2').value;
    var correo_dueno = document.getElementById('txt_correo2').value;
  
    // Validar el campo de rut
    var rutRegex = /^[0-9]{1,8}-[0-9Kk]{1}$/;
    if (!rutRegex.test(rut_dueno)) {
      alert('El rut ingresado no es válido');
      return;
    }
  
    // Obtener el número y dígito verificador del RUT
    var rutSinDV = rut_dueno.split('-')[0];
    var digitoVerificador = rut_dueno.split('-')[1];
  
    // Validar el dígito verificador
    var rutReverso = rutSinDV.split('').reverse();
    var serie = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5];
    var suma = 0;
    var indiceSerie = 0;
  
    for (var i = 0; i < rutReverso.length; i++) {
      suma += parseInt(rutReverso[i]) * serie[indiceSerie];
      indiceSerie = (indiceSerie + 1) % serie.length;
    }
  
    var resto = suma % 11;
    var digitoCalculado = 11 - resto;
  
    if (digitoCalculado === 11) {
      digitoCalculado = 0;
    } else if (digitoCalculado === 10) {
      digitoCalculado = "K";
    }
  
    if (digitoCalculado.toString() !== digitoVerificador.toUpperCase()) {
      alert('El rut ingresado no es válido');
      return;
    }
  
    // Validar el campo de correo electrónico
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(correo_dueno)) {
      alert('El correo electrónico ingresado no es válido');
      return;
    }
  
    // Validar el campo de edad (solo números)
    if (isNaN(edad_dueno)) {
      alert('La edad debe ser un número');
      return;
    }
  
    // Pasar los datos al formato JSON
    var raw = JSON.stringify({
      "rut_dueño": rut_dueno,
      "nombre": nombre_dueno,
      "apellido": apellido_dueno,
      "edad": edad_dueno,
      "correo_electronico": correo_dueno
    });
    console.log(id_dueño, raw)
  
    // Configurar la variable options con los valores necesarios para nuestra función fetch
    var options = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("http://164.90.186.2:4000/api/duenoo_moto/" + id_dueño, options)
      .then(response => {
        if (response.status == 200) {
          alert('Se actualizó correctamente...');
        } else {
          alert('Error al actualizar los datos...');
        }
        location.reload(); 
      })
      .catch(err => console.error(err));
  }
  
  // Validar que solo se ingresen números en el campo de edad
  document.getElementById('txt_edad_dueno2').addEventListener('keypress', function(e) {
    var key = e.keyCode || e.which;
    var char = String.fromCharCode(key);
    if (!/^\d$/.test(char)) {
      e.preventDefault();
    }
  });
  
  
  
  



  function agregar() {
    // Crear los headers para pasar a JSON
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    // Obtener los valores de los campos del formulario
    var rut_dueno = document.getElementById('txt_rut_dueno').value;
    var nombre_dueno = document.getElementById('txt_nombre_dueno').value;
    var apellido_dueno = document.getElementById('txt_apellido_dueno').value;
    var edad_dueno = document.getElementById('txt_edad_dueno').value;
    var correo_elec_dueno = document.getElementById('txt_correo_dueno').value;
  
    // Validar el campo de rut
    var rutRegex = /^[0-9]{1,8}-[0-9Kk]{1}$/;
    if (!rutRegex.test(rut_dueno)) {
      alert('El rut ingresado no es válido');
      return;
    }
  
    // Obtener el número y dígito verificador del RUT
    var rutSinDV = rut_dueno.split('-')[0];
    var digitoVerificador = rut_dueno.split('-')[1];
  
    // Validar el dígito verificador
    var rutReverso = rutSinDV.split('').reverse();
    var serie = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5];
    var suma = 0;
    var indiceSerie = 0;
  
    for (var i = 0; i < rutReverso.length; i++) {
      suma += parseInt(rutReverso[i]) * serie[indiceSerie];
      indiceSerie = (indiceSerie + 1) % serie.length;
    }
  
    var resto = suma % 11;
    var digitoCalculado = 11 - resto;
  
    if (digitoCalculado === 11) {
      digitoCalculado = 0;
    } else if (digitoCalculado === 10) {
      digitoCalculado = "K";
    }
  
    if (digitoCalculado.toString() !== digitoVerificador.toUpperCase()) {
      alert('El rut ingresado no es válido');
      return;
    }
  
    // Validar el campo de correo electrónico
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(correo_elec_dueno)) {
      alert('El correo electrónico ingresado no es válido');
      return;
    }
  
    // Validar el campo de edad (solo números)
    if (isNaN(edad_dueno)) {
      alert('La edad debe ser un número');
      return;
    }
  
    // Pasar los datos al formato JSON
    var raw = JSON.stringify({
      "rut_dueño": rut_dueno,
      "nombre": nombre_dueno,
      "apellido": apellido_dueno,
      "edad": edad_dueno,
      "correo_electronico": correo_elec_dueno
    });
  
    // Configurar las opciones para la función fetch
    var options = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    // Realizar la solicitud de POST
    fetch("http://164.90.186.2:4000/api/duenoo_moto/", options)
      .then(response => {
        if (response.status == 200) {
          alert('Se agregó correctamente...');
        } else {
          alert('Error al agregar los datos...');
        }
        location.reload(); 
      })
      .catch(err => console.error(err));
  }
  
  // Validar que solo se ingresen números en el campo de edad
  document.getElementById('txt_edad_dueno').addEventListener('keypress', function(e) {
    var key = e.keyCode || e.which;
    var char = String.fromCharCode(key);
    if (!/^\d$/.test(char)) {
      e.preventDefault();
    }
  });
  
  

 
 
































  




































