// Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos)
function validarUser() {
  let usuario = 'Anibal';
  let password = 'anibal';
  let nombre;
  let contrasena;
  let i = 3;

  do {
    nombre = prompt('Introduce Usuario');
    contrasena = prompt('Introduce contraseña');
    i--;
  } while ((nombre != usuario || password != contrasena) && i > 0);
}
validarUser();
