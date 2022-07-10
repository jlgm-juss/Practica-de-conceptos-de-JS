// let texto = prompt('escribe una frase');
// let textosiguiente = texto.length;
// let i;
//  for (i = 0; i < textosiguiente; i++) {
// if (texto.substring(i,1) === 'a' || texto.substring(i,1) === 'e' ||
// texto.substring(i,1) === 'i' || texto.substring(i,1) === 'o' ||
// texto.substring(i,1) === 'u') {
// document.write(texto.substring(i,1));
// }
//  }

// alternativa larga...

let txt = prompt("escribe una frase de hasta 10 caracteres");
console.log(txt);
console.log(txt.length);
console.log(txt.charAt(txt.length - 1));
console.log(txt.toLowerCase());
txt = txt.toLowerCase();
if (
  txt.charAt(0) === "a" ||
  txt.charAt(0) === "e" ||
  txt.charAt(0) === "i" ||
  txt.charAt(0) === "o" ||
  txt.charAt(0) === "u"
) {
  document.write(txt.charAt(0));
}
if (
  txt.charAt(1) === "a" ||
  txt.charAt(1) === "e" ||
  txt.charAt(1) === "i" ||
  txt.charAt(1) === "o" ||
  txt.charAt(1) === "u"
) {
  document.write(txt.charAt(1));
}
if (
  txt.charAt(2) === "a" ||
  txt.charAt(2) === "e" ||
  txt.charAt(2) === "i" ||
  txt.charAt(2) === "o" ||
  txt.charAt(2) === "u"
) {
  document.write(txt.charAt(2));
}
if (
  txt.charAt(3) === "a" ||
  txt.charAt(3) === "e" ||
  txt.charAt(3) === "i" ||
  txt.charAt(3) === "o" ||
  txt.charAt(3) === "u"
) {
  document.write(txt.charAt(3));
}
if (
  txt.charAt(4) === "a" ||
  txt.charAt(4) === "e" ||
  txt.charAt(4) === "i" ||
  txt.charAt(4) === "o" ||
  txt.charAt(4) === "u"
) {
  document.write(txt.charAt(4));
}
