//Suma o resta (según elija el usuario) dos números reales

let primerNumero = +prompt('Introduzca un numero');

let segundoNumero = +prompt('Introduzca segundo numero');

if (confirm('Quiere restar los numeros?')) {
  console.log(primerNumero - segundoNumero);
} else {
  confirm('Quiere sumar los numeros?');
  {
    console.log(primerNumero + segundoNumero);
  }
}

// let primerNumero = +prompt('Introduzca un numero');

// let segundoNumero = +prompt('Introduzca segundo numero');
// let opcion = prompt('Qué desea hacer sumar(S) o restar(R)');

// function sumaOresta(primerNumero, segundoNumero, opcion) {
//   if (opcion == 'S') {
//     return primerNumero + segundoNumero;
//   } else if (opcion == 'R') {
//     return primerNumero - segundoNumero;
//   } else {
//     return;
//   }
// }
// console.log(sumaOresta(primerNumero, segundoNumero, opcion));
