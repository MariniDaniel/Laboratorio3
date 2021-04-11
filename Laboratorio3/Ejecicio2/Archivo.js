
function Limpiar(){
    var num1 = document.getElementById("num1").value ="";
    var num2 = document.getElementById("num2").value="";
}


//sumaaaaas
window.addEventListener("load",cargar);

function cargar(){
   var btn = document.getElementById("btn");
   btn.addEventListener("click",sumar);
}

function sumar(){
    var numeros= document.getElementsById("num");
    var suma=0;
    for (var i = 0; i < numeros.length; i++) {
        suma +=parseInt(numeros[i].value);
        
    }
    
    var resultado = document.getElementsById("resultado");
    resultado.value =suma;
    var parrafo=document.getElementsById("parrafo");
    parrafo.innerHTML=suma;
   
}
