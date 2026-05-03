/**
 * TODO Guía para aprender JavaScript de forma sencilla, paso a paso.
 * TODO Esta guía va desde lo más básico hasta conceptos modernos.
 * TODO Está pensada para que cualquier persona pueda entender sin mucho lenguaje técnico.
 */

// -------------------------------------------------------------
// TODO 1. Qué es JavaScript
// -------------------------------------------------------------
// JavaScript es el lenguaje que hace que una página web responda,
// que muestre datos, valide formularios y genere efectos dinámicos.
// También se usa en servidores con Node.js, aplicaciones móviles y más.
// En esta guía veremos cómo funciona, por qué sirve y cuándo usar cada parte.

// -------------------------------------------------------------
// TODO 2. Variables y tipos de datos básicos
// -------------------------------------------------------------

// 'const' guarda valores que no cambian. Es la opción más segura.
const nombre = "Ana"; // Texto
const edad = 28; // Número
const esDesarrollador = true; // Booleano: true o false

// 'let' guarda valores que pueden cambiar con el tiempo.
let ciudad = "Madrid";
ciudad = "Barcelona"; // Aquí la variable cambia su valor.

// 'var' existe en JavaScript antiguo, pero hoy se prefiere evitarla.
// var ciudad = "Madrid";

// Valores especiales:
let valorNoDefinido; // undefined: la variable existe, pero no tiene valor.
const valorNulo = null; // null: no hay valor a propósito.

// Tipos de dato básicos:
const texto = "Hola"; // string: cadena de texto
const numero = 42; // number: números enteros y decimales
const booleano = false; // boolean: true o false

// Truthy y falsy:
// JavaScript convierte automáticamente ciertos valores a verdadero o falso
// cuando los usas en condiciones. Esto ayuda a decidir si algo debe ejecutarse.
// TODO revisar el archivo tipos_de_datos.js

const valoresTruthy = ["hola", 1, -1, {}, [], true];
const valoresFalsy = [false, 0, "", null, undefined, NaN];


// -------------------------------------------------------------
// TODO 3. Operadores básicos
// ------------------------------------------------
const suma = 10 + 5;
const resta = 10 - 5;
const multiplicacion = 10 * 5;
const division = 10 / 5;
const residuo = 10 % 3; // resto de la división
const esIgual = numero === 42; // comparación estricta

// -------------------------------------------------------------
// TODO 4. Arrays y objetos: colecciones de datos
// -------------------------------------------------------------

// Array: lista ordenada de elementos.
const frutas = ["manzana", "plátano", "pera"];

// Objeto: datos organizados por nombre.
const producto = {
  nombre: "Camiseta",
  precio: 20,
  disponible: true,
};

// Leer datos:
const primeraFruta = frutas[0]; // primer elemento del array
const precioProducto = producto.precio; // valor dentro del objeto
console.log(primeraFruta, precioProducto);

// -------------------------------------------------------------
// TODO 5. Strings: trabajar con texto
// -------------------------------------------------------------

const saludo = "Hola";
const bienvenida = `Hola ${nombre}, bienvenido a JavaScript.`; // Plantilla con valores.

console.log(bienvenida.length); // Cuántos caracteres tiene.
console.log(bienvenida.toUpperCase()); // Convierte todo a mayúsculas.
// salida: Hola Ana, bienvenida a JavaScript

console.log(bienvenida.includes("JavaScript")); // Comprueba si la palabra está.
console.log(bienvenida.replace("JavaScript", "el curso")); // salida: Hola Ana, bienvenida a el curso

// -------------------------------------------------------------
// TODO 6. Condicionales: tomar decisiones fáciles
// -------------------------------------------------------------

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Aún eres menor de edad.");
}

// switch es útil cuando tienes varias opciones distintas.
switch (ciudad) {
  case "Madrid":
    console.log("Vives en Madrid.");
    break;
  case "Barcelona":
    console.log("Vives en Barcelona.");
    break;
  default:
    console.log("Vives en otra ciudad.");
}

const mensajeEdad = edad >= 18 ? "Adulto" : "Joven";
console.log(mensajeEdad);

