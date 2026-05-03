/**
 * Tipos de datos en JavaScript y la diferencia entre truthy y falsy.
 * Este archivo sirve como referencia rápida para ver cómo se comportan
 * los valores al usarlos dentro de condiciones.
 */


const valoresTruthy = ["hola", 1, -1, {}, [], true];
const valoresFalsy = [false, 0, "", null, undefined, NaN];
// Truthy: valores que JavaScript trata como verdaderos en condiciones.
const verdadero = true;
const falso = false;
const numero = 10;
const texto = "Hola";
const objeto = { nombre: "Ana" };
const arreglo = [1, 2, 3];
// Falsy: valores que JavaScript trata como falsos en condiciones.
const valorNulo = null;
let valorIndefinido;
const valorVacio = "";
const numeroNoValido = NaN;
const cero = 0;

// Truthy: valores que JavaScript trata como verdaderos en condiciones.
if (verdadero) {
    console.log("true es truthy");
}
if (numero) {
    console.log("10 es truthy");
}
if (texto) {
    console.log("Una cadena no vacía es truthy");
}
if (objeto) {
    console.log("Un objeto vacío es truthy");
}
if (arreglo) {
    console.log("Un arreglo vacío es truthy");
}

// Falsy: valores que JavaScript trata como falsos en condiciones.
if (!falso) {
    console.log("false es falsy");
}
if (!valorNulo) {
    console.log("null es falsy");
}
if (!valorIndefinido) {
    console.log("undefined es falsy");
}
if (!valorVacio) {
    console.log("Una cadena vacía es falsy");
}
if (!numeroNoValido) {
    console.log("NaN es falsy");
}
if (!cero) {
    console.log("0 es falsy");
}

// Estos puntos son importantes para entender cómo funcionan
// los condicionales y qué valores se consideran verdaderos o falsos.
