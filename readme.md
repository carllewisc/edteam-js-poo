# Curso: Programación orientada a objetos con JavaScript - EDteam

La programación orientada a objetos es un paradigma que desde la versión ES6 puede usarse en JavaScript a través de clases. Los temas a tratar son: Clases, Objetos, tipos de objetos, constructores, métodos, propiedades, herencia y mucho mas

# Programación Orientada a Objetos

* Es un PARADIGMA de programación
* Es el más usado hoy en día
* Aplicable a muchos lenguajes

# Paradigma
* Una forma de pensar o actuar, una filosofía
* Una serie de patrones o modelos a seguir
* Un planteamiento común

# POO (OOP)

# Todo es un objeto

# ¿Qué es un objeto?
* Es una abstracción del mundo real
* Es una representación del estado y las acciones que puede realizar algo/alguien

# Atributos
* Características del objeto
* Se refieren al estado actual
* Son modificables y accesibles

# Métodos
* Acciones del objeto
* Se refieren al estado actual
* Son modificables y accesibles

# Objetos Literales - Sintaxis

const nombreObjeto = {
    atributo : valor,
    atributo : valor,
    metodo() => {}
}

const persona = {
    nombre : "Carl",
    edad : 21,
    saludar() => {console.log('Hola')}
}

# Prototipos
* Es la base de toda la programación en JS.
* Ya que todo es un objeto, a la vez todo debe partir de un prototipo.

# this (Scope)
* A partir de ES6 el alcance del this se limita al objeto declarado.
* De una forma global, el this sería igual a window.