// -------------------------------------------------------------
// TODO 7. Ciclos: repetir acciones paso a paso
// -------------------------------------------------------------
// Los ciclos permiten ejecutar el mismo bloque de código varias veces.
// Se usan cuando necesitas repetir tareas, recorrer listas o esperar hasta que
// se cumpla una condición.

// for: ideal cuando ya conoces cuántas veces quieres repetir.
// Ejemplo típico: recorrer un array con índices.
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

// for...of: ideal cuando quieres leer cada elemento directamente,
// sin manejar índices.
for (const fruta of frutas) {
  console.log("Voy a comprar:", fruta);
}

// while: ideal cuando la repetición depende de una condición que puede cambiar.
// Se usa cuando no sabes de antemano cuántas vueltas habrá.
let cuenta = 0;
while (cuenta < 3) {
  console.log("Cuenta", cuenta);
  cuenta += 1;
}

// do...while: similar a while, pero se ejecuta al menos una vez antes de revisar la condición.
let intento = 0;
do {
  console.log("Intento", intento);
  intento += 1;
} while (intento < 2);

// -------------------------------------------------------------
// TODO 8. Funciones: bloques de código reutilizables
// -------------------------------------------------------------

function sumar(a, b) {
  return a + b;
}
console.log(sumar(3, 7));

const restar = (a, b) => a - b;
console.log(restar(10, 4));

const presentar = (nombre = "Amigo") => `Hola ${nombre}`;
console.log(presentar());
console.log(presentar("Carla"));

const sumarTodos = (...numeros) => {
  return numeros.reduce((total, numero) => total + numero, 0);
};
console.log(sumarTodos(1, 2, 3, 4));

const masNumeros = [...numeros, 6, 7];
console.log(masNumeros);

const nuevoProducto = { ...producto, color: "azul" };
console.log(nuevoProducto);

// -------------------------------------------------------------
// TODO 9. Métodos nativos de arrays y cuándo usarlos
// -------------------------------------------------------------

// map: Crea un nuevo array transformando cada elemento.
// Se usa cuando quieres cambiar todos los elementos de un array sin modificar el original.
// Ejemplo: Duplicar cada número.
const dobles = numeros.map((numero) => numero * 2);
console.log("map ->", dobles);

// filter: Crea un nuevo array con solo los elementos que pasan una condición.
// Se usa para seleccionar elementos específicos de un array.
// Ejemplo: Obtener solo los números pares.
const pares = numeros.filter((numero) => numero % 2 === 0);
console.log("filter ->", pares);

// find: Encuentra el primer elemento que cumple una condición.
// Se usa cuando necesitas buscar un elemento específico en el array.
// Ejemplo: El primer número mayor a 3.
const primeroGrande = numeros.find((numero) => numero > 3);
console.log("find ->", primeroGrande);

// some: Verifica si al menos un elemento cumple una condición.
// Se usa para comprobar si existe al menos un elemento que pase una prueba.
// Ejemplo: ¿Hay algún número par?
const hayPares = numeros.some((numero) => numero % 2 === 0);
console.log("some ->", hayPares);

// every: Verifica si todos los elementos cumplen una condición.
// Se usa para confirmar que cada elemento en el array pase una prueba.
// Ejemplo: ¿Todos los números son positivos?
const todosPositivos = numeros.every((numero) => numero > 0);
console.log("every ->", todosPositivos);

// forEach: Ejecuta una función para cada elemento del array.
// Se usa cuando quieres hacer algo con cada elemento, como imprimir o modificar algo externo.
// No devuelve un nuevo array, solo ejecuta acciones.
// Ejemplo: Mostrar cada número con su índice.
numeros.forEach((numero, index) => {
  console.log(`forEach -> índice ${index}: ${numero}`);
});

// reduce: Reduce el array a un solo valor acumulando resultados.
// Se usa para combinar todos los elementos en un resultado único, como sumar o concatenar.
// Ejemplo: Sumar todos los números.
const sumaTotal = numeros.reduce((acumulado, numero) => acumulado + numero, 0);
console.log("reduce ->", sumaTotal);

