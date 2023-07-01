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
    function mostarCliente(){
        var myHeaders = new Headers();
        myHeaders.append("Content-type","application/json");

        var raw = JSON.stringify({
            "query":"select dm.id_dueño, dm.rut_dueño, dm.nombre, dm.apellido, mo.nombre_marca, mo.nombre_modelo, mo.año_moto, rc.id_registro_cliente from duenoo_moto dm, moto mo, registro_cliente rc where rc.id_dueño = dm.id_dueño and rc.id_moto = mo.id_moto;"
        });
        var requestOptions = {
            method: 'POST', 
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch('http://164.90.186.2:4000/dynamic/registro_cliente', requestOptions)
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
        ${element.nombre_marca} 
        </td>

        <td>
        ${element.nombre_modelo} 
        </td>
        <td>
        ${element.año_moto} 
        </td>
        <td>
        ${element.id_registro_cliente} 
        </td>


        
       <td>
        
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick="cliente= ${element.id_registro_cliente}" data-bs-target="#staticBackdrop">
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
        <button type="button" onclick="eliminar(cliente);" class="btn btn-primary">claroqueyesss</button>
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
              <label for="txt_nombre_cliente" class="col-sm-2 col-form-label">Nombre </label>
              <div class="col-sm-10">
              <input type="text" class="form-control" id="txt_nombre_cliente" placeholder=""  >
            </div>
            </div>
            <div class="form-group row">
              <label for="txt_apellido_cliente" class="col-sm-2 col-form-label">Apellido</label>
              <div class="col-sm-10">
              <input type="text" class="form-control" id="txt_apellido_cliente" placeholder="" >
            </div>
            </div>
            <div class="form-group row">
              <label for="txt_nombre_marca3" class="col-sm-2 col-form-label">Nombre marca</label>
              <div class="col-sm-10">
              <input type="text" class="form-control" id="txt_nombre_marca3" placeholder="" >
            </div>
            </div>
            <div class="form-group row">
              <label for="txt_nombre_modelo3" class="col-sm-2 col-form-label">Nombre modelo</label>
              <div class="col-sm-10">
              <input type="text" class="form-control" id="txt_nombre_modelo3" placeholder="" >
            </div>
            </div>
            <div class="form-group row">
              <label for="txt_año_modelo3" class="col-sm-2 col-form-label">Año modelo</label>
              <div class="col-sm-10">
              <input type="text" class="form-control" id="txt_año_modelo3" placeholder="" >
            </div>
            </div>
            
            
           
  
           
            
         

       </td>
    </tr>
    `
    };
/* funcion eliminar */
function eliminar(id_registro_cliente){
    console.log(id_registro_cliente)
    var options = {
        method: 'DELETE',
        redirect: 'follow'
    }
      
  fetch("http://164.90.186.2:4000/api/registro_cliente/"+id_registro_cliente , options)
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




  function actualizar(id_registro_cliente) {
    // Crear el headers para pasar a JSON
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    // Campos del formulario
    var nombre_cliente = document.getElementById('txt_nombre_cliente').value;
    var apellido_cliente = document.getElementById('txt_apellido_cliente').value;
    var nombre_marca = document.getElementById('txt_nombre_marca3').value;
    var nombre_modelo = document.getElementById('txt_nombre_modelo3').value;
    var año_moto = document.getElementById('txt_año_modelo3').value;
    

    // Pasamos al JSON cada una de las filas obtenidas
    var raw = JSON.stringify({
      
      "nombre": nombre_cliente,
      "apellido": apellido_cliente,
      "nombre_marca": nombre_marca,
      "nombre_modelo": nombre_modelo,
      "año_moto": año_moto,
      
    });
    console.log(id_registro_cliente, raw)
  
    // Configuramos la variable options con los valores necesarios para nuestra función fetch
    var options = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("http://164.90.186.2:4000/api/registro_cliente/" + id_registro_cliente, options)
      .then(response => {
        if(response.status == 200){
          alert('Se actualizó correctamente...');
        }else{
          alert('Error al actualizar los datos...');
        }
      })
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };
  

 





  

 



































  /* function actualizar_dueno(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var nombre_tipo_producto  = document.getElementById('txt_nom_producto').value;
    var cod_tipo_producto     = document.getElementById("txt_codigo_producto").value; 
   
    var raw = JSON.stringify({
     
      "nombre_tipo_producto": nombre_tipo_producto,
      "cod_tipo_producto": cod_tipo_producto,
    });
    
    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
                                            
    };
    
    fetch("http://164.90.186.2:4000/dynamic/mostrar_dueno"+id_dueño, requestOptions)
    .then(response => {
      if(response.status == 200){
          alert('Se actualizo correctamente...');
      }else{
          alert('Error al actualizar los datos...');
      }
      })
    .then(response => console.log(response))
    .catch(err => console.error(err));
      }


      /* funcion actualizar */

   //   








































