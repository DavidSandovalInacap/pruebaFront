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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
