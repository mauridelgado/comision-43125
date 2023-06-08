let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
let numeroCuotas = parseInt(prompt("Ingrese número de cuotas"));
function precioRecargado(precioProducto, recargo) {
  precioRecargado = precioProducto * recargo;
  return precioRecargado;
}
function precioCuotas(precioRecargado, numeroCuotas) {
  precioCuotas = precioRecargado / numeroCuotas;
  return precioCuotas;
}
while (numeroCuotas > 24) {
  alert("El número máximo de cuotas es 24");
  numeroCuotas = parseInt(prompt("Ingrese número de cuotas"));
}

if (numeroCuotas === 1) {
  alert(
    "El precio final del producto es $" +
      precioProducto +
      " y usted lo pagó en 1 cuota de $" +
      precioProducto
  );
} else if (numeroCuotas <= 3) {
  const hastaTres = precioRecargado(precioProducto, 1.08);
  const precioDeTres = precioCuotas(hastaTres, numeroCuotas);
  alert(
    "El precio final del producto es $" +
      hastaTres +
      " y usted lo pagó en " +
      numeroCuotas +
      " cuotas de $" +
      precioDeTres
  );
} else if (numeroCuotas <= 6) {
  const hastaSeis = precioRecargado(precioProducto, 1.12);
  const precioHastaSeis = precioCuotas(hastaSeis, numeroCuotas);
  alert(
    "El precio final del producto es " +
      hastaSeis +
      " y usted lo pagó en " +
      numeroCuotas +
      " cuotas de " +
      precioHastaSeis
  );
} else if (numeroCuotas <= 12) {
  const hastaDoce = precioRecargado(precioProducto, 1.18);
  const precioHastaDoce = precioCuotas(hastaDoce, numeroCuotas);
  alert(
    "El precio final del producto es " +
      hastaDoce +
      " y usted lo pagó en " +
      numeroCuotas +
      " cuotas de " +
      precioHastaDoce
  );
} else if (numeroCuotas <= 24) {
  const hastaVeinticuatro = precioRecargado(precioProducto, 1.22);
  const precioHastaVeinticuatro = precioCuotas(hastaVeinticuatro, numeroCuotas);
  alert(
    "El precio final del producto es " +
      hastaVeinticuatro +
      " y usted lo pagó en " +
      numeroCuotas +
      " cuotas de " +
      precioHastaVeinticuatro
  );
}
