console.log("Hola");
const nav = document.querySelector("#navegar");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
//Aqui creamos 2 eventos de escucha

//El primero para  decir que si hacemos click en abrir nos activa la funcion
abrir.addEventListener("click",()=> {
    nav.classList.add("visible");
});

//El segundo donde si hacemos click  en cerrar activamos la funcion
cerrar.addEventListener("click",()=> {
    nav.classList.remove("visible");
});

