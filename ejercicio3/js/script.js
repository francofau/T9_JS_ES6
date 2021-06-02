function contar(texto) {
  return [...texto].length;
}
let frase = prompt("Ingrese la frase")
let resultado = contar(frase);
console.log('Resultado: ' + resultado);

//cuenta espacios. Corregir