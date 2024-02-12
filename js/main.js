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

// Bucle para seleccionar comida
let pedido = {};

while (true) {
    // Menú de comida
    let opcionComida = prompt(`Menú de comida:\n\n1. Hamburguesa - $${menuComida["Hamburguesa"]} ARS\n2. Pizza - $${menuComida["Pizza"]} ARS\n3. Empanadas - $${menuComida["Empanadas"]} ARS\n4. Hot dog - $${menuComida["Hot dog"]} ARS\n5. Papas fritas - $${menuComida["Papas fritas"]} ARS\n\nIngrese el número de la comida que desea ordenar (o "X" para terminar):`);
    if (opcionComida.toUpperCase() === "X") break;
    opcionComida = parseInt(opcionComida);
    if (opcionComida >= 1 && opcionComida <= 5) {
        let itemComida = Object.keys(menuComida)[opcionComida - 1];
        pedido[itemComida] = menuComida[itemComida];
    } else {
        alert("Opción inválida. Por favor, ingrese un número válido.");
    }
}

// Bucle para seleccionar bebidas
while (true) {
    // Menú de bebidas
    let opcionBebida = prompt(`Menú de bebidas:\n\n1. Coca-Cola - $${menuBebidas["Coca-Cola"]} ARS\n2. Agua mineral - $${menuBebidas["Agua mineral"]} ARS\n3. Cerveza - $${menuBebidas["Cerveza"]} ARS\n4. Jugo de naranja - $${menuBebidas["Jugo de naranja"]} ARS\n5. Café - $${menuBebidas["Café"]} ARS\n\nIngrese el número de la bebida que desea ordenar (o "X" para terminar):`);
    if (opcionBebida.toUpperCase() === "X") break;
    opcionBebida = parseInt(opcionBebida);
    if (opcionBebida >= 1 && opcionBebida <= 5) {
        let itemBebida = Object.keys(menuBebidas)[opcionBebida - 1];
        pedido[itemBebida] = menuBebidas[itemBebida];
    } else {
        alert("Opción inválida. Por favor, ingrese un número válido.");
    }
}

// Calcular total
let total = calcularTotal(pedido);

// Generar ticket
let ticket = "¡Gracias por su orden!\n\nSu pedido:\n";
for (let item in pedido) {
    ticket += `${item}: $${pedido[item]} ARS\n`;
}
ticket += `\nTotal a pagar: $${total} ARS\n\nPresente ticket en caja y retire su comida. ¡Muchas gracias por elegirnos!`;

// Mostrar ticket
alert(ticket);
