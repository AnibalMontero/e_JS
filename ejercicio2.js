// Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
// function contarletra(frase) {
//   let contador = 0;
//   for (let l of frase) {
//     if (l == 'a') {
//       ++contador;
//     }
//   }
//   return contador;
// }
function contarletra() {
  let frase = prompt('Introduce una frase');
  let letra = prompt('Introduce una letra');
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] == letra) {
      ++contador;
    }
  }
  return contador;
}
console.log(contarletra());

// alert(`La cantidade de a es ${contarletra()}`);

// let frase = prompt("introduce una frase");

// let letra = prompt("introduce una letra");

// for (i = 0; i < frase.length; i++){
//     if (frase[i] == letra){
//      console.log(frase.length[letra]);
//     }
// }