// slice: Crea una copia superficial de una porción del array.
// Se usa para obtener una parte del array sin modificar el original.
// Ejemplo: Copiar elementos desde el índice 1 hasta el 4 (sin incluir el 4).
const copiaNumeros = numeros.slice(1, 4);
console.log("slice ->", copiaNumeros);

// splice: Cambia el contenido del array eliminando o reemplazando elementos.
// Se usa para modificar el array original, agregando o quitando elementos.
// Ejemplo: Eliminar 1 elemento empezando desde el índice 2.
const numerosParaSplice = [...numeros];
numerosParaSplice.splice(2, 1);
console.log("splice ->", numerosParaSplice);

// sort: Ordena los elementos del array.
// Se usa para organizar el array en un orden específico.
// Ejemplo: Ordenar números de menor a mayor.
const ordenAscendente = [...numeros].sort((a, b) => a - b);
console.log("sort ->", ordenAscendente);

// -------------------------------------------------------------
// TODO 10. Métodos y funciones útiles para objetos
// -------------------------------------------------------------

const persona2 = {
  nombre: "Sara",
  edad: 25,
  ciudad: "Valencia",
};

// Object.keys: Obtiene un array con las claves (nombres de propiedades) del objeto.
// Se usa para saber qué propiedades tiene un objeto.
console.log("keys ->", Object.keys(persona2));
/* Salida / output
let keys = Object.values(persona2);
se mostrará así en la consola:
  keys -> ['nombre', 'edad', 'ciudad'];
*/

// Object.values: Obtiene un array con los valores de las propiedades del objeto.
// Se usa para acceder a todos los valores sin las claves.
console.log("values ->", Object.values(persona2));
/* Salida / output
let values = Object.values(persona2);
se mostrará así en la consola:
  values -> ['Sara', 25, 'Valencia'];
*/

// Object.entries: Obtiene un array de arrays, cada uno con [clave, valor].
// Se usa para iterar sobre propiedades y valores juntos.
console.log("entries ->", Object.entries(persona2));
/* Salida / output
let entries = Object.entries(persona2);
se mostrará así en la consola:
  entries -> [
    ['nombre', 'Sara'],
    ['edad', 25],
    ['ciudad', 'Valencia']
  ];
*/


// Spread operator (...) en objetos: Crea una copia del objeto y agrega o modifica propiedades.
// Se usa para copiar objetos sin modificar el original.
const copiaPersona2 = { ...persona2, profesion: "Diseñadora" };
console.log("spread objeto ->", copiaPersona2);

// hasOwnProperty: Verifica si el objeto tiene una propiedad específica.
// Se usa para comprobar si una propiedad existe directamente en el objeto.
console.log("Tiene edad?", persona2.hasOwnProperty("edad"));

// Desestructuración: Extrae propiedades del objeto en variables separadas.
// Se usa para acceder fácilmente a propiedades sin repetir el nombre del objeto.
const { nombre: nombrePersona, ciudad: ciudadPersona } = persona2;
console.log("desestructuración ->", nombrePersona, ciudadPersona);

// -------------------------------------------------------------
// TODO 11. Console: más allá de console.log
// -------------------------------------------------------------
// Console es una herramienta para mostrar información en la consola del navegador o terminal.
// Se usa para depurar código, mostrar mensajes y medir tiempos.

// console.log: Muestra un mensaje normal en la consola.
// Se usa para imprimir valores o mensajes durante el desarrollo.
console.log("Mensaje normal");

// console.info: Similar a log, pero indica información útil.
// Se usa para mensajes informativos.
console.info("Información útil");

// console.warn: Muestra una advertencia en amarillo.
// Se usa para alertar sobre posibles problemas que no detienen el código.
console.warn("Advertencia: revisa esto");

// console.error: Muestra un error en rojo.
// Se usa para errores que requieren atención.
console.error("Error simulado");

// console.table: Muestra datos en forma de tabla.
// Se usa para visualizar arrays de objetos de manera clara.
console.table([
  { nombre: "Ana", edad: 28 },
  { nombre: "Luis", edad: 32 },
]);

// console.group y console.groupEnd: Agrupa mensajes en la consola.
// Se usa para organizar la salida y hacerla más legible.
console.group("Grupo de ejemplo");
console.log("Dentro del grupo");
console.groupEnd();

