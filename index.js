const clientes = [
  {
    nombre: "Mauricio Delgado",
    mail: "mauridelgado@mauridelgado.com",
    cedula: 11011010,
    prestamo: 50000,
    plazo: 12,
  },
];
function init() {
  const seleccion = parseInt(prompt("1-Ya soy cliente 2-Nuevo cliente"));
  if (seleccion === 1) {
    login();
  } else if (seleccion === 2) {
    newCliente();
  } else {
    alert("Opción inválida");
    init();
  }
}
init();

function login() {
  const cliente = prompt("Ingrese su nombre");
  const cedula = prompt("Ingrese su cédula sin puntos ni guiones");
  const clienteExiste = clientes.find((c) => c.cedula === parseInt(cedula));
  if (clienteExiste) {
    menu();
  } else {
    alert("Usted no es cliente");
    init();
  }
}
function menu(clienteExiste) {
  const seleccion = parseInt(
    prompt("1- Ver préstamos 2-Nuevo préstamo 3-Salir")
  );
  if (seleccion === 1) {
    verPrestamo(clienteExiste);
  } else if (seleccion === 2) {
    nuevoPrestamo(clienteExiste);
  } else if (seleccion === 3) {
    return;
  } else {
    menu();
  }
}
function verPrestamo(clienteExiste) {
  alert(
    ` Bienvendio, ${clienteExiste.nombre}, usted tiene en curso un préstamo de ${clienteExiste.prestamo} a pagar en ${clienteExiste.plazo} cuotas`
  );
}

function nuevoPrestamo(clienteExiste) {
  const newPrestamo = parseInt(prompt("Ingrese el monto de su nuevo préstamo"));
  const newPlazo = parseInt(prompt("Ingrese el plazo en meses"));
  clienteExiste.prestamo = newPrestamo;
  clienteExiste.plazo = newPlazo;
  alert("El préstamo está siendo procesado. Nos comunicaremos a la brevedad.");
  init();
}

function newCliente() {
  const clienteNombre = prompt("Ingrese su nombre");
  const clienteCedula = prompt("Ingrese cédula");
  const nuevoCliente = {
    nombre: clienteNombre,
    cedula: parseInt(clienteCedula),
  };
  clientes.push(nuevoCliente);
  menu(nuevoCliente);
}
