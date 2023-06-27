let clientes = [];

let nombreCliente = prompt("Ingrese su nombre");
let cedula = prompt("Ingrese su cédula");

function yaEsCliente(cedula) {
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].cedula === cedula) {
      return true;
    }
  }
  return false;
}

let nuevoCliente = {};
if (yaEsCliente(cedula)) {
  alert("El cliente ya está registrado");
} else {
  nuevoCliente = {
    nombre: nombreCliente,
    cedula: cedula,
    prestamoEnCurso: false,
    dineroDebido: 0,
  };
}
clientes.push(nuevoCliente);
console.log(clientes);

function tieneDeuda(cedula) {
  for (let i = 0; clientes.length; i++) {
    if (clientes[i].cedula === cedula && clientes[i].dineroDebido >= 30000) {
      return true;
    } else {
      return false;
    }
  }
}

if (tieneDeuda(cedula)) {
  alert("Usted no puede solicitar préstamos debido a que tiene uno en curso");
} else {
  let financiacion = parseFloat(
    prompt("Ingrese su monto deseado para el préstamo")
  );
  if (financiacion > 100000) {
    alert(
      "Nuestro préstamo máximo online es de $100.000. Prueba en alguna de nuestras sucursales!"
    );
  } else {
    let numeroCuotas = parseInt(prompt("Ingrese número de cuotas"));
    function pagoFinal(finaciacion, recargo) {
      pagoAlFinal = financiacion * recargo;
      return pagoAlFinal;
    }
    function precioCuotas(pagoFinal, numeroCuotas) {
      precioPorCuotas = pagoFinal / numeroCuotas;
      return precioPorCuotas;
    }
    while (numeroCuotas > 24) {
      alert("El número máximo de cuotas es 24");
      numeroCuotas = parseInt(prompt("Ingrese número de cuotas"));
    }
    if (numeroCuotas === 1) {
      alert(
        "Hola " +
          nombreCliente +
          "! Su préstamo es de: $" +
          financiacion +
          " y usted lo pagará en 1 cuota de $" +
          financiacion
      );
    } else if (numeroCuotas <= 3) {
      const hastaTres = pagoFinal(financiacion, 1.08);
      const precioDeTres = precioCuotas(hastaTres, numeroCuotas);
      alert(
        "Hola " +
          nombreCliente +
          "! Su préstamo es de: $" +
          financiacion +
          " y usted lo pagará en " +
          numeroCuotas +
          " cuotas de $" +
          precioDeTres
      );
    } else if (numeroCuotas <= 6) {
      const hastaSeis = pagoFinal(financiacion, 1.12);
      const precioHastaSeis = precioCuotas(hastaSeis, numeroCuotas);
      alert(
        "Hola " +
          nombreCliente +
          "! Su préstamo es de: $" +
          financiacion +
          " y usted lo pagará en " +
          numeroCuotas +
          " cuotas de " +
          precioHastaSeis
      );
    } else if (numeroCuotas <= 12) {
      const hastaDoce = pagoFinal(financiacion, 1.18);
      const precioHastaDoce = precioCuotas(hastaDoce, numeroCuotas);
      alert(
        "Hola " +
          nombreCliente +
          "! Su préstamo es de: $" +
          financiacion +
          " y usted lo pagará en " +
          numeroCuotas +
          " cuotas de " +
          precioHastaDoce
      );
    } else if (numeroCuotas <= 24) {
      const hastaVeinticuatro = pagoFinal(financiacion, 1.22);
      const precioHastaVeinticuatro = precioCuotas(
        hastaVeinticuatro,
        numeroCuotas
      );
      alert(
        "Hola " +
          nombreCliente +
          "! Su préstamo es de: $" +
          financiacion +
          " y usted lo pagará en " +
          numeroCuotas +
          " cuotas de " +
          precioHastaVeinticuatro
      );
    }
  }
}
