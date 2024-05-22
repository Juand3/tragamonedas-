window.onload=inicio;
//var credito=Math.floor(Math.random()*4)+9;
let saldo= prompt("introduzca cantidad de monedas que desea")
let credito=Number(saldo)
let imagenes=["dolar.png","manzana.png","coco.png",
"ciruela.png","dolar.png","limon(1).png",
"pera.png","pina.png","sandia.png","uva.png"]
let premios=[3,2,3,2,2,3,6,5,5,5];
let numeros_actuales=[];
let activos=false;



function inicio(){
document.getElementById("tirar").onclick=lanzar_inicio;
document.getElementById("fotico").onclick=cerrar;
au=document.getElementById("sonido");
for(let k=0;k<document.getElementsByClassName("boton").
    length;k++){
    document.getElementsByClassName("boton")[k].onclick=
    lanzar_uno;

}
actualizar();
}


function lanzar_inicio(){
    if (credito>0){
    activos=true;  
    numeros_actuales=[];
for(let k=0;k<document.getElementsByClassName("boton").
    length;k++){
    numeros_actuales.push(escoger_numero(""));
    mostrar_imagen(k,numeros_actuales[k]);


}
  comparar();
}
}
function lanzar_uno(){
   if (credito>0 && activos==true){
   let hijos=this.parentNode.parentNode.children;
   for (let k=0;k<hijos.length;k++){
        if (this.parentNode == hijos[k]){
            numeros_actuales[k]=escoger_numero(numeros_actuales[k]);
            mostrar_imagen(k,numeros_actuales[k]);
            comparar();
            break;
    

        }
    
    }
}
}
function escoger_numero(actual){ 
   do{
       var azar=Math.floor(Math.random()*imagenes.length); 
   } while(azar==actual)

 return azar;

}
function mostrar_imagen(num,im){
    document.getElementsByClassName("imagen")[num].getElementsByTagName("img")[0].src="img/"+imagenes[im];

}
function comparar(){ 
if(numeros_actuales[0]==numeros_actuales[1]&&
    numeros_actuales[1]==numeros_actuales[2]){
    //tenemos premio
    activos=false;
    let p=premios[numeros_actuales[0]];
    let mensaje=`Haz Ganado ${p} monedas<div>`;
    for(let k=0; k<p; k++){
        mensaje+=`<img src="img/moneda-de-dolar.png">`;
    }
    mensaje+=`</div>`;
    mostrar_mensaje(mensaje);
    credito+=premios[numeros_actuales[0]];

}
credito--;
actualizar();
}

function actualizar(){
    document.getElementById("dinero").innerHTML=credito;
    document.getElementById("monedas").innerHTML="";
    for (let k=1;k<=credito;k++){
        document.getElementById("monedas").innerHTML += `
        <img src="img/moneda-de-dolar.png">`;
    }
    if(credito<1)
       mostrar_mensaje("<b>GAME OVER</b><div class='subtitulo'>***No te queda mas dinero***</div>");
       
    
  }

function mostrar_mensaje(m){
    document.getElementById("velo").style.display="flex";
    document.getElementById("mensaje").innerHTML=m;

}
function cerrar(){
    document.getElementById("velo").style.display="none";
    


}





