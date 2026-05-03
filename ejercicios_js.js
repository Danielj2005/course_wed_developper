/**
 * TODO Ejercicios y mini proyectos para practicar JavaScript.
 * ------------------------------------------------------
 * Aquí encuentras ejemplos listos para probar.
 * Usa este archivo para experimentar con funciones,
 * arreglos, objetos, condiciones y asincronía.
 */

// TODO 1. Mini proyecto: Calculadora básica
// ------------------------------------------------
function calcular(a, b, operacion) {
  switch (operacion) {
    case "sumar":
      return a + b;
    case "restar":
      return a - b;
    case "multiplicar":
      return a * b;
    case "dividir":
      return b !== 0 ? a / b : "No se puede dividir entre cero";
    default:
      return "Operación no reconocida";
  }
}

console.log("Calculadora:", calcular(10, 5, "sumar"));
console.log("Calculadora:", calcular(10, 5, "dividir"));
console.log("Calculadora:", calcular(10, 0, "dividir"));

// TODO 2. Mini proyecto: Lista de tareas
// ------------------------------------------------
const tareas = [];

function agregarTarea(titulo) {
  tareas.push({
    id: tareas.length + 1,
    titulo,
    completada: false,
  });
}

function completarTarea(id) {
  const tarea = tareas.find((item) => item.id === id);
  if (tarea) {
    tarea.completada = true;
  }
}

function mostrarTareas() {
  return tareas.map((tarea) => `${tarea.id}. ${tarea.titulo} - ${tarea.completada ? '✅' : '❌'}`);
}

agregarTarea("Aprender variables");
agregarTarea("Practicar funciones");
completarTarea(1);
console.log("Tareas:", mostrarTareas());

// TODO 3. Mini proyecto: Validación de datos simples
// ------------------------------------------------
function validarUsuario(usuario) {
  if (!usuario.nombre || typeof usuario.nombre !== "string") {
    return "Nombre inválido";
  }
  if (!usuario.email || !usuario.email.includes("@")) {
    return "Email inválido";
  }
  if (typeof usuario.edad !== "number" || usuario.edad <= 0) {
    return "Edad inválida";
  }
  return "Usuario válido";
}

const usuarioPrueba = {
  nombre: "Sofía",
  email: "sofia@ejemplo.com",
  edad: 25,
};

console.log("Validación de usuario:", validarUsuario(usuarioPrueba));

// TODO 4. Mini proyecto: Juego de adivinar número
// ------------------------------------------------
function juegoAdivinaNumero(intentosMaximos = 5) {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let intentos = 0;

  while (intentos < intentosMaximos) {
    const intento = Math.floor(Math.random() * 10) + 1;
    intentos += 1;
    console.log(`Intento ${intentos}: ${intento}`);
    if (intento === numeroSecreto) {
      return `¡Adivinaste el número ${numeroSecreto} en ${intentos} intentos!`;
    }
  }

  return `No adivinaste. El número secreto era ${numeroSecreto}`;
}

console.log(juegoAdivinaNumero());

// TODO 5. Mini proyecto: Transformación de datos con arrays
// ------------------------------------------------
const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Luis", nota: 5 },
  { nombre: "Marta", nota: 9 },
];

const alumnosAprobados = estudiantes
  .filter((est) => est.nota >= 6)
  .map((est) => `${est.nombre} aprobó con ${est.nota}`);

console.log("Aprobados:", alumnosAprobados);

// TODO 6. Mini proyecto: Manejo de objetos y funciones
// ------------------------------------------------
const pelicula = {
  titulo: "Viaje al espacio",
  año: 2025,
  genero: "Ciencia ficción",
  duracion: 120,
  mostrarDatos: function () {
    return `${this.titulo} (${this.año}) - ${this.genero}`;
  },
};

console.log(pelicula.mostrarDatos());

// TODO 7. Mini proyecto: Datos asíncronos simulados
// ------------------------------------------------
function obtenerDatosSimulados() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        usuario: "Daniel",
        rol: "Front-end",
        aprendiendo: "JavaScript",
      });
    }, 1000);
  });
}

async function mostrarDatos() {
  console.log("Cargando datos...");
  const datos = await obtenerDatosSimulados();
  console.log("Datos recibidos:", datos);
}

mostrarDatos();

// TODO 8. Mini proyecto: Uso de funciones en cadena
// ------------------------------------------------
function obtenerNombreCompleto(usuario) {
  return `${usuario.nombre} ${usuario.apellido}`;
}

function crearMensaje(usuario) {
  const nombreCompleto = obtenerNombreCompleto(usuario);
  return `Bienvenido, ${nombreCompleto}!`; 
}

const usuarioCadena = { nombre: "Luis", apellido: "Ramírez" };
console.log(crearMensaje(usuarioCadena));

// TODO 9. Ejemplo práctico de modularización en un proyecto
// ------------------------------------------------
// En un proyecto real separa la lógica en archivos distintos.
// Aquí se muestra cómo deberías estructurarlo.

/*
TODO **************** archivo: calculadora.js ****************
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

TODO **************** archivo: app.js ****************
import { sumar, restar } from './calculadora.js';
console.log(sumar(3, 7));
console.log(restar(10, 4));
*/

// TODO 10. Buenas prácticas dentro de los ejercicios
// ------------------------------------------------
// - Separar lógica: una función hace una sola cosa.
// - Evitar repetir código: usa funciones y variables.
// - Validar datos antes de trabajar con ellos.
// - Usar nombres claros y consistentes.
// - Añadir comentarios cuando la intención no sea obvia.

console.log("Ejercicios JavaScript listos para practicar.");
