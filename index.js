const { calculaTotal, calculaDescuento, actualizaStock } = require("./calculos");

const productos = [
    {nombre: "Coca cola 1 L. (Vidrio)", precio: 5500, stock: 23, cantidad: 3, descuento: 30},
    {nombre: "Alfajor Los Colonos Chocolate 250 G.", precio: 3000, stock: 54, cantidad: 2, descuento: 25},
    {nombre: "Kirko 9no D7N 900 L. (Edicion limitada)", precio: 13500, stock: 13, cantidad: 3, descuento: 35}
];

console.log("Productos con los descuentos aplicados:");

for (let i = 0; i < productos.length; i++){
  const p = productos[i]
  precioDescuento = calculaDescuento(p.precio, p.descuento);
  total = calculaTotal(precioDescuento, p.cantidad);
  stockActualizado = actualizaStock(p.cantidad, p.stock);
  console.log(`Producto: ${p.nombre} | Precio base: ${p.precio} Gs | Precio con descuento: ${precioDescuento} Gs | Cantidad vendida: ${p.cantidad} | Total: ${total} Gs | Stock restante: ${stockActualizado}`);
}