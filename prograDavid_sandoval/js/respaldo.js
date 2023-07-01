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
            "query":"select  dm.id_dueño,dm.rut_dueño, dm.nombre, dm.apellido, ma.nombre_marca, mo.nombre_modelo, m.año_moto, m.color_moto from duenoo_moto dm, moto m, Marca ma, modelo mo where dm.id_moto = m.id_moto and mo.id_modelo = m.id_modelo and ma.id_marca=mo.id_marca;"
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
        ${element.nombre_marca} 
        </td>

        <td>
        ${element.nombre_modelo} 
        </td>

        <td>
        ${element.año_moto} 
        </td>

        <td>
        ${element.color_moto} 
        </td>
       <td>
        
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
        <button type="button" onclick="eliminar(${element.id_dueño});" class="btn btn-primary">claroqueyesss</button>
      </div>
    </div>
  </div>
</div>
<span class="material-icons">
        </span></button>

        
      


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
  })
.then(response => console.log(response))
.catch(err => console.error(err));
  };




  function actualizar() {
    // Crear el headers para pasar a JSON
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    // Campos del formulario
    var rut_dueno = document.getElementById('txt_rut_dueno').value;
    var nombre_dueno = document.getElementById('txt_nombre_dueno').value;
    var apellido_dueno = document.getElementById('txt_apellido_dueno').value;
    var nombre_moto = document.getElementById('txt_nom_moto').value;
    var ano_moto = document.getElementById('txt_ano_moto').value;
    var color_moto = document.getElementById('txt_color_moto').value;

    // Pasamos al JSON cada una de las filas obtenidas
    var raw = JSON.stringify({
      "rut_dueno": rut_dueno,
      "nombre": nombre_dueno,
      "apellido": apellido_dueno,
      "nombre_moto": nombre_moto,
      "ano_moto": ano_moto,
      "color_moto": color_moto
    });
  
    // Configuramos la variable options con los valores necesarios para nuestra función fetch
    var options = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("http://164.90.186.2:4000/api/duenoo_moto/" + id_dueño, options)
      .then(response => {
        if(response.status == 200){
          alert('Se actualizó correctamente...');
        }else{
          alert('Error al actualizar los datos...');
        }
      })
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
  

  var marcaSeleccionada;

function obtenerMarcas() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "query": "SELECT id_marca, nombre_marca FROM Marca;"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('http://164.90.186.2:4000/dynamic/Marca', requestOptions)
        .then(response => response.json())
        .then(data => {
            var select = document.getElementById('txt_nombre_marca');
            select.innerHTML = ""; // Limpiar las opciones existentes

            data.forEach(item => {
                var option = document.createElement('option');
                option.text = item.nombre_marca;
                option.value = item.id_marca;
                select.appendChild(option);
            });

            // Almacenar el valor seleccionado en la variable global
            marcaSeleccionada = select.value;
            
            // Llamar a obtenerModelo cuando se seleccione una marca diferente
            select.addEventListener('change', function() {
                marcaSeleccionada = select.value;
                obtenerModelo();
            });

            // Obtener los modelos relacionados con la marca seleccionada
            obtenerModelo();
        })
        .catch(error => console.error('Error:', error));
}
function obtenerMoto() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "query": "SELECT id_moto, serie_moto FROM moto;"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('http://164.90.186.2:4000/dynamic/moto', requestOptions)
        .then(response => response.json())
        .then(data => {
            var select = document.getElementById('txt_serie_moto');
            select.innerHTML = ""; // Limpiar las opciones existentes

            data.forEach(item => {
                var option = document.createElement('option');
                option.text = item.serie_moto;
                option.value = item.id_moto;
                select.appendChild(option);
            });

            // Almacenar el valor seleccionado en la variable global
            marcaSeleccionada = select.value;
            
            // Llamar a obtenerModelo cuando se seleccione una marca diferente
            select.addEventListener('change', function() {
                marcaSeleccionada = select.value;
                obtenerMoto();
            });

            // Obtener los modelos relacionados con la marca seleccionada
            obtenerMoto();
        })
        .catch(error => console.error('Error:', error));
}

obtenerMarcas();
obtenerMoto();


function obtenerModelo() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "query": "SELECT id_modelo, nombre_modelo FROM modelo WHERE id_marca = ?;",
        "params": [marcaSeleccionada]
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch('http://164.90.186.2:4000/dynamic/modelo', requestOptions)
        .then(response => response.json())
        .then(data => {
            var select = document.getElementById('txt_nombre_modelo');
            select.innerHTML = ""; // Limpiar las opciones existentes

            data.forEach(item => {
                var option = document.createElement('option');
                option.text = item.nombre_modelo;
                option.value = item.id_modelo;
                select.appendChild(option);
            });

            modeloSeleccionado = select.value;
        })
        .catch(error => console.error('Error:', error));
}






  function agregar(){

    //crear el headders para pasar a json
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
      // campos del formulario
    var rut_dueno = document.getElementById('txt_rut_dueno').value;
    var nombre_dueno = document.getElementById('txt_nombre_dueno').value;
    var apellido_dueno = document.getElementById('txt_apellido_dueno').value;
    var edad_dueno = document.getElementById('txt_edad_dueno').value;
    var direccion_dueno = document.getElementById('txt_direccion_dueno').value;
    var telefono_dueno = document.getElementById('txt_telefono_dueno').value;
    var anio_moto = document.getElementById('txt_anio_moto').value;
    var color_moto = document.getElementById('txt_color_moto').value;

    //pasamos al json cada una de las filas obtenidas
    var raw = JSON.stringify({
                "rut_dueño":rut_dueno,

                "nombre":nombre_dueno,

                "apellido":apellido_dueno,

                "edad":edad_dueno,

                "direccion":direccion_dueno,

                "telefono":telefono_dueno,

                
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
    
    
    
    
    var raw_moto = JSON.stringify({
      "año_moto": anio_moto,
      "color_moto": color_moto,
      "codigo_moto": codigo_moto


      
});
console.log(raw_moto)
//configuramos la variable opcion con los valores necesarios para nuestra función fetch
var options_moto = {
method: 'POST',
headers: myHeaders,
body: raw_moto,
redirect: 'follow'
}


  fetch("http://164.90.186.2:4000/api/duenoo_moto/", options)
  .then(response => {
    if(response.status == 200){
        alert('Se agrego correctamente...');
    }else{
        alert('Error al agregar los datos...');
    }
    })
  .then(response => console.log(response))
  .catch(err => console.error(err));
    


  fetch("http://164.90.186.2:4000/api/moto/", options_moto)
  .then(response => {
    if(response.status == 200){
        alert('Se agrego correctamente...');
    }else{
        alert('Error al agregar los datos...');
    }
    })
  .then(response => console.log(response))
  .catch(err => console.error(err));
  };

 /* validar rut: var Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		rutCompleto = rutCompleto.replace("‐","-");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}


$("#btnvalida").click(function(){
	if (Fn.validaRut( $("#txt_rut").val() )){
		$("#msgerror").html("El rut ingresado es válido :D");
	} else {
		$("#msgerror").html("El Rut no es válido :'( ");
	}
}); */


































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








































