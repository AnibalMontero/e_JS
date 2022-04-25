// Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra

let letra = prompt('Introduce una letra');

switch (letra) {
  case (letra = 'a'):
    console.log(7);
    break;
  case (letra = 'b'):
    console.log(9);
    break;
  case (letra = 'c'):
    console.log(101);
    break;
  default:
    console.log('Te has equivocado de Letra');
}
//la misma version pero con alert

// let letra = prompt('Introduce una letra');

// switch (letra) {
//   case letra = "a":
//     alert("7")
//     break
//   case letra = "b":
//     alert("9");
//     break
//   case letra = "c":
//     alert("101");
//     break
//     default:
//         console.log("Te has equivocado de Letra");
// }
