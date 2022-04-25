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

// let menor = 0;
// for (let i = 0; i < 3; i++) {
//   let num = parseInt(prompt('Introduzca un numero'));
//   if (i == 0) menor = num;
//   if (num < menor) menor = num;
// }
// console.log(`el menor de los tres números es ${menor}`);
