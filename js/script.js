let botonA = document.getElementById("btnagregar");
let botonE = document.getElementById("btneliminar");
let lista = document.getElementById("listado");

botonA.addEventListener("click", function(){
    
    //console.log("Diste click");
    let tarea = document.getElementById("txtTarea");
    let agregarT = document.createElement("li");
    agregarT.textContent = tarea.value;
    
    lista.appendChild(agregarT);

    if(tarea.value !=""){
        lista.appendChild(agregaT);
        tarea.value ="";


        
    }else{

        alert("Favor de completar el campo");
        return false;
    }





});

botonE.addEventListener("click", function(){
    lista.removeChild(lista.lastChild);

});