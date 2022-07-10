let estacion = parseInt(
  prompt(
    "Ingrese su estación de año preferida: 1-verano, 2-otoño, 3-primavera, 4-invierno"
  )
);

//if (estacion === 1){
// document.write('helado');
//}else if (estacion == 2){
// document.write('locro');
//}else if (estacion == 4){
// document.write('chocolate');
//}else if (estacion == 3){
// document.write('cerveza');
//}else {
// document.write('Ingrese una opcion erronea');
//}

/* 
switch (opcion "pueden ser textos o numero - no una condicion -"){
    case 1:
        todas las lineas de codigo en caso de que el usuario seleccionó 1
        .....
        .....
        break;
        case 2:
        todas las lineas de codigo en caso de que el usuario seleccionó 1
        .....
        .....
        break;
        case 3:
        todas las lineas de codigo en caso de que el usuario seleccionó 1
        .....
        .....
        break;
        default: 
        todas las lineas que quiero ejecutar en caso de que el usuario seleccionó una opción diferente a los case
}
*/

switch (estacion) {
  case 1:
    document.write("helado");
    break;
  case 2:
    document.write("locro");
    break;
  case 3:
    document.write("cerveza");
    break;
  case 4:
    document.write("chocolate");
    break;
  default:
    document.write("ingresaste una opcion erronea");
}
