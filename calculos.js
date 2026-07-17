function calculaTotal(precio, cantidad) {
    return precio * cantidad;
};

function calculaDescuento (precio, porcentajeDescuento) {
    return precio * (porcentajeDescuento / 100);
    
};

function actualizaStock (cantidad, stock) {
    return stock - cantidad;
}

module.exports = {calculaTotal,
                 calculaDescuento,
                 actualizaStock
}