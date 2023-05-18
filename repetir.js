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

  for (let i = 0; i < 5; i++) {

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
  if (letraBUnicos.length != 5) {

    let var1 = 5;

    while (letraBUnicos.length <= var1) {
      letraBUnicos.push(guardarLetraB())
      let arryAuxiliar = [...new Set(letraBUnicos)]
      letraBUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)
      if (arryAuxiliar.length = !5) {
        var1--;
      }

    }

  }

//logica para crear el array de la letra I sin repetir 
  if (letraIUnicos.length != 5) {

    let var1 = 6;

    while (letraIUnicos.length < var1 + 1) {
      letraIUnicos.push(guardarLetraI())
      let arryAuxiliar = [...new Set(letraIUnicos)]

      letraIUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)

      if (arryAuxiliar.length = !5) {
        var1--;
      }
    }

  }
//logica para crear el array de la letra N sin repetir
  if (letraNUnicos.length != 5) {

    let var1 = 6;
    while (letraNUnicos.length < var1 + 1) {
      letraNUnicos.push(guardarLetraN())

      let arryAuxiliar = [...new Set(letraNUnicos)]
      letraNUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)

      console.log("sin repetir " + letraNUnicos);
      if (arryAuxiliar.length = !5) {
        var1--;
      }
    }
  }

//logica para crear el array de la letra G
  if (letraGUnicos.length != 5) {
    let var1 = 6;

    while (letraGUnicos.length < var1) {

      letraGUnicos.push(guardarLetraG())
      let arryAuxiliar = [...new Set(letraGUnicos)]
      letraGUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)
      if (arryAuxiliar.length = !5) {
        var1--;
      }

    }

  }
//logica para crear el array de la letra O
  if (letraOUnicos.length != 5) {
    let var1 = 6;
  
    while (letraOUnicos.length < var1 + 1) {
      letraOUnicos.push(guardarLetraO())

      let arryAuxiliar = [...new Set(letraOUnicos)]
      letraOUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)

      if (arryAuxiliar.length = !5) {
        var1--;
      }

    }

  }

  console.log("DEFINITIVA B " + letraBUnicos);
  console.log("DEFINITIVA I " + letraIUnicos);
  console.log("DEFINITIVA N " + letraNUnicos);
  console.log("DEFINITIVA G " + letraGUnicos);
  console.log("DEFINITIVA O " + letraOUnicos);


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
<th></th>
<th>${letraGUnicos[2]}</th>
<th>${letraOUnicos[2]}</th>             
</tr>

<tr>
<th>${letraBUnicos[3]}</th>
<th>${letraIUnicos[3]}</th>  
<th>${letraNUnicos[3]}</th>
<th>${letraGUnicos[3]}</th>
<th>${letraOUnicos[3]}</th> 

<tr>
<th>${letraBUnicos[4]}</th>
<th>${letraIUnicos[4]}</th>  
<th>${letraNUnicos[4]}</th>
<th>${letraGUnicos[4]}</th>
<th>${letraOUnicos[4]}</th>             
</tr>

</tr>
`

}


function pintarCarton2() {

  for (let i = 0; i < 5; i++) {

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
  if (letraBUnicos.length != 5) {

    let var1 = 5;

    while (letraBUnicos.length <= var1) {
      letraBUnicos.push(guardarLetraB())
      let arryAuxiliar = [...new Set(letraBUnicos)]
      letraBUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)
      if (arryAuxiliar.length = !5) {
        var1--;
      }

    }

  }

//logica para crear el array de la letra I sin repetir 
  if (letraIUnicos.length != 5) {

    let var1 = 6;

    while (letraIUnicos.length < var1 + 1) {
      letraIUnicos.push(guardarLetraI())
      let arryAuxiliar = [...new Set(letraIUnicos)]

      letraIUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)

      if (arryAuxiliar.length = !5) {
        var1--;
      }
    }

  }
//logica para crear el array de la letra N sin repetir
  if (letraNUnicos.length != 5) {

    let var1 = 6;
    while (letraNUnicos.length < var1 + 1) {
      letraNUnicos.push(guardarLetraN())

      let arryAuxiliar = [...new Set(letraNUnicos)]
      letraNUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)

      console.log("sin repetir " + letraNUnicos);
      if (arryAuxiliar.length = !5) {
        var1--;
      }
    }
  }

//logica para crear el array de la letra G
  if (letraGUnicos.length != 5) {
    let var1 = 6;

    while (letraGUnicos.length < var1) {

      letraGUnicos.push(guardarLetraG())
      let arryAuxiliar = [...new Set(letraGUnicos)]
      letraGUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)
      if (arryAuxiliar.length = !5) {
        var1--;
      }

    }

  }
//logica para crear el array de la letra O
  if (letraOUnicos.length != 5) {
    let var1 = 6;
  
    while (letraOUnicos.length < var1 + 1) {
      letraOUnicos.push(guardarLetraO())

      let arryAuxiliar = [...new Set(letraOUnicos)]
      letraOUnicos = arryAuxiliar.splice(0, arryAuxiliar.length)

      if (arryAuxiliar.length = !5) {
        var1--;
      }

    }

  }

  console.log("DEFINITIVA B " + letraBUnicos);
  console.log("DEFINITIVA I " + letraIUnicos);
  console.log("DEFINITIVA N " + letraNUnicos);
  console.log("DEFINITIVA G " + letraGUnicos);
  console.log("DEFINITIVA O " + letraOUnicos);


  pintar2.innerHTML += `
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
<th></th>
<th>${letraGUnicos[2]}</th>
<th>${letraOUnicos[2]}</th>             
</tr>

<tr>
<th>${letraBUnicos[3]}</th>
<th>${letraIUnicos[3]}</th>  
<th>${letraNUnicos[3]}</th>
<th>${letraGUnicos[3]}</th>
<th>${letraOUnicos[3]}</th> 

<tr>
<th>${letraBUnicos[4]}</th>
<th>${letraIUnicos[4]}</th>  
<th>${letraNUnicos[4]}</th>
<th>${letraGUnicos[4]}</th>
<th>${letraOUnicos[4]}</th>             
</tr>

</tr>
`

}


pintarCarton2();
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