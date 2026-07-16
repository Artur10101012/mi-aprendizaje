function calcularTotal (precio, cantidad, descuento) {
    const subTotal = precio * cantidad;
    const montoDescuento = subTotal * (descuento/100)
    return subTotal - montoDescuento
}

module.exports = { calcularTotal };