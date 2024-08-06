// Objetos en JavaScript
// let persona = {
//     nombre: 'Pepa',
//     edad: 28,
//     ciudad: 'Granada'
// }

// console.log(persona.edad);
// const alumnos = [
//     {nombre: 'Frank', edad: 18, ciudad: 'Granada'},
//     {nombre: 'Antonio', edad: 20, ciudad: 'Maracena'},
//     {nombre: 'Simón', edad: 23, ciudad: 'Jaén'},
//     {nombre: 'María', edad: 26, ciudad: 'Almería'},
// ];

// console.log(alumnos);

// alumnos.forEach(alumno => {
//     console.log(alumno.nombre + " " + alumno.edad);
// });

//Ejercicio generador de citas famosas y autor

let citas = [
    {cita:   'Es importante comprender quién pone en práctica la violencia: si son los que provocan la miseria o los que luchan contra ella', 
    autor:  'Julio Cortázar'},
    {cita:   'Más que mil palabras inútiles, vale una sola que otorgue paz',
    autor:  'Buda'},
    {cita:   'No hay camino para la paz, la paz es el camino',
    autor:  'Mahatma Gandhi'},
    {cita:   'Los pueblos alzados en armas jamás alcanzarán la prosperidad',
    autor:  'Nelson Mandela'},
    {cita:   'La paz no puede mantenerse por la fuerza. Solamente puede alcanzarse por medio del entendimiento',
    autor:  'Albert Einstein'},
    {cita:   'Sueña con un mundo de amor y paz, y lo haremos realidad',
    autor:  'John Lennon'}
]

let elegido = citas.length;
let aleatorio = Math.random() *elegido;
aleatorio = Math.floor(aleatorio);
console.log(`${citas[aleatorio].cita} && ${citas[aleatorio].autor}`)

    document.getElementById("frasetxt").innerHTML = citas[aleatorio].cita;
    document.getElementById("autortxt").innerHTML = citas[aleatorio].autor;
