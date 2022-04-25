// Suma o resta (según elija el usuario) dos números reales

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
