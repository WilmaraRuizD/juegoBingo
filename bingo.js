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
 //arreglo sin repetir
  let unicos = Array.from(new Set(colecciones));

 if (colecciones.length>=75){
  
    return false;

 }else if(colecciones.length!=unicos.length){

   let tamaño=colecciones.length;

   //si hay numeros repetidos 
   
   while(tamaño>unicos.length)
   {
 
    //genera nuevamente un numero aliatorio. 
     numAle = generateRandom();
   
    //se intercambia el valor de unicos para crear array auxiliar
     let auxiliar = unicos.slice(0, unicos.length);
   
   //se agrega nuevo numero aleatorio a array auxiliar
       auxiliar.push(numAle);
       console.log(auxiliar);
   
      unicos= Array.from(new Set(auxiliar));
       colecciones=unicos.slice(0,unicos.length);
   }

 }else{
  console.log("dato erroneo");
 }
//Se escribe numero en bola 

circle.innerHTML=unicos[unicos.length-1];
//se escribe los elemetos del array que ya han salido.
let lista =document.createElement('a');
lista.textContent=(unicos[unicos.length-1]);

console.log("UNICO PRUEBA "+unicos)
//recupera los datos de carto1 almacenados en el localStorage 

letraI=localStorage.getItem("letraI");
letraN=localStorage.getItem("letraN");
letraG=localStorage.getItem("letraG");
letraO=localStorage.getItem("letraO");

//Se optiene el ultimo elemento del array unicos para pintar el carton 

const last = unicos[unicos.length-1];


if(last <=15){
console.log("es B");
letraB=localStorage.getItem("letraB");

console.log("esto es last"+last)



console.log(indexLetraB(last))




}
if((last>15)&&(last<=30)){
  console.log("es I");
  }
  if((last>30)&&(last<=45)){
    console.log("es N");
    }
    if((last>45)&&(last<=60)){
      console.log("es G");
      }if((last>60)&&(last<=75)){
        console.log("es O");
        }


//se pinta la lista con los elementos que han salido. 

verNumero.appendChild(lista);



}

//validar si el numero es igual a el del carton 
function indexLetraB(value){

  console.log(letraB)

 console.log(letraB.length );
  let res = -1;
  for (let i = 0; i < letraB.length; i++) {
    if (letraB[i] === value) {
      console.log(i)
      res = i;
      break;
    }
  }
  return res;

}
// Generar numero aleatorio
function generateRandom() {
  min=1;
  max=75;
  var x = Math.floor(Math.random()*(max-min)+min);  
  return x;
}
