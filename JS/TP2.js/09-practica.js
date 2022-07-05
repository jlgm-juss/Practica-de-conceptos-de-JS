let texto = prompt('escribe una frase');
let textosiguiente = texto.length;
let i;
 for (i = 0; i < textosiguiente; i++) {
    if (texto.substring(i,1) === 'a' || texto.substring(i,1) === 'e' ||
    texto.substring(i,1) === 'i' || texto.substring(i,1) === 'o' ||
    texto.substring(i,1) === 'u') {
        document.write(texto.substring(i,1));
    }
 }