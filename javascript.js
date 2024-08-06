//alert("Hola mundo");

let nombre = "Antonia";

console.log(nombre);

nombre = "Pepe";

console.log(nombre);

let precio = 36;
console.log("El precio es: " + precio);
precio = precio * 1.1;
console.log("Precio actualizado: " + precio);

const nombre2 = "Palmera";
console.log(nombre2);

precio2 = "46";
precio3 = "7";

resultado = precio2 + 7;
console.log(resultado);

resultado2 = precio2 + precio3;
console.log(resultado2);

let cantidad = 2;
let precioProducto = 46.5;
let total = cantidad * precioProducto;

let nom = "Pepe ";
let apellido = "Garcia";
let nombrecompleto = nom + apellido;
console.log(nombrecompleto);

let esFinde = true;
console.log();

let cantidad1 = 7;
let cantidad2 = 2;
cantidad1 = cantidad1 +1;
cantidad1++;
cantidad1+=1;
cantidad2--;
cantidad2-=1;

//console.log(cantidad1 % cantidad2);

//console.log(cantidad1 != cantidad2);

// let planta1 = "cactus";
// let planta2 = "cactus";
// console.log(planta1 == planta2)

let estaSobrio = true;
let tieneCarnet = true;
let esmayor = true;
let puedeconducir = estaSobrio && tieneCarnet && esmayor;
console.log("¿Puede conducir? " + puedeconducir);

let esfinde = false;
let esverano = true;

let voydepaseo = esFinde  || esverano;
console.log("¿Voy de paseo? " + voydepaseo);

let verdadero = null;
console.log(!verdadero);

let texto = "En un lugar de la Mancha donde no";
let texto2 = "de cuyo nombre no quiero acordarme"

let longitudtexto1 = texto.length
let longitudtexto2 = texto2.length
let esmaslargo = longitudtexto1 > longitudtexto2

//Muestra la longitud o cantidad de caracteres del string


console.log("El texto primero es más largo: " + esmaslargo);
console.log(texto.length);

console.log(texto.toLowerCase());
console.log(texto.toUpperCase());
console.log(texto);




