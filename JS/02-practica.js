//fiesta
//mayor de edad
//no mayor de edad acompañado de tutor
//menor de edad y no va acompañado de tutor

let edad = 16;
let tutor = false; 

if (edad >= 18){ 
    console.log('puede ingresar a la fiesta porque es mayor de edad');

}else if (tutor){
    console.log('debes ingresar acompañado de un tutor')
}else{
    console.warn('no puedes entrar a la fiesta')

}