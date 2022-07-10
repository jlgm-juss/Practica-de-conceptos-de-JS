/* 

while(condicion logica){
    todas las lineas de codigo que quiero que repita el programa
    cambiar la condicion logica 
}


*/

/*let cantidad = 1;
let opcion =1;

while(cantidad <=20){
    document.write('<p>prepar mate y entregarlo al compañero siguiente, mate cebado</p>'+ cantidad);
    cantidad++ 
}
*/

/* Do-While hacer....mientras (todo con minusculas)

do{
todo el codigo que quiero ejecutar x cantidad de veces
cambiar la condicion logica 
}while (condicion logica "true or false")

*/

/*let mate = 1;

do {
    document.write('<p>prepar mate y entregarlo al compañero siguiente, mate cebado</p>'+ mate)
    mate++;
}while(mate <= 20)
*/

/* bucle for 

for(inicalizar una variable "let x=0" ;condicion logica "<>=";incrementar o decrementar la variable declarada al inicio){
    todo el codigo a ejecutar repetidas veces
}

*/

/*for (let mate = 1; mate <= 20; mate = mate+1){
    document.write('<p>prepar mate y entregarlo al compañero siguiente, mate cebado</p>'+ mate)
};
*/
let txt = prompt("escribe una frase de hasta 10 caracteres");
console.log(txt);
console.log(txt.length);
console.log(txt.charAt(txt.length - 1));
console.log(txt.toLowerCase());
txt = txt.toLowerCase();




for (let vocal = 0; vocal < frase.length; vocal++ ){
    console.log(frase.charAt(vocal))


if (
    txt.charAt(0) === "a" ||
    txt.charAt(0) === "e" ||
    txt.charAt(0) === "i" ||
    txt.charAt(0) === "o" ||
    txt.charAt(0) === "u"
  ) {
    document.write(txt.charAt(vocal));}
  }