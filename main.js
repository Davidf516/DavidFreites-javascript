///venta de Hamburguesas 

class Producto {
///////el constructor recibe nombre y precio
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    
////////metodo para vender los productos
    vender() {
        this.vendido = true;
    }
}
    ////////arreglo vacio que va a contener los productos
const productos = [];
    
///////agregamos con el push objetos nuevos creados por la clase Producto al arreglo vacio
productos.push(new Producto("la con queso", 10));
productos.push(new Producto("la crispy", 12));
productos.push(new Producto("la con queso doble", 14));
productos.push(new Producto("la de la casa", 12));
    
//pedimos el nombre del producto a consultar
let nombre = prompt("Ingrese el nombre del producto a consultar");
const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const iva = (precioProducto) => precioProducto * 0.08;
while (nombre != "ESC") {
//declaramos la variable que contendrá el producto en caso de encontrarlo
    let producto;
    
    //recorremos el arreglo verificando si alguno de los productos cumple con el nombre
    for (const item of productos) {
        if (item.nombre === nombre) {
            producto = item;
        }
    }
    
    if (producto) {
        let mensaje = `
            Nombre: ${producto.nombre}
            Precio: $${producto.precio} "+ tax - descuento"
        `;
    
        alert(mensaje);

        if (producto.precio === 10){
    
            let precioProducto = 10;
            let descuento = 10 * 0.10;
            // precioProducto + iva - descuento
            let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
            // = resta(suma(1000, iva(1000)), 100);
            // = resta(suma(1000, 210), 100);
            // = resta(1210, 100);
            // = 1110
            alert(`el precio final de su compra con el tax y el descuento es de $ ${nuevoPrecio}`);
        }
        if (producto.precio === 12){
    
            let precioProducto = 12;
            let descuento = 12 * 0.10;
            // precioProducto + iva - descuento
            let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
            // = resta(suma(1000, iva(1000)), 100);
            // = resta(suma(1000, 210), 100);
            // = resta(1210, 100);
            // = 1110
            alert(`el precio final de su compra con el tax y el descuento es de $ ${nuevoPrecio}`);
        }
        if (producto.precio === 14){
    
            let precioProducto = 14;
            let descuento = 14 * 0.10;
            // precioProducto + iva - descuento
            let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
            // = resta(suma(1000, iva(1000)), 100);
            // = resta(suma(1000, 210), 100);
            // = resta(1210, 100);
            // = 1110
            alert(`el precio final de su compra con el tax y el descuento es de $ ${nuevoPrecio}`);
        }
    } else {
        alert("El producto no se encuentra disponible");
    }
nombre = prompt("Ingrese el nombre del productoa  consultar");
}