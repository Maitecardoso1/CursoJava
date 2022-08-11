const listaPanes = [
    {
        nombre: "Liviano",
        precio: "250$",
        peso: "400 grs",
    },
    {
        nombre: "Artesano",
        precio: "350$",
        peso: "500 grs",
    },
    {
        nombre: "Pancho",
        precio: "200$",
        peso: "300 grs",
    },
    {
        nombre: "Hamburguesa",
        precio: "200$",
        peso: "300 grs",
    },
]

let accion = ""

while (accion != "SALIR"){
    accion = prompt("Ingrese COMPRAR|VER|AGREGAR|BORRAR|SALIR")
    switch (accion){
        case "COMPRAR":
            comprarPan()
            break;
        case "VER":
            verPan()
            break;
        case "AGREGAR":
            agregarPan()
            break;
        case "BORRAR":
            borrarPan()
            break;
        case "SALIR":
            alert("Estoy saliendo")
            break;
        default:
            alert("Ingrese una acción válida")
            break;
    }
}

function comprarPan(){
    let panElegido = prompt("Ingrese el nombre del pan comprar")
    const panBuscado = listaPanes.find((pan)=>{
        return pan.nombre == panElegido
    })
    if(panBuscado){
        console.log("Compré el siguiente pan:")
        console.log(panBuscado)
    } else {
        console.log("No se encontró el pan")
    }
}

function verPan(){
    listaPanes.forEach((pan)=>{
        alert(`Nombre: ${pan.nombre} Precio: ${pan.precio} Peso: ${pan.peso}`)
    })
}

function agregarPan(){
    let nuevoNombre = prompt("Ingrese el nombre del pan:")
    let nuevoPrecio = prompt("Ingrese el precio del pan:")
    let nuevoPeso = prompt("Ingrese el peso del pan:")

    const nuevoPan = {
        nombre: nuevoNombre,
        precio: nuevoPrecio,
        peso: nuevoPeso,
    }

    const panBuscado = listaPanes.some((pan)=>{
        return pan.nombre == nuevoNombre
    })

    if (panBuscado){
        alert("El pan ya existe")
    } else {
        listaPanes.push(nuevoPan)
    }
}

function borrarPan(){
    let panElegido = prompt("Ingrese el nombre del pan a borrar")
    let panEncontrado = 0

    listaPanes.forEach((pan,lista)=>{
        if (pan.nombre == panElegido){
            panEncontrado = lista
        }
    }) 

    if(panEncontrado){
        listaPanes.splice(panEncontrado,1)
    } else {
        alert("No se encontró el pan")
    }
}
