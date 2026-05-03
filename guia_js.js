/**
 * Guía práctica de JavaScript moderno
 * -----------------------------------
 * Este archivo está pensado como una guía paso a paso,
 * desde lo más básico hasta conceptos avanzados.
 * Explicaciones claras, ejemplos cortos y buenas prácticas.
 */

// 1. ¿Qué es JavaScript?
// JavaScript es el lenguaje que permite a las páginas web
// hacer cosas dinámicas: responder a clicks, cambiar datos,
// hablar con servidores y mucho más.

// 2. Variables y tipos de dato básicos
// ------------------------------------------------
// const definr una constante
// Usa `const` cuando no vas a cambiar el valor.
const nombre = "María";
const edad = 28;

// Usa `let` cuando el valor puede cambiar.
let estado = "activo";
estado = "inactivo";

// Tipos primitivos más comunes:
const mensaje = "Hola"; // string
const numero = 42; // number
const esVerdadero = true; // boolean
const sinValor = null; // valor intencionalmente vacío
let indefinido; // undefined, todavía no tiene valor

// 3. Operadores básicos
// ------------------------------------------------
const suma = 10 + 5;
const resta = 10 - 5;
const multiplicacion = 10 * 5;
const division = 10 / 5;
const residuo = 10 % 3; // resto de la división
const esIgual = numero === 42; // comparación estricta

// 4. Condicionales
// ------------------------------------------------
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("No eres mayor de edad");
}

// 5. Bucles / ciclos
// ------------------------------------------------
const frutas = ["manzana", "pera", "uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (const fruta of frutas) {
  console.log("Fruta:", fruta);
}

frutas.forEach((fruta, indice) => {
  console.log(`${indice + 1}: ${fruta}`);
});

// 6. Funciones
// ------------------------------------------------
// Función tradicional:
function sumar(a, b) {
  return a + b;
}

// Función flecha (moderna, más compacta):
const multiplicar = (a, b) => a * b;

// Parámetros opcionales y valores por defecto:
function saludar(nombre, estilo = "Hola") {
  return `${estilo}, ${nombre}!`;
}

console.log(sumar(2, 3));
console.log(multiplicar(4, 5));
console.log(saludar("Ana"));
console.log(saludar("Ana", "Buenos días"));

// 7. Objetos
// ------------------------------------------------
const persona = {
  nombre: "Carlos",
  edad: 35,
  lenguaje: "JavaScript",
  saludar: function () {
    return `Hola, soy ${this.nombre}`;
  },
};

console.log(persona.saludar());
console.log(persona.edad);

// Cambiar propiedades del objeto:
persona.edad = 36;
console.log(persona.edad);

// 8. Arrays avanzados
// ------------------------------------------------
const numeros = [1, 2, 3, 4, 5];

// map: transforma cada elemento
const numerosDobles = numeros.map((n) => n * 2);
console.log("Dobles:", numerosDobles);

// filter: filtra elementos según condición
const pares = numeros.filter((n) => n % 2 === 0);
console.log("Pares:", pares);

// reduce: acumula valores
const total = numeros.reduce((acum, valor) => acum + valor, 0);
console.log("Suma total:", total);

// 9. Clases y objetos con comportamiento
// ------------------------------------------------
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  mostrarInfo() {
    return `${this.nombre} - ${this.email}`;
  }
}

const usuario1 = new Usuario("Laura", "laura@ejemplo.com");
console.log(usuario1.mostrarInfo());

// 10. Funciones nativas importantes
// ------------------------------------------------
// parseInt / parseFloat convierten cadenas a números.
const edadTexto = "30";
const edadNumero = parseInt(edadTexto, 10);

// JSON.parse y JSON.stringify convierten entre objetos y texto JSON.
const objetoJSON = JSON.parse('{"curso":"JavaScript","nivel":"básico"}');
const textoJSON = JSON.stringify(objetoJSON);

// Date para trabajar con fechas.
const hoy = new Date();
console.log("Hoy:", hoy.toISOString());

// 11. Manejo de errores
// ------------------------------------------------
try {
  throw new Error("Algo salió mal");
} catch (error) {
  console.error("Error detectado:", error.message);
} finally {
  console.log("Siempre se ejecuta");
}

// 12. Promesas y asincronía
// ------------------------------------------------
const esperar = (milisegundos) =>
  new Promise((resolve) => setTimeout(resolve, milisegundos));

async function ejemploAsync() {
  console.log("Espera 1 segundo...");
  await esperar(1000);
  console.log("Ya pasó 1 segundo");
}

// Llamada al ejemplo asíncrono:
ejemploAsync();

// 13. Buenas prácticas y estilo
// ------------------------------------------------
// - Usa `const` por defecto, `let` solo cuando el valor cambie.
// - Nombra bien las variables: `totalVentas`, `nombreUsuario`.
// - Escribe comentarios claros y breves.
// - Divide el código en funciones pequeñas y específicas.
// - Evita copiar y pegar código idéntico.

// 14. Documentar el código con JSDoc
// ------------------------------------------------
/**
 * Calcula el promedio de una lista de números.
 *
 * @param {number[]} lista - Arreglo de números.
 * @returns {number} Promedio de los valores.
 */
function calcularPromedio(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    return 0;
  }

  const suma = lista.reduce((total, valor) => total + valor, 0);
  return suma / lista.length;
}

console.log(calcularPromedio([10, 20, 30]));

// 15. Modularización en JavaScript
// ------------------------------------------------
// En JavaScript moderno se usan módulos para ordenar el código.
// Aquí hay ejemplos de cómo se hace en ES6 y CommonJS.

// Ejemplo ES6 (archivo separado):
/*
// archivo: utils.js
export function saludar(nombre) {
  return `Hola, ${nombre}`;
}

// archivo: app.js
import { saludar } from './utils.js';
console.log(saludar('Ana'));
*/

// Ejemplo CommonJS (Node.js):
/*
// archivo: utils.cjs
function despedir(nombre) {
  return `Adiós, ${nombre}`;
}
module.exports = { despedir };

// archivo: app.cjs
const { despedir } = require('./utils.cjs');
console.log(despedir('Ana'));
*/

// 16. Resumen de orden de aprendizaje
// ------------------------------------------------
// 1. Variables y tipos.
// 2. Operadores y expresiones.
// 3. Condicionales.
// 4. Bucles.
// 5. Funciones.
// 6. Arrays y objetos.
// 7. DOM / eventos (en browser).
// 8. Clases y objetos.
// 9. Asincronía con promesas y async/await.
// 10. Modularización y buenas prácticas.

// 17. Notas finales
// ------------------------------------------------
// Esta guía está pensada para que puedas leerla, entenderla y experimentar.
// Copia cada sección en tu editor, edita los valores y prueba el resultado.
// Si algo no funciona, revisa los nombres, las llaves y los paréntesis.

console.log("Guía de JavaScript lista para aprender paso a paso.");
