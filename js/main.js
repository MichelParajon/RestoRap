// Definición del menú y precios 
let menuComida = {
    "Hamburguesa": 2500,
    "Pizza": 3000,
    "Empanadas": 2000,
    "Hot dog": 1800,
    "Papas fritas": 1500
};

let menuBebidas = {
    "Coca-Cola": 1000,
    "Agua mineral": 800,
    "Cerveza": 2000,
    "Jugo de naranja": 1200,
    "Café": 1500
};

// Mensaje de bienvenida
alert("¡Bienvenido a RestoRap!");

// Función para calcular el total del pedido
function calcularTotal(pedido) {
    let total = 0;
    for (let item in pedido) {
        total += pedido[item];
    }
    return total;
}

// Función para preguntar si desea ordenar algo más
function deseaOrdenarMas() {
    let opcion = prompt("¿Desea ordenar algo más?\n1. Sí\n2. No");
    return opcion === "1";
}

// Bucle para seleccionar comida
let pedidoComida = {};

do {
    let opcionComida = parseInt(prompt(`Menú de comida:\n\n1. Hamburguesa - $${menuComida["Hamburguesa"]} ARS\n2. Pizza - $${menuComida["Pizza"]} ARS\n3. Empanadas - $${menuComida["Empanadas"]} ARS\n4. Hot dog - $${menuComida["Hot dog"]} ARS\n5. Papas fritas - $${menuComida["Papas fritas"]} ARS\n\nIngrese el número de la comida que desea ordenar:`));
    let itemComida = Object.keys(menuComida)[opcionComida - 1];
    let cantidadComida = parseInt(prompt(`Ingrese la cantidad de ${itemComida} que desea ordenar:`));
    if (!isNaN(cantidadComida) && cantidadComida > 0) {
        if (pedidoComida[itemComida]) {
            pedidoComida[itemComida] += menuComida[itemComida] * cantidadComida;
        } else {
            pedidoComida[itemComida] = menuComida[itemComida] * cantidadComida;
        }
    } else {
        alert("Cantidad inválida. Por favor, ingrese un número válido.");
    }
} while (deseaOrdenarMas());

// Bucle para seleccionar bebidas
let pedidoBebidas = {};

do {
    let opcionBebida = parseInt(prompt(`Menú de bebidas:\n\n1. Coca-Cola - $${menuBebidas["Coca-Cola"]} ARS\n2. Agua mineral - $${menuBebidas["Agua mineral"]} ARS\n3. Cerveza - $${menuBebidas["Cerveza"]} ARS\n4. Jugo de naranja - $${menuBebidas["Jugo de naranja"]} ARS\n5. Café - $${menuBebidas["Café"]} ARS\n\nIngrese el número de la bebida que desea ordenar:`));
    let itemBebida = Object.keys(menuBebidas)[opcionBebida - 1];
    let cantidadBebida = parseInt(prompt(`Ingrese la cantidad de ${itemBebida} que desea ordenar:`));
    if (!isNaN(cantidadBebida) && cantidadBebida > 0) {
        if (pedidoBebidas[itemBebida]) {
            pedidoBebidas[itemBebida] += menuBebidas[itemBebida] * cantidadBebida;
        } else {
            pedidoBebidas[itemBebida] = menuBebidas[itemBebida] * cantidadBebida;
        }
    } else {
        alert("Cantidad inválida. Por favor, ingrese un número válido.");
    }
} while (deseaOrdenarMas());

// Capturar dirección de entrega
let direccionEntrega = prompt("Ingrese la dirección de entrega:");

// Capturar código de descuento
let codigoDescuento = prompt("Ingrese el código de descuento (10 para 10% de descuento, 20 para 20% de descuento, o No si no tiene cupón de descuento):");

// Calcular total de la orden
let total = calcularTotal(pedidoComida) + calcularTotal(pedidoBebidas);

// Aplicar descuento
let descuento = 0;
let descuentoTexto = "";

if (codigoDescuento === "10") {
    descuento = total * 0.1;
    descuentoTexto = "10%";
} else if (codigoDescuento === "20") {
    descuento = total * 0.2;
    descuentoTexto = "20%";
}

total -= descuento;

// Generar ticket
let ticket = "¡Gracias por su orden!\n\nSu pedido:\n";
for (let item in pedidoComida) {
    ticket += `${item}: $${pedidoComida[item]} ARS\n`;
}
for (let item in pedidoBebidas) {
    ticket += `${item}: $${pedidoBebidas[item]} ARS\n`;
}
ticket += `\nDirección de entrega: ${direccionEntrega}\nDescuento aplicado: ${descuentoTexto}\nTotal a pagar: $${total} ARS\n\nPresente ticket en caja y retire su comida. ¡Muchas gracias por elegirnos!`;

// Mostrar ticket
alert(ticket);
