class Usuario {
    constructor(nombre, apellido, correo, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.edad = edad
    }

    saludar() {
        return console.log(`Hola, mi nombre es ${this.nombre}`)
    }

    saludarHTML() {
        return document.write(`
            <div>
                <p>
                    Hola, mi nombre es ${this.nombre}
                </p>
            </div>
        `)
    }

    saludarConApellido() {
        return console.log(`Hola, mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`)
    }

    cambiarEdad(nuevaEdad) {
        this.edad = nuevaEdad
    }
}

/* Herencia */
class Profesor extends Usuario{
    constructor(nombre, apellido, correo, edad, experiencia, lenguaje){
        super(nombre, apellido, correo, edad)
        this.experiencia = experiencia
        this.lenguaje = lenguaje
    }
}

class Estudiante extends Usuario{
    constructor(nombre, apellido, correo, edad, activado){
        super(nombre, apellido, correo, edad)
        this.activado = activado
    }
}

let alejandro = new Estudiante(
    "Alejandro",
    "Rodriguez",
    "alejo@gmail.com",
    15,
    true
)

let beto = new Usuario("Beto", "Quiroga", "beto@ed.team", 28)
console.log(beto)

let alexis = new Usuario("Alexis", "Lozada", "alexis@ed.team", 54)
console.log(alexis)