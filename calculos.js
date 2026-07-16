function calculaTotal(precio, cantidad) {
    return precio * cantidad;
};

function calculaDescuento (precio, porcentajeDescuento) {
    return precio * (porcentajeDescuento / 100);
    
}

module.exports = {calculaTotal,
                 calculaDescuento
}