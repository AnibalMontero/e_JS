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

  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] == 'a') {
      ++contador;
    }
  }
  return contador;
}

alert(`La cantidade de a es ${contarletra()}`);