// console.time y console.timeEnd: Mide el tiempo que tarda un bloque de código.
// Se usa para optimizar rendimiento.
console.time("tiempoEjemplo");

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.timeEnd("tiempoEjemploFinal");

// console.assert: Muestra un error si la condición es falsa.
// Se usa para verificar asunciones durante el desarrollo.
console.assert(edad > 18, "La edad debe ser mayor a 18");

// -------------------------------------------------------------
// TODO 12. Funciones globales de números, strings, JSON y Math
// -------------------------------------------------------------

// parseInt: Convierte una cadena a un número entero.
// Se usa cuando tienes texto que representa un número y quieres el entero.
// El segundo parámetro es la base (10 para decimal).
const entero = parseInt("42", 10);
// parseFloat: Convierte a número decimal.
const decimal = parseFloat("3.14"); 
// Number: Convierte a número, más estricto.
const numeroDesdeString = Number("50"); 

console.log(
  "parseInt/parseFloat/Number ->",
  entero,
  decimal,
  numeroDesdeString,
);

// String: Convierte un valor a cadena de texto.
// Se usa para asegurar que algo sea texto.
const textoNumero = String(123);
// Boolean: Convierte a booleano (true/false).
// Se usa para convertir valores a verdadero o falso.
const booleanoDesdeTexto = Boolean("");
console.log("String/Boolean ->", textoNumero, booleanoDesdeTexto);

// JSON.stringify: Convierte un objeto a texto JSON.
// Se usa para enviar datos a un servidor o guardar en archivos.
const textoJSON = JSON.stringify({ curso: "JavaScript", nivel: "básico" });
// JSON.parse: Convierte texto JSON a objeto.
// Se usa para recibir datos de un servidor.
const objetoDesdeJSON = JSON.parse(textoJSON);
console.log("JSON ->", textoJSON, objetoDesdeJSON);

// Date: Crea un objeto de fecha.
// Se usa para trabajar con fechas y horas.
const hoy = new Date();
console.log("Fecha actual:", hoy.toISOString());

// Math: Funciones matemáticas.
// Se usa para cálculos avanzados como redondeo, aleatorios, etc.
console.log("Math.min ->", Math.min(3, 7, 1)); // Mínimo
console.log("Math.max ->", Math.max(3, 7, 1)); // Máximo
console.log("Math.round ->", Math.round(4.6)); // Redondea al entero más cercano
console.log("Math.random ->", Math.random()); // Número aleatorio entre 0 y 1
console.log("Math.ceil ->", Math.ceil(4.1)); // Redondea hacia arriba
console.log("Math.floor ->", Math.floor(4.9)); // Redondea hacia abajo

// -------------------------------------------------------------
// TODO 13. POO: programación orientada a objetos sencilla
// -------------------------------------------------------------
// La Programación Orientada a Objetos (POO) es una forma de organizar el código
// agrupando datos y funciones relacionadas en "objetos". Tiene 4 pilares principales:
//
// 1. Encapsulamiento: Oculta los detalles internos de un objeto y expone solo
//    lo necesario. Protege los datos y evita cambios accidentales.
//    Ejemplo: Usar métodos para acceder a propiedades privadas.
//
// 2. Abstracción: Simplifica la complejidad enfocándose en lo esencial.
//    Ignora detalles innecesarios para hacer el código más fácil de usar.
//    Ejemplo: Una clase "Coche" que maneja el motor sin mostrar cómo funciona.
//
// 3. Herencia: Permite que una clase "hija" herede propiedades y métodos de una "padre".
//    Reutiliza código y crea jerarquías.
//    Ejemplo: "Estudiante" hereda de "Persona" y agrega propiedades específicas.
//
// 4. Polimorfismo: Permite que objetos de diferentes clases respondan de manera
//    diferente a la misma acción. Hace el código flexible.
//    Ejemplo: Un método "hablar" que funciona diferente en "Perro" y "Gato".

