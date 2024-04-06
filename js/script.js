
function insertarNombre(evento) {
    evento.preventDefault()

    let nombre = document.getElementById("nombre").value;

    if (nombre == "" || nombre.length < 3 || typeof nombre == 'number'){
        alert("Ingresa un nombre que sea válido")
    }
    else{       
        let opcion = "<li>" + nombre + "</li>"
        let lista = document.getElementById("lista")
        lista.innerHTML += opcion;      
        ingreso.reset()  
    }    
}
