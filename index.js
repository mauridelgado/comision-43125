const clientes = [
  {
    nombre: "Mauricio Delgado",
    mail: "mauridelgado@mauridelgado.com",
    cedula: 11011010,
    prestamo: 50000,
    plazo: 12,
  },
];
function yaEsCliente() {
  const actualCliente = parseInt(prompt("1-Ya soy cliente 2-Nuevo cliente"));
  if (seleccion === 1) {
    menu();
  } else if (seleccion === 2) {
    newCliente();
  } else {
    alert("Opción inválida");
  }
}
yaEsCliente();
{
  function menu() {
    const seleccion = parseInt(
      prompt("1- Ver préstamos 2-Nuevo préstamo 3-Salir")
    );
    if (seleccion === 1) {
      verPrestamo();
    } else if (seleccion === 2) {
      nuevoPrestamo();
    } else {
      yaEsCliente();
    }
    menu();
  }
  function verPrestamo() {
    const cliente = prompt("Ingrese su nombre");
    const cedula = prompt("Ingrese su cedula");
    const clienteExiste = clientes.find((c) => c.cedula === cliente);
    alert(
      ` Bienvendio, ${clienteExiste.nombre}, usted tiene en curso un préstamo de ${clienteExiste.prestamo} a pagar en ${clienteExiste.plazo} cuotas`
    );
  }

  function nuevoPrestamo() {
    const clienteNombre = prompt("Ingrese su nombre");
    const clienteCedula = prompt("Ingrese cédula");
    const newPrestamo = parseInt(
      prompt("ingrese el monto de su nuevo préstamo")
    );
    const newPlazo = parseInt(prompt("ingrese el plazo en meses"));
    const clienteExiste = clientes.find((c) => c.cedula === cliente);
    const estePrestamo = {
      prestamo: newPrestamo,
      plazo: newPlazo,
    };
    clientes.push(estePrestamo);
  }

  function newCliente() {
    const clienteNombre = prompt("Ingrese su nombre");
    const clienteCedula = prompt("Ingrese cédula");
    const nuevoCliente = {
      nombre: clienteNombre,
      cedula: clienteCedula,
    };
    clientes.push(nuevoCliente);
    menu();
  }
}