class PersonaClase {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

const personaClase = new PersonaClase("Luis", 32);
console.log(personaClase.saludar());

class Estudiante extends PersonaClase {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  estudiar() {
    return `${this.nombre} está estudiando ${this.curso}.`;
  }
}

const estudiante = new Estudiante("Marta", 21, "JavaScript");
console.log(estudiante.estudiar());

// -------------------------------------------------------------
// TODO 14. Manejo de errores mejor explicado
// -------------------------------------------------------------
// Los errores pueden ocurrir cuando algo sale mal. JavaScript tiene try, catch, finally
// para manejarlos sin que el programa se detenga.

// try: Bloque donde pones código que podría fallar.
// catch: Se ejecuta si hay un error en try.
// finally: Se ejecuta siempre, haya error o no.
// Se usa para prevenir crashes y manejar situaciones inesperadas.

function dividirSeguro(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir entre cero."); // throw: Lanza un error manualmente.
    }
    return a / b;
  } catch (error) {
    console.error("Error en dividirSeguro:", error.message);
    return null;
  } finally {
    console.log("Se ejecuta siempre, haya error o no.");
  }
}

console.log(dividirSeguro(10, 2));
console.log(dividirSeguro(10, 0));

// -------------------------------------------------------------
// TODO 15. Async / await y fetch: datos reales en el navegador
// -------------------------------------------------------------
// JavaScript puede hacer tareas que toman tiempo, como pedir datos a un servidor.
// Promise: Representa un valor que estará disponible en el futuro.
// async/await: Hace que el código asíncrono se vea como síncrono.
// fetch: Pide datos de una URL (API).

// Promise básica: Crear una promesa que se resuelve después de un tiempo.
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`He esperado ${ms}ms`), ms);
  });
}

// async function: Función que puede usar await para esperar promesas.
async function ejemploAsync() {
  console.log("Antes de la espera");
  const mensaje = await esperar(1000); // await: Espera a que la promesa se resuelva.
  console.log(mensaje);
  console.log("Después de la espera");
}

ejemploAsync();

// fetch: Obtener datos de una API, devuelve una promesa con la respuesta.
// Se usa para conectar con servidores y obtener información.
async function obtenerUsuario() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!respuesta.ok) {
      throw new Error(`Error de red: ${respuesta.status}`);
    }
    const usuario = await respuesta.json(); // Convertir respuesta a JSON.
    console.log("Usuario recibido:", usuario);
  } catch (error) {
    console.error("No se pudo obtener el usuario:", error.message);
  }
}

// Para probar fetch, descomenta la línea siguiente en un navegador:
// obtenerUsuario();

// -------------------------------------------------------------
// TODO 16. DOM: acceder, cambiar, estilos y eventos
// -------------------------------------------------------------
// DOM (Document Object Model) es la representación de la página web como un árbol.
// Permite cambiar el HTML, CSS y responder a acciones del usuario.
// Se usa en navegadores para hacer páginas interactivas.
// TODO: revisar el index.html para ver el manejo del DOM.

// -------------------------------------------------------------
// TODO 17. Modularización: ES6 y CommonJS
// -------------------------------------------------------------

// En ES6 se usa 'export' y 'import'.
// export const PI = 3.14;
// import { PI } from './guia_aprendizaje_js.js';

// En CommonJS (Node.js clásico) se usa 'module.exports' y 'require':
// module.exports = { sumar, restar };
// const { sumar, restar } = require('./guia_aprendizaje_js.js');

// -------------------------------------------------------------
// TODO 18. Buenas prácticas y consejos claros
// -------------------------------------------------------------
// - Usa nombres claros para variables y funciones.
// - Prefiere const cuando el valor no cambia.
// - Divide el código en partes pequeñas y fáciles de entender.
// - Escribe comentarios que expliquen por qué, no qué hace el código.
// - Usa las funciones nativas y los métodos del lenguaje cuando sirvan.
// - Prueba cada cambio con un ejemplo pequeño.

// -------------------------------------------------------------
// TODO 19. Documentar con JSDoc: ejemplo simple
// -------------------------------------------------------------
/**
 * Suma dos números y devuelve el resultado.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} Resultado de la suma.
 */
function sumarDocumentado(a, b) {
  return a + b;
}

console.log(sumarDocumentado(5, 6)); // 11

// Fin de la guía.
