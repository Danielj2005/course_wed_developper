/**
 * Mini proyectos y ejercicios para practicar JavaScript.
 * Aquí se muestran ejemplos que se pueden ejecutar y modificar.
 */

// -------------------------------------------------------------
// TODO Mini proyecto 1: Calculadora básica
// -------------------------------------------------------------

const calculadora = {
  sumar(a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b;
  },
  multiplicar(a, b) {
    return a * b;
  },
  dividir(a, b) {
    if (b === 0) {
      return "No se puede dividir entre cero.";
    }
    return a / b;
  },
};

console.log("Calculadora:", calculadora.sumar(5, 3));
console.log("Calculadora:", calculadora.dividir(10, 2));
console.log("Calculadora:", calculadora.dividir(10, 0));

// -------------------------------------------------------------
// TODO Mini proyecto 2: Lista de tareas (todo list)
// -------------------------------------------------------------

const tareas = [
  { id: 1, texto: "Aprender variables", completada: true },
  { id: 2, texto: "Practicar funciones", completada: false },
  { id: 3, texto: "Leer guía de JavaScript", completada: false },
];

function mostrarTareas(tareasArray) {
  tareasArray.forEach((tarea) => {
    const estado = tarea.completada ? "✅" : "⏳";
    console.log(`${estado} [${tarea.id}] ${tarea.texto}`);
  });
}

function agregarTarea(texto) {
  const nuevaTarea = {
    id: tareas.length + 1,
    texto,
    completada: false,
  };
  tareas.push(nuevaTarea);
}

function completarTarea(id) {
  const tarea = tareas.find((tareaItem) => tareaItem.id === id);
  if (tarea) {
    tarea.completada = true;
  }
}

console.log("Tareas iniciales:");
mostrarTareas(tareas);

agregarTarea("Crear un mini proyecto");
completarTarea(2);

console.log("Tareas actualizadas:");
mostrarTareas(tareas);

// -------------------------------------------------------------
// TODO Mini proyecto 3: Filtrar datos de usuarios
// -------------------------------------------------------------

const usuarios = [
  { nombre: "Ana", edad: 22, pais: "España" },
  { nombre: "Carlos", edad: 30, pais: "México" },
  { nombre: "María", edad: 18, pais: "Argentina" },
];

const mayoresDeEdad = usuarios.filter((usuario) => usuario.edad >= 18);
console.log("Usuarios mayores de edad:", mayoresDeEdad);

const nombresUsuarios = usuarios.map((usuario) => usuario.nombre);
console.log("Nombres de usuarios:", nombresUsuarios);

// -------------------------------------------------------------
// TODO Mini proyecto 4: Inventario de productos con clases
// -------------------------------------------------------------

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  obtenerTotal() {
    return this.precio * this.cantidad;
  }
}

class Inventario {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularValorTotal() {
    return this.productos.reduce((total, producto) => total + producto.obtenerTotal(), 0);
  }
}

const inventario = new Inventario();
inventario.agregarProducto(new Producto("Gorra", 10, 5));
inventario.agregarProducto(new Producto("Camiseta", 15, 3));
console.log("Valor total del inventario:", inventario.calcularValorTotal());

// -------------------------------------------------------------
// TODO Mini proyecto 5: Ejercicio práctico de fecha y hora
// -------------------------------------------------------------

function mostrarFechaActual() {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Enero es 0
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
}

console.log("Fecha actual:", mostrarFechaActual());

// -------------------------------------------------------------
// TODO Ejercicio extra: Contador interactivo dentro del código
// -------------------------------------------------------------

const contador = {
  valor: 0,
  incrementar() {
    this.valor += 1;
    return this.valor;
  },
  decrementar() {
    this.valor -= 1;
    return this.valor;
  },
  reset() {
    this.valor = 0;
    return this.valor;
  },
};

console.log("Contador:", contador.incrementar());
console.log("Contador:", contador.incrementar());
console.log("Contador reset:", contador.reset());

// -------------------------------------------------------------
// TODO Fin de ejemplos prácticos
// -------------------------------------------------------------
