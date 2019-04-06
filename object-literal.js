// Cliente de EDteam

const clienteEDteam = {
    nombre : "Beto",
    apellido : "Quiroga",
    email: "beto@ed.team",
    pass : "Hasl%6As#$"
}

// sintaxis punto
console.log(clienteEDteam.nombre)

// sintaxis corchete
console.log(clienteEDteam["nombre"])

/* Ejemplo 2 */
let na = "nom";
let me = "bre";

const tabla = {
    [`${na}${me}`] : "Beto",
}

console.log(tabla)

/* Ejemplo 3 */
// Cliente Gym
const clienteGym = {
    nombre: "Beto",
    edad : 28,
    peso : 85,
    altura : 175,
    fechaRegistro : "22/02/2019"
}

// Cliente Gym 2
const clienteGym2 = {
    nombre: "Alberto",
    edad : 25,
    peso : 80,
    altura : 175,
    fechaRegistro : "22/02/2018"
}

// Cliente Gym 
const clienteGym3 = {
    nombreCompleto : "Beto Quiroga",
    edad : "25",
    fechaDeRegistro : "22/03/2019"
}
console.log(clienteGym3)

const clientes = [clienteGym, clienteGym2]