function validarUser() {
  let usuario = 'Anibal';
  let password = 'anibal';
  let i = 2;
  do {
    let nombre = prompt('Introduce Usuario');
    let contrasena = prompt('Introduce contraseña');
    i--;
  } while (nombre != usuario || password != contrasena || i < 1);
}
validarUser();
