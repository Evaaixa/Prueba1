function calcularEdad(){
// Obtener el nombre de la mascota del input
    let nombre = document.getElementById("nombreMascota").value;

// Obtener la edad de la mascota
let edad = document.getElementById("edadMascota").value;
edad = Number(edad); 

let mensaje = "";

if(edad > 0 && edad < 50){
    // Calcular la edad humana de la mascota
    let edadHumana = edad * 7;
    
    // Crea el mensaje para mostrar
    mensaje = '${nombre} tiene ${edad} años, que equivalen a ${edadHumana} años humanos';
}else{
    mensaje = 'Los datos introducidos no son correctos';
}
//muestro el mensaje por pantalla
document.getElementById('resultado').textContent = mensaje;
}

//Calcula el total de la compra con el tipo de iva selccionado
function calcularImporteTotal(){
    //leyendo datos de pantalla
    let nombre = document.getElementById("nombreCliente").value;
    let importeCompra = document.getElementById("importeCompra").value;
    importeCompra = Number(importeCompra)
    let cbSeleccionado = document.getElementById("cbIva").checked;
    
    //calculo el tipo de iva
    let iva = 21; Number(iva);
    if(cbSeleccionado == true){
        iva = 10;
    }

    //calculo el importe total
    let importeTotal = importeCompra + (importeCompra * iva / 100)
    console.log(importeTotal.toFixed(2));
    // muestro el resultado por pantalla
    let mensaje = 'El importe de la compra con iva es: ${importeTotal}';
    document.getElementById('resultadoCompra').textContent = mensaje
}

