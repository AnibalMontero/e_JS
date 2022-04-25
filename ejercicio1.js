// Solicita al usuario tres números enteros e indícale cuál es el menor.

let primerNumero = parseInt(prompt('Introduzca primer numero'));

let segundoNumero = parseInt(prompt('Introduzca segundo numero'));

let tercerNumero = parseInt(prompt('Introduzca tercer numero'));

if (primerNumero < segundoNumero && primerNumero < tercerNumero) {
  console.log('Este numero es el menor ' + primerNumero);
} else if (segundoNumero < primerNumero && segundoNumero < tercerNumero) {
  console.log('Este es el menor ' + segundoNumero);
} else {
  console.log('este es el menor ' + tercerNumero);
}

// switch(primerNumero) {
//     case < segundoNumero && :
//         console.log ("Este es el menor");
//         break;
// }
