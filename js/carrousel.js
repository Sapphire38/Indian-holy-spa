const carrousel = document.getElementById("home");


changeFondoTres()

function changeFondoUno(){
    
    carrousel.classList.remove("fondo3")
    carrousel.classList.add("fondo1")
    setTimeout(changeFondoDos , 8000) 

}


function changeFondoDos(){
    
    carrousel.classList.remove("fondo1")
    carrousel.classList.add("fondo2")
    setTimeout( changeFondoTres , 8000)
   
}

function changeFondoTres(){
    
    carrousel.classList.remove("fondo2")
    carrousel.classList.add("fondo3")
    
    setTimeout( changeFondoUno, 8000)
    
}




function agregarFade(){
    carrousel.animate([
        // fotogramas clave
        { filter: 'blur(2px)', opacity: '20%'},
        { opacity: '100%', filter: 'blur(0px)'}
        ], {
        // opciones de sincronización
        duration: 1000,
        iterations: 1
      });
}

