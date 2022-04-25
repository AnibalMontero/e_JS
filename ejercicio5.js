// Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra

let letra = prompt('Introduce una letra');

switch (letra) {
  case a:
    console.log(7);
  case b:
    console.log(9);
  case c:
    console.log(101);
}
