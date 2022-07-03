// scope de Javascript

//tipos de scope

//global

let persona = {
  nombre: "jose",
  direccion: "Av. Jaldo 800",
};

const getDatos = function () {
  console.log("nombre: ${persona.nombre}");
  console.log("direccion: ${persona.direccion}");
};
