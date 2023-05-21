//variables Globales 

let letraB = [];
let letraI = [];
let letraN = [];
let letraG = [];
let letraO = [];


let pintar1 = document.getElementById("letraB");
let pintar2 = document.getElementById("letraI");

//funtion que pinta las letras
function pintar() {

  
  for (let i = 1; i < 5; i++) {

    letraB.push(guardarLetraB());
    letraI.push(guardarLetraI());
    letraN.push(guardarLetraN());
    letraG.push(guardarLetraG());
    letraO.push(guardarLetraO());
   

  }

 
  //Se eliminan numeros repetidos iterando a set 
  let letraBUnicos = [...new Set(letraB)];
  let letraIUnicos = [...new Set(letraI)];
  let letraNUnicos = [...new Set(letraN)];
  let letraGUnicos = [...new Set(letraG)];
  let letraOUnicos = [...new Set(letraO)];
  
//logica para crear el array de la letra b sin respetir 
  if (letraBUnicos.length < 5) {
  
    let var1 = 5;

    while (letraBUnicos.length <  var1 ) {
      letraBUnicos.push(guardarLetraB())
      let arryAuxiliar = [...new Set(letraBUnicos)]
      letraBUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)
     
    if(letraBUnicos.length===5){
      var1--;

    }else{
      console.log("ESTO ES INCREMENTO "+var1)
    }
    }
  }

//logica para crear el array de la letra I sin repetir 

  if (letraIUnicos.length < 5) {

    let var1 = 5;

    while (letraIUnicos.length < var1) {
      letraIUnicos.push(guardarLetraI())
      let arryAuxiliar = [...new Set(letraIUnicos)]
      letraIUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)
      if(letraIUnicos.length===5){
        console.log("ESTO ES DECREMENTO ")
        var1--;
      }else{
        console.log("ESTO ES INCREMENTO "+var1)

      }
     
    }

  }
//logica para crear el array de la letra N sin repetir
  if (letraNUnicos.length < 4) {
    let var1 = 4;
    while (letraNUnicos.length < var1 ) {
      letraNUnicos.push(guardarLetraN())

      let arryAuxiliar = [...new Set(letraNUnicos)]
      letraNUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)


      if(letraNUnicos.length===4){
        console.log("ESTO ES DECREMENTO ")
        var1--;
      }else{
        console.log("ESTO ES INCREMENTO "+var1)

      }
    }
  }

//logica para crear el array de la letra G
  if (letraGUnicos.length < 5) {
    let var1 = 5;

    while (letraGUnicos.length < var1) {
      letraGUnicos.push(guardarLetraG())
      let arryAuxiliar = [...new Set(letraGUnicos)]
      letraGUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)
      if(letraGUnicos.length===5){
        console.log("ESTO ES DECREMENTO ")
        var1--;
      }else{
        console.log("ESTO ES INCREMENTO "+var1)

      }

    }

  }
//logica para crear el array de la letra O
  if (letraOUnicos.length < 5) {
    let var1 = 5;
  
    while (letraOUnicos.length < var1 ) {
      letraOUnicos.push(guardarLetraO())

      let arryAuxiliar = [...new Set(letraOUnicos)]
      letraOUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)

      if(letraOUnicos.length===5){
        console.log("ESTO ES DECREMENTO ")
        var1--;
      }else{
        console.log("ESTO ES INCREMENTO "+var1)

      }
    
    }

  }
  console.log("DEFINITIVA B " + letraBUnicos);


  localStorage.setItem("letraB", letraBUnicos);
  console.log("DEFINITIVA I " + letraIUnicos);
  localStorage.setItem("letraI", letraIUnicos);
  console.log("DEFINITIVA N " + letraNUnicos);
  localStorage.setItem("letraN", letraNUnicos);
  console.log("DEFINITIVA G " + letraGUnicos);
  localStorage.setItem("letraG", letraGUnicos);
  console.log("DEFINITIVA O " + letraOUnicos);
  localStorage.setItem("letraO", letraOUnicos);
