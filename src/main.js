/* TALLER: SISTEMA DE INVENTARIO */
/* 1. Arreglo inicial con productos base */
let inventario = [
  { nombre: "Martillo", cantidad: 10, precio: 12.5 },
  { nombre: "Destornillador", cantidad: 25, precio: 4.75 },
  { nombre: "Clavos", cantidad: 100, precio: 3.25 }
];

let activo = true;

/* Texto del menú principal*/
const menuTexto =
  "=== SISTEMA DE INVENTARIO ===\n\n" +
  "1. Agregar producto\n" +
  "2. Ver inventario\n" +
  "3. Actualizar inventario (cantidad)\n" +
  "4. Salir\n\n" +
  "Escribe el número de tu opción:";

/* 2. Ciclo principal para mantener el programa corriendo hasta que el usuario decida salir*/
while (activo) {
  let opcion = prompt(menuTexto);

  /* 3. Estructura condicional (switch) para manejar las opciones del menú*/
  switch (opcion) {
    case "1": {
      // Opción 1: Agregar producto
      let nombre = prompt("Ingresa el nombre del producto:");
      let cantidad = Number(prompt("Ingresa la cantidad inicial:"));
      let precio = Number(prompt("Ingresa el precio del producto:"));

      /* Validar que los datos sean correctos*/
      if (nombre && nombre.trim() !== "" && !isNaN(cantidad) && !isNaN(precio)) {
        let nuevoProducto = {
          nombre: nombre.trim(),
          cantidad: cantidad,
          precio: precio
        };

        inventario.push(nuevoProducto);
        alert(`✅ Producto "${nuevoProducto.nombre}" agregado con éxito.`);
      } else {
        alert("❌ Error: Datos inválidos. Por favor, verifica la información.");
      }
      break;
    }

    case "2": {
      /* Opción 2: Ver inventario*/
      if (inventario.length === 0) {
        alert("📦 El inventario está vacío.");
      } else {
        console.clear();
        console.log("=== INVENTARIO ACTUALIZADO ===");
        console.table(inventario);
        alert("Se ha impreso la tabla del inventario en la consola de tu navegador (F12).");
      }
      break;
    }

    case "3": {
      /* Opción 3: Actualizar cantidad de un producto existente*/
      if (inventario.length === 0) {
        alert("📦 No hay productos en el inventario para actualizar.");
        break;
      }

      let nombreBuscar = prompt("Ingresa el nombre exacto del producto a actualizar:").toLowerCase();
      let encontrado = false;

      for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre.toLowerCase() === nombreBuscar) {
          encontrado = true;
          let nuevaCantidad = Number(prompt(`Producto encontrado: ${inventario[i].nombre}\nCantidad actual: ${inventario[i].cantidad}\n\nIngresa la nueva cantidad:`));

          if (!isNaN(nuevaCantidad)) {
            inventario[i].cantidad = nuevaCantidad;
            alert(`✅ Cantidad actualizada correctamente para "${inventario[i].nombre}".`);
          } else {
            alert("❌ Error: Debes ingresar un número válido.");
          }
          break;
        }
      }

      if (!encontrado) {
        alert("❌ Producto no encontrado en el inventario.");
      }
      break;
    }

    case "4":
    case null: {
      /* Opción 4: Salir del programa*/
      activo = false;
      alert("👋 Saliendo del programa. ¡Hasta pronto!");
      console.log("Programa finalizado por el usuario.");
      break;
    }

    default: {
      alert("❌ Opción no válida. Por favor, elige un número del 1 al 4.");
      break;
    }
  }
}