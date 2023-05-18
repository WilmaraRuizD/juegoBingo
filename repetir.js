alert("Es logica para no repetir ");

//console.log(guardarLetraB());

let letraB=[];
let letraI=[];
let letraN=[];
let letraG=[];
let letraO=[];

let pintar1=document.getElementById("letraB");

function pintar(){

for(let i=0;i<5;i++){

letraB.push(guardarLetraB());
letraI.push(guardarLetraI());
letraN.push(guardarLetraN());
letraG.push(guardarLetraG());
letraO.push(guardarLetraO());


 }
//Se eliminan numeros repetidos iterando a set 
const letraBUnicos=  [...new Set(letraB)];
const letraIUnicos=  [...new Set(letraI)];
const letraNUnicos=  [...new Set(letraN)];
const letraGUnicos=  [...new Set(letraG)];
const letraOUnicos=  [...new Set(letraO)];


if(letraBUnicos.length!=5){
  console.log("entro a while")
  letraBUnicos.push(guardarLetraB())
 }



if(letraIUnicos.length!=5){
  console.log("Es alerta");
  letraIUnicos.push(guardarLetraI())
 }

 if(letraNUnicos.length!=5){
  console.log("Es alerta");
  letraNUnicos.push(guardarLetraN())
 }

 if(letraGUnicos.length!=5){
  console.log("Es alerta");
  letraGUnicos.push(guardarLetraG())
 }

 if(letraOUnicos.length!=5){
  console.log("Es alerta");
  letraOUnicos.push(guardarLetraO())
 }

console.log("DEFINITIVA B " +letraBUnicos);
console.log("DEFINITIVA I " +letraIUnicos);
console.log("DEFINITIVA N " +letraNUnicos);
console.log("DEFINITIVA G " +letraGUnicos);
console.log("DEFINITIVA O " +letraOUnicos);


pintar1.innerHTML+=`
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



  pintar();

  



 
/*randon letra B  */
function guardarLetraB(){
  min=1;
  max=15;
 var b = Math.floor(Math.random()*(max-min)+min);
 return b;
}

/*randon letra I  */
function guardarLetraI(){
  min=16;
  max=30;
 var b = Math.floor(Math.random()*(max-min)+min);
 return b;
}

/*randon letra N  */
function guardarLetraN(){
  min=31;
  max=45;
 var b = Math.floor(Math.random()*(max-min)+min);
 return b;
}

/*randon letra G  */
function guardarLetraG(){
  min=46;
  max=60;
 var b = Math.floor(Math.random()*(max-min)+min);
 return b;
}

/*randon letra O */
function guardarLetraO(){
  min=61;
  max=75;
 var b = Math.floor(Math.random()*(max-min)+min);
 return b;
}