//se guarda en el local store los valores de carton.





  pintar1.innerHTML += `
<tr>
<th>${letraBUnicos[0]}</th>
<th>${letraIUnicos[0]}</th>  
<th>${letraNUnicos[0]}</th>
<th>${letraGUnicos[0]}</th>
<th>${letraOUnicos[0]}</th>             
</tr>
<tr>
<th>${letraBUnicos[1]}</th>
<th>${letraIUnicos[1]}</th>  
<th>${letraNUnicos[1]}</th>
<th>${letraGUnicos[1]}</th>
<th>${letraOUnicos[1]}</th> 

<tr>

<th>${letraBUnicos[2]}</th>
<th>${letraIUnicos[2]}</th>  
<th class="intro" > &nbsp</th>
<th>${letraGUnicos[2]}</th>
<th>${letraOUnicos[2]}</th>             
</tr>

<tr>
<th>${letraBUnicos[3]}</th>
<th>${letraIUnicos[3]}</th>  
<th>${letraNUnicos[2]}</th>
<th>${letraGUnicos[3]}</th>
<th>${letraOUnicos[3]}</th> 

<tr>
<th>${letraBUnicos[4]}</th>
<th>${letraIUnicos[4]}</th>  
<th>${letraNUnicos[3]}</th>
<th>${letraGUnicos[4]}</th>
<th>${letraOUnicos[4]}</th>             
</tr>

</tr>
`

}
//funtion que pinta las letras carton2
/*  
function pintarCarton2() {
  
  for (let i = 1; i < 5; i++) {

    letraB.push(guardarLetraB());
    letraI.push(guardarLetraI());
    letraN.push(guardarLetraN());
    letraG.push(guardarLetraG());
    letraO.push(guardarLetraO());
   

  }

 
  //Se eliminan numeros repetidos iterando a set 
  let letraBUnicos2 = [...new Set(letraB)];
  let letraIUnicos2 = [...new Set(letraI)];
  let letraNUnicos2 = [...new Set(letraN)];
  let letraGUnicos2 = [...new Set(letraG)];
  let letraOUnicos2 = [...new Set(letraO)];
  
//logica para crear el array de la letra b sin respetir 
  if (letraBUnicos2.length < 5) {
  
    let var1 = 5;

    while (letraBUnicos2.length <  var1 ) {
      letraBUnicos2.push(guardarLetraB())
      let arryAuxiliar = [...new Set(letraBUnicos2)]
      letraBUnicos2 = arryAuxiliar.splice(0, arryAuxiliar.length)
     
    if(letraBUnicos2.length===5){
      var1--;

    }else{
      console.log("ESTO ES INCREMENTO "+var1)
    }
    }
  }

//logica para crear el array de la letra I sin repetir 

  if (letraIUnicos2.length < 5) {

    let var1 = 5;

    while (letraIUnicos2.length < var1) {
      letraIUnicos2.push(guardarLetraI())
      let arryAuxiliar = [...new Set(letraIUnicos2)]
      letraIUnicos2 = arryAuxiliar.splice(0, arryAuxiliar.length)
      if(letraIUnicos2.length===5){
        console.log("ESTO ES DECREMENTO ")
        var1--;
      }else{
        console.log("ESTO ES INCREMENTO "+var1)

      }
     
    }

  }
//logica para crear el array de la letra N sin repetir
  if (letraNUnicos2.length < 4) {
    let var1 = 4;
    while (letraNUnicos2.length < var1 ) {
      letraNUnicos2.push(guardarLetraN())

      let arryAuxiliar = [...new Set(letraNUnicos2)]
      letraNUnicos2= arryAuxiliar.splice(0, arryAuxiliar.length)


      if(letraNUnicos2.length===4){
        console.log("ESTO ES DECREMENTO ")
        var1--;
      }else{
        console.log("ESTO ES INCREMENTO "+var1)

      }
    }
  }

//logica para crear el array de la letra G
  if (letraGUnicos2.length < 5) {
    let var1 = 5;

    while (letraGUnicos2.length < var1) {
      letraGUnicos2.push(guardarLetraG())
      let arryAuxiliar = [...new Set(letraGUnicos2)]
      letraGUnicos2 = arryAuxiliar.splice(0, arryAuxiliar.length)
      if(letraGUnicos2.length===5){
        console.log("ESTO ES DECREMENTO ")
        var1--;
      }else{
        console.log("ESTO ES INCREMENTO "+var1)

      }

    }

  }
//logica para crear el array de la letra O
  if (letraOUnicos2.length < 5) {
    let var1 = 5;
  
    while (letraOUnicos2.length < var1 ) {
      letraOUnicos2.push(guardarLetraO())

      let arryAuxiliar = [...new Set(letraOUnicos2)]
      letraOUnicos2 = arryAuxiliar.splice(0, arryAuxiliar.length)

      if(letraOUnicos2.length===5){
        console.log("ESTO ES DECREMENTO ")
        var1--;
      }else{
        console.log("ESTO ES INCREMENTO "+var1)

      }
    
    }

  }
  console.log("DEFINITIVA B " + letraBUnicos2);
  localStorage.setItem("letraB2", letraBUnicos2);
  console.log("DEFINITIVA I " + letraIUnicos2);
  localStorage.setItem("letraI2", letraIUnicos2);
  console.log("DEFINITIVA N " + letraNUnicos2);
  localStorage.setItem("letraN2", letraNUnicos2);
  console.log("DEFINITIVA G " + letraGUnicos2);
  localStorage.setItem("letraG2", letraGUnicos2);
  console.log("DEFINITIVA O " + letraOUnicos2);
  localStorage.setItem("letraO2", letraOUnicos2);
//se guarda en el local store los valores de carton.


  pintar2.innerHTML += `
<tr>
<th>${letraBUnicos2[0]}</th>
<th>${letraIUnicos2[0]}</th>  
<th>${letraNUnicos2[0]}</th>
<th>${letraGUnicos2[0]}</th>
<th>${letraOUnicos2[0]}</th>             
</tr>
<tr>
<th>${letraBUnicos2[1]}</th>
<th>${letraIUnicos2[1]}</th>  
<th>${letraNUnicos2[1]}</th>
<th>${letraGUnicos2[1]}</th>
<th>${letraOUnicos2[1]}</th> 

<tr>

<th>${letraBUnicos2[2]}</th>
<th>${letraIUnicos2[2]}</th>  
<th class="intro" > &nbsp</th>
<th>${letraGUnicos2[2]}</th>
<th>${letraOUnicos2[2]}</th>             
</tr>

<tr>
<th>${letraBUnicos2[3]}</th>
<th>${letraIUnicos2[3]}</th>  
<th>${letraNUnicos2[2]}</th>
<th>${letraGUnicos2[3]}</th>
<th>${letraOUnicos2[3]}</th> 

<tr>
<th>${letraBUnicos2[4]}</th>
<th>${letraIUnicos2[4]}</th>  
<th>${letraNUnicos2[3]}</th>
<th>${letraGUnicos2[4]}</th>
<th>${letraOUnicos2[4]}</th>             
</tr>

</tr>
`




}



pintarCarton2();*/ 
pintar();





/*randon letra B  */
function guardarLetraB() {
  min = 1;
  max = 15;
  var b = Math.floor(Math.random() * (max - min) + min);
  return b;
}

/*randon letra I  */
function guardarLetraI() {
  min = 16;
  max = 30;
  var b = Math.floor(Math.random() * (max - min) + min);
  return b;
}

/*randon letra N  */
function guardarLetraN() {
  min = 31;
  max = 45;
  var b = Math.floor(Math.random() * (max - min) + min);
  return b;
}

/*randon letra G  */
function guardarLetraG() {
  min = 46;
  max = 60;
  var b = Math.floor(Math.random() * (max - min) + min);
  return b;
}

/*randon letra O */
function guardarLetraO() {
  min = 61;
  max = 75;
  var b = Math.floor(Math.random() * (max - min) + min);
  return b;
}