function mostarMarca(){
    var myHeaders = new Headers();
    myHeaders.append("Content-type","application/json");
  
    var raw = JSON.stringify({
        "query":"select * from marca ;"
    });
    var requestOptions = {
        method: 'POST', 
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
  
    fetch('http://164.90.186.2:4000/dynamic/mostrar_marca', requestOptions)
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
    ${element.id_marca} 
    </td>
    <td>
    ${element.nombre_marca} 
    </td>
  
    <td>
    ${element.nacionalidad_marca} 
    </td>
  
   
  
    
   <td>
    
 
  </tr>
  `
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  