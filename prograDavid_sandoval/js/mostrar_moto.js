function mostarMoto(){
  var myHeaders = new Headers();
  myHeaders.append("Content-type","application/json");

  var raw = JSON.stringify({
      "query":"select * from moto ;"
  });
  var requestOptions = {
      method: 'POST', 
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };

  fetch('http://164.90.186.2:4000/dynamic/mostrar_moto', requestOptions)
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
  ${element.id_moto} 
  </td>
  <td>
  ${element.año_moto} 
  </td>

  <td>
  ${element.nombre_marca} 
  </td>

  <td>
  ${element.nombre_modelo} 
  </td>

  <td>
  ${element.color_moto} 
  </td>

  <td>
  ${element.cilindrada} 
  </td>


  
 <td>
  
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick="moto= ${element.id_moto}" data-bs-target="#staticBackdrop">
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
  <button type="button" onclick="eliminar(moto);" class="btn btn-primary">claroqueyesss</button>
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
        <label for="txt_ano_moto" class="col-sm-2 col-form-label">Año moto</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="txt_ano_moto2" placeholder="" >
        
      </div>
      </div>
      <div class="form-group row">
        <label for="txt_nombre_marca" class="col-sm-2 col-form-label">Nombre marca </label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="txt_nombre_marca2" placeholder="" >
      </div>
      </div>
      <div class="form-group row">
        <label for="txt_nombre_modelo" class="col-sm-2 col-form-label">Modelo</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="txt_nombre_modelo2" placeholder="" >
      </div>
      </div>
      <div class="form-group row">
        <label for="txt_color_moto" class="col-sm-2 col-form-label">Color</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="txt_color_moto2" placeholder="" >
      </div>
      </div>
      <div class="form-group row">
        <label for="txt_cilindrada_moto" class="col-sm-2 col-form-label">Cilindrada</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="txt_cilindrada_moto2" placeholder="" >
      </div>
      </div>
      
      
     

     
      
    </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" onclick="actualizar(items);" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<button class="btn btn-primary" data-bs-target="#exampleModalToggle" onclick="items=${element.id_moto};" data-bs-toggle="modal">Actualizar</button>        
  



 </td>
</tr>
`
};
/* funcion eliminar */
function eliminar(id_moto){
console.log(id_moto)
var options = {
  method: 'DELETE',
  redirect: 'follow'
}

fetch("http://164.90.186.2:4000/api/moto/"+id_moto , options)
.then(response => {
if(response.status == 200){
alert('Se elimino correctamente la moto...');
}else{
alert('Error al eliminar la moto...');
}
location.reload()
})
.then(response => console.log(response))
.catch(err => console.error(err));
};




function actualizar(id_moto) {
// Crear el headers para pasar a JSON
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// Campos del formulario
var ano_moto = document.getElementById('txt_ano_moto2').value;
var nombre_marca = document.getElementById('txt_nombre_marca2').value;
var nombre_modelo = document.getElementById('txt_nombre_modelo2').value;
var color_moto = document.getElementById('txt_color_moto2').value;
var cilindrada_moto = document.getElementById('txt_cilindrada_moto2').value;


// Pasamos al JSON cada una de las filas obtenidas
var raw = JSON.stringify({

"año_moto":ano_moto,
"nombre_marca": nombre_marca,
"nombre_modelo": nombre_modelo,
"color_moto": color_moto,
"cilindrada": cilindrada_moto,

});
console.log(id_moto, raw)

// Configuramos la variable options con los valores necesarios para nuestra función fetch
var options = {
method: 'PATCH',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

fetch("http://164.90.186.2:4000/api/moto/" + id_moto, options)    
.then(response => {
  if(response.status == 200){
    alert('Se actualizó correctamente los datos de la moto...');
  }else{
    alert('Error al actualizar los datos de la moto...');
  }
  location.reload()
})
.then(response => console.log(response))
.catch(err => console.error(err));
}








function agregar(){

//crear el headders para pasar a json
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
// campos del formulario
var ano_moto = document.getElementById('txt_ano_moto1').value;
var nombre_marca = document.getElementById('txt_nombre_marca1').value;
var nombre_modelo = document.getElementById('txt_nombre_modelo1').value;
var color_moto1 = document.getElementById('txt_color_moto1').value;
var cilindrada_moto = document.getElementById('txt_cilindrada_moto1').value;


//pasamos al json cada una de las filas obtenidas
var raw = JSON.stringify({
          "año_moto":ano_moto,

          "nombre_marca":nombre_marca,

          "nombre_modelo":nombre_modelo,

          "color_moto":color_moto1,

          "cilindrada":cilindrada_moto,

     

          
});
console.log(raw)
//configuramos la variable opcion con los valores necesarios para nuestra función fetch
var options = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
}
//const options = {method: 'POST', body: '{"nombre_tipo_producto": 'nombre_tipo'}'};







fetch("http://164.90.186.2:4000/api/moto/", options)
.then(response => {
if(response.status == 200){
  alert('Se agrego una moto correctamente...');
}else{
  alert('Error al agregar los datos de la moto...');
}
location.reload()
})
.then(response => console.log(response))
.catch(err => console.error(err));




};








































































