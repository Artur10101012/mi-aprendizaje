function calculaTotal(precio, cantidad) {
    return precio * cantidad;
};

function calculaDescuento (precio, porcentajeDescuento) {
    const monto = precio * (porcentajeDescuento / 100);
    return precio - monto; 
    
};

function actualizaStock (cantidad, stock) {
    return stock - cantidad;
}

module.exports = {calculaTotal,
                 calculaDescuento,
                 actualizaStock
}