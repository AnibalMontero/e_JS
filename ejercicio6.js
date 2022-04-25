// Ordena alfabéticamente un array con 7 palabras, puedes usar el algoritmo de la burbuja
let miArray = ['Xiomara', 'Mesa', 'Frutas', 'Bueno', 'Alma', 'Tierra', 'Dado'];

function ordenaArray(miArray) {
  if (miArray.length < 1) {
    return [];
  }

  let elemIzqArray = [];
  let elemDerArray = [];
  let primerElem = miArray[0];

  for (let i = 1; i < miArray.length; i++) {
    if (miArray[i] < primerElem) {
      elemIzqArray.push(miArray[i]);
    } else {
      elemDerArray.push(miArray[i]);
    }
  }
  return [].concat(
    ordenaArray(elemIzqArray),
    primerElem,
    ordenaArray(elemDerArray)
  );
}

// miArray.sort((a, b) => (a > b ? 1 : -1));
// miArray.sort((a, b) => a.localeCompare(b));
console.log(ordenaArray(miArray));
