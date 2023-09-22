//alert("Hola este es mi Javascript");
let contenidoTitulo = "nombre";

let titulo = document.querySelector(".logo .fuente-oscura");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "nombre") {
    titulo.innerHTML = "otro";
} else {
    console.log("no se cumple");
}