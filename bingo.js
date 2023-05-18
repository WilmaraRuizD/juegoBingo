//etiquetas del Dom
const circle = document.getElementById("circulo");
const verNumero=document.getElementById("verNumero");

//Variable global 
let colecciones = [];
let   numAle ;
let varauxiliar;

//funcion para escuchar el evento y generar la logica 
function ejecutar(){

  //Generar array;
  numAle = generateRandom()
  colecciones.push(numAle);
  console.log("Coleccion original"+ colecciones);
 //arreglo sin repetir
  let unicos = Array.from(new Set(colecciones));
  console.log("coleccion sin repetidos" + unicos);

 if (colecciones.length>=11){
    console.log("ya se termino la secuencia ");
    return false;

 }else if(colecciones.length!=unicos.length){

   let tamaño=colecciones.length;

   //si hay numeros repetidos 
   
   while(tamaño>unicos.length)
   {
     console.log("ciclo while");
    //genera nuevamente un numero aliatorio. 
     numAle = generateRandom();
     console.log("numero aliatorio para repetir"+ numAle);
   
    //se intercambia el valor de unicos para crear array auxiliar
     let auxiliar = unicos.slice(0, unicos.length);
     console.log("colexion auxiliar"+ auxiliar);
   
   //se agrega nuevo numero aleatorio a array auxiliar
       auxiliar.push(numAle);
       console.log(auxiliar);
   
          unicos= Array.from(new Set(auxiliar));
       console.log("esto es unico corregido"+unicos);
   
       colecciones=unicos.slice(0,unicos.length);
   }

 }else{
  console.log("dato erroneo");
 }
//Se escribe numero en bola 
console.log("coleccion unica final "+unicos);
console.log(unicos[unicos.length-1]);
circle.innerHTML=unicos[unicos.length-1];
//se escribe los elemetos del array que ya han salido.
let lista =document.createElement('a');
lista.textContent=(unicos[unicos.length-1]);

verNumero.appendChild(lista);


}

/* pintar Cartones  */
let arrayLetraB=[];
let arrayLetraI=[];
let arrayLetraN=[];
let arrayLetraG=[];
let arrayLetraO=[];

/* Mostrar 6 veces la letra repetida */
let cartones=document.getElementById('cartones');
cartones.addEventListener('click',function(e){
 for(let i =0;i<6;i++){
  arrayLetraB.push(guardarLetraB());
  arrayLetraI.push(guardarLetraI());
  arrayLetraN.push(guardarLetraN());
  arrayLetraG.push(guardarLetraG());
  arrayLetraO.push(guardarLetraO());
  
 }
 console.log(arrayLetraB);
 console.log(arrayLetraI);
 console.log(arrayLetraN);
 console.log(arrayLetraG);
 console.log(arrayLetraO);

 alert("termino B")

}
)
/*randon letra B  */


function guardarLetraB(){
  min=1;
  max=15;
 var b = Math.floor(Math.random()*(max-min)+min);
 return b;
}
/* rando letra I*/
function guardarLetraI(){
  min=16;
  max=30;
 var i = Math.floor(Math.random()*(max-min)+min);
 return i;
}
/* randon letra n */
function guardarLetraN(){
  min=31;
  max=45;
 var n = Math.floor(Math.random()*(max-min)+min);
 return n;
}

/* randon letra n */
function guardarLetraG(){
  min=46;
  max=60;
 var g = Math.floor(Math.random()*(max-min)+min);
 return g;
}

/* randon letra n */
function guardarLetraO(){
  min=61;
  max=75;
 var o = Math.floor(Math.random()*(max-min)+min);
 return o;
}

// Generar numero aleatorio
function generateRandom() {
  min=0;
  max=10 ;
  var x = Math.floor(Math.random()*(max-min)+min);  
  return x;
}